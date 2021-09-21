import React, { memo } from "react";
import { useComponents } from "../../hooks";
import { getComponentBy } from "../../core/selectors/components";

import ButtonDropdownPreview from "../previews/ButtonDropdown";
import CheckboxPreview from "../previews/Checkbox";
import TogglePreview from "../previews/Toggle";
import InputPreview from "../previews/Input";
import LoaderPreview from "../previews/Loader";
import MenuPreview from "../previews/Menu";
import ModalPreview from "../previews/Modal";
import PopoverPreview from "../previews/Popover";
import { Flex, Alert, Button } from "@freshworks/react-nucleus";

import WithChildrenPreviewContainer from "./WithChildrenPreviewContainer";
import PreviewContainer from "./PreviewContainer";

const ComponentPreview: React.FC<{
  componentName: string;
}> = ({ componentName, ...forwardedProps }) => {
  const [state]: any = useComponents();
  const component: any = getComponentBy(state, componentName);
  if (!component) {
    console.error(
      `ComponentPreview unavailable for component ${componentName}`
    );
  }

  const type = (component && component.type) || null;

  switch (type) {
    // Simple components
    case "Alert":
      return (
        <PreviewContainer
          component={component}
          type={Alert}
          {...forwardedProps}
        />
      );

    case "Button":
      return (
        <PreviewContainer
          component={component}
          type={Button}
          {...forwardedProps}
        />
      );
    // Wrapped functional components (forward ref issue)
    // Components with children
    case "Flex":
      return (
        <WithChildrenPreviewContainer
          enableVisualHelper
          component={component}
          type={Flex}
          {...forwardedProps}
        />
      );
    // More complex components
    case "ButtonDropdown":
      return <ButtonDropdownPreview component={component} />;
    case "Checkbox":
      return <CheckboxPreview component={component} />;
    case "Toggle":
      return <TogglePreview component={component} />;
    case "Input":
      return <InputPreview component={component} />;
    case "Loader":
      return <LoaderPreview component={component} />;
    case "Menu":
      return <MenuPreview component={component} />;
    case "Modal":
      return <ModalPreview component={component} />;
    case "Popover":
      return <PopoverPreview component={component} />;
    default:
      return null;
  }
};

export default memo(ComponentPreview);
