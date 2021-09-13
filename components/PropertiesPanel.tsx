import React from 'react';
import {  Box  } from "rebass/styled-components";
import { useTheme } from "@freshworks/react-nucleus";
import ButtonPanel from './panels/Button';

export default function(props) {
    const { current } = props;
    console.log(current);

  const theme = useTheme();
    return (
          <Box
            bg={theme.palette.smoke}
            sx={{ "border-left": `1px solid ${theme.palette.E500}` }}
          >
              {current && current.name === 'Button' && <ButtonPanel/>}
          </Box>
    );
}
