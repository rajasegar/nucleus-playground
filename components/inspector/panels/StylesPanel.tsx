import React, { memo } from "react";
import { Accordion, AccordionItem } from "@freshworks/react-nucleus";

import PaddingPanel from "./styles/PaddingPanel";
import DimensionPanel from "./styles/DimensionPanel";
import CustomPropsPanel from "./styles/CustomPropsPanel";
import DisplayPanel from "./styles/DisplayPanel";
import TextPanel from "./styles/TextPanel";
import BorderPanel from "./styles/BorderPanel";
import EffectsPanel from "./styles/EffectsPanel";

import ParentInspector from "../ParentInspector";
import ChildrenInspector from "../ChildrenInspector";

interface Props {
  isRoot: boolean;
  showChildren: boolean;
  parentIsRoot: boolean;
}

const StylesPanel: React.FC<Props> = ({
  isRoot,
  showChildren,
  parentIsRoot,
}) => (
  <Accordion>
    {!isRoot && (
      <AccordionItem label="Custom props">
        <CustomPropsPanel />
      </AccordionItem>
    )}

    {!isRoot && !parentIsRoot && (
      <AccordionItem label="Parent">
        <ParentInspector />
      </AccordionItem>
    )}

    {showChildren && (
      <AccordionItem label="Children">
        <ChildrenInspector />
      </AccordionItem>
    )}

    {!isRoot && (
      <>
        <AccordionItem label="Layout">
          <DisplayPanel />
        </AccordionItem>
        <AccordionItem label="Spacing">
          <PaddingPanel type="margin" />
          <PaddingPanel type="padding" />
        </AccordionItem>
        <AccordionItem label="Size">
          <DimensionPanel />
        </AccordionItem>
        <AccordionItem label="Typography">
          <TextPanel />
        </AccordionItem>
        <AccordionItem label="Border">
          <BorderPanel />
        </AccordionItem>
        <AccordionItem label="Effect">
          <EffectsPanel />
        </AccordionItem>
      </>
    )}
  </Accordion>
);

export default memo(StylesPanel);
