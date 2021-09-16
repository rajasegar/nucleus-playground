import React, { useContext } from 'react';
import {  Box  } from "rebass/styled-components";
import { useTheme } from "@freshworks/react-nucleus";
import ButtonPanel from './panels/Button';
import { ComponentsContext } from '../contexts/ComponentsContext';

export default function PropertiesPanel() {
    const [ state, dispatch ] = useContext(ComponentsContext);

    const current = state.components.find(c => c.id === state.selectedId);

  const theme = useTheme();
    return (
          <Box
            bg={theme.palette.smoke}
            sx={{ "border-left": `1px solid ${theme.palette.E500}` }}
          >
              {current && current.name === 'Button' && <ButtonPanel current={current} />}
          </Box>
    );
}
