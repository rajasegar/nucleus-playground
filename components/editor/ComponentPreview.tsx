import React, { memo } from "react";
import { useComponents } from "../../contexts/ComponentsContext";
import { getComponentBy } from "../../core/selectors/components";

import { Button } from "@freshworks/react-nucleus";
import ButtonDropdownPreview from "../previews/ButtonDropdown";
import AlertPreview from "../previews/Alert";
import CheckboxPreview from "../previews/Checkbox";
import TogglePreview from "../previews/Toggle";
import InputPreview from "../previews/Input";
import LoaderPreview from "../previews/Loader";
import MenuPreview from "../previews/Menu";
import ModalPreview from "../previews/Modal";
import PopoverPreview from "../previews/Popover";
import FlexPreview from "../previews/Flex";

import WithChildrenPreviewContainer from "./WithChildrenPreviewContainer";
import PreviewContainer from "./PreviewContainer";

const ComponentPreview: React.FC<{
  componentName: string;
}> = ({ componentName, ...forwardedProps }) => {
  const [state, dispatch] = useComponents();
  const component = getComponentBy(state, componentName);
  if (!component) {
    console.error(
      `ComponentPreview unavailable for component ${componentName}`
    );
  }

  const type = (component && component.type) || null;

  switch (type) {
    // Simple components
    // Wrapped functional components (forward ref issue)
    case "Button":
      return (
        <PreviewContainer
          component={component}
          type={Button}
          {...forwardedProps}
        />
      );
    // Components with children
    case "Flex":
      return (
        <WithChildrenPreviewContainer
          enableVisualHelper
          component={component}
          type={type}
          {...forwardedProps}
        />
      );
    // More complex components
    case "Alert":
      return <AlertPreview component={component} />;
    default:
      return null;
  }
};

export default memo(ComponentPreview);
