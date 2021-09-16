import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import {
  ThemeProvider as NucleusThemeProvider,
  UiProvider as NucleusUiProvider,
} from '@freshworks/react-nucleus';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {

    const theme = { dir: 'ltr' };
    return (
        <NucleusThemeProvider theme={theme}>
            <NucleusUiProvider>
                <StyledThemeProvider theme={theme}>
                    <DndProvider backend={HTML5Backend}>
                        <Component {...pageProps} />
                    </DndProvider>
                </StyledThemeProvider>
            </NucleusUiProvider>
        </NucleusThemeProvider>
    )
}
export default MyApp
