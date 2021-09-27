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
  Dropdown,
  Input,
  Loader,
  Toggle,
  Grid,
  Card,
  Heading,
  Paragraph,
  Box,
  Tabs,
  Tag,
  MultiSelectDropdown,
  Avatar,
  Badge,
  Icons,
  Accordion,
  AccordionItem,
  Radio,
  BoxedRadio,
  BoxedRadioGroup,
} from "@freshworks/react-nucleus";

import WithChildrenPreviewContainer from "./WithChildrenPreviewContainer";
import PreviewContainer from "./PreviewContainer";

const Nucleus: any = {
  Alert,
  Flex,
  Grid,
  Button,
  ButtonDropdown,
  Checkbox,
  Dropdown,
  Input,
  Loader,
  Toggle,
  Heading,
  Paragraph,
  Card,
  Box,
  Tabs,
  Tag,
  MultiSelectDropdown,
  Avatar,
  Badge,
  Icons,
  Accordion,
  AccordionItem,
  Radio,
  BoxedRadio,
  BoxedRadioGroup,
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
    case "Dropdown":
    case "Input":
    case "Loader":
    case "Toggle":
    case "Heading":
    case "Paragraph":
    case "Tabs":
    case "Tag":
    case "Avatar":
    case "Badge":
    case "Icons":
    case "MultiSelectDropdown":
    case "AccordionItem":
    case "Radio":
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
    case "Grid":
    case "Card":
    case "Box":
    case "Accordion":
    case "BoxedRadio":
    case "BoxedRadioGroup":
      return (
        <WithChildrenPreviewContainer
          enableVisualHelper
          component={component}
          type={Nucleus[type]}
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
