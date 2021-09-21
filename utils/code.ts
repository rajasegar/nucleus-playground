import isBoolean from 'lodash/isBoolean'
import filter from 'lodash/filter'

const capitalize = (value: string) => {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export const formatCode = async (code: string) => {
  let formattedCode = `// 🚨 Your props contains invalid code`

  const prettier = await import('prettier/standalone')
  const babelParser = await import('prettier/parser-babel')

  try {
    formattedCode = prettier.format(code, {
      parser: 'babel',
      plugins: [babelParser],
      semi: false,
      singleQuote: true,
    })
  } catch (e) {
    console.log(e);
  }

  return formattedCode
}

type BuildBlockParams = {
  component: any
  components: any
  forceBuildBlock?: boolean
}

const buildBlock = ({
  component,
  components,
  forceBuildBlock = false,
}: BuildBlockParams) => {
    debugger;
  let content = ''

  component.children.forEach((key: string) => {
    let childComponent = components[key]
    if (!childComponent) {
      console.error(`invalid component ${key}`)
    } else if (forceBuildBlock || !childComponent.componentName) {
      const componentName = capitalize(childComponent.type)
      let propsContent = ''

      const propsNames = Object.keys(childComponent.props).filter(propName => {
        if (childComponent.type === 'Icon') {
          return propName !== 'icon'
        }

        return true
      })

      propsNames.forEach((propName: string) => {
        const propsValue = childComponent.props[propName]

        if (propName !== 'children' && propsValue) {
          let operand = `='${propsValue}'`

          if (propsValue === true || propsValue === 'true') {
            operand = ``
          } else if (
            propsValue === 'false' ||
            isBoolean(propsValue) ||
            !isNaN(propsValue)
          ) {
            operand = `={${propsValue}}`
          }

          propsContent += `${propName}${operand} `
        }
      })

      if (
        typeof childComponent.props.children === 'string' &&
        childComponent.children.length === 0
      ) {
        content += `<${componentName} ${propsContent}>${childComponent.props.children}</${componentName}>`
      } else if (childComponent.type === 'Icon') {
        content += `<${childComponent.props.icon} ${propsContent} />`
      } else if (childComponent.children.length) {
        content += `<${componentName} ${propsContent}>
      ${buildBlock({ component: childComponent, components, forceBuildBlock })}
      </${componentName}>`
      } else {
        content += `<${componentName} ${propsContent} />`
      }
    } else {
      content += `<${childComponent.componentName} />`
    }
  })

  return content
}

const buildComponents = (components: any) => {
  const codes = filter(components, comp => !!comp.componentName).map(comp => {
    return generateComponentCode({
      component: { ...components[comp.parent], children: [comp.id] },
      components,
      forceBuildBlock: true,
      componentName: comp.componentName,
    })
  })

  return codes.reduce((acc, val) => {
    return `
      ${acc}

      ${val}
    `
  }, '')
}

type GenerateComponentCode = {
  component: any
  components: any
  componentName?: string
  forceBuildBlock?: boolean
}

export const generateComponentCode = ({
  component,
  components,
  componentName,
  forceBuildBlock,
}: GenerateComponentCode) => {
  let code = buildBlock({
    component,
    components,
    forceBuildBlock,
  })

  code = `
const ${componentName} = () => (
  ${code}
)`

  return code
}

export const generateCode = async (components: any) => {
  let code = buildBlock({ component: components.root, components })
  let componentsCodes = buildComponents(components)

  const imports = [
    ...new Set(
      Object.keys(components)
        .filter(name => name !== 'root')
        .map(name => components[name].type),
    ),
  ]

  code = `import React from 'react';
import {
  ThemeProvider as NucleusThemeProvider,
  UiProvider as NucleusUiProvider,
  ${imports.join(',')}
} from '@freshworks/react-nucleus';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';
${componentsCodes}

const App = () => {

    const theme = { dir: 'ltr' };
return (
<NucleusThemeProvider theme={theme}>
            <NucleusUiProvider>
                <StyledThemeProvider theme={theme}>
    ${code}
                </StyledThemeProvider>
            </NucleusUiProvider>
        </NucleusThemeProvider>
);
}

export default App;`

  return await formatCode(code)
}


