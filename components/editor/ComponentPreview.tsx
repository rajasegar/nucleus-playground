import React, { memo } from "react";
import { useComponents } from "../../hooks";
import { getComponentBy } from "../../core/selectors/components";

import MenuPreview from "../previews/Menu";
import ModalPreview from "../previews/Modal";
import PopoverPreview from "../previews/Popover";
import {
  Flex,
  Alert,
  Button,
  ButtonDropdown,
  Checkbox,
  Input,
  Loader,
  Toggle,
  Grid,
  Card,
  Heading,
  Paragraph,
} from "@freshworks/react-nucleus";

import WithChildrenPreviewContainer from "./WithChildrenPreviewContainer";
import PreviewContainer from "./PreviewContainer";

const Nucleus: any = {
  Alert,
  Flex,
  Button,
  ButtonDropdown,
  Checkbox,
  Input,
  Loader,
  Toggle,
  Heading,
  Paragraph,
  Card,
};

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
    case "Button":
    case "ButtonDropdown":
    case "Checkbox":
    case "Input":
    case "Loader":
    case "Toggle":
    case "Heading":
    case "Paragraph":
      return (
        <PreviewContainer
          component={component}
          type={Nucleus[type]}
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
    case "Grid":
      return (
        <WithChildrenPreviewContainer
          enableVisualHelper
          component={component}
          type={Grid}
          {...forwardedProps}
        />
      );

    case "Card":
      return (
        <WithChildrenPreviewContainer
          enableVisualHelper
          component={component}
          type={Card}
          {...forwardedProps}
        />
      );
    // More complex components
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
