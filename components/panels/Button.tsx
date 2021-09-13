import React, { useState } from 'react';
import { Dropdown } from '@freshworks/react-nucleus';
import { Box } from 'rebass/styled-components';

export default function() {
    const [variant, setVariant] = useState("Primary");
    const [size, setSize] = useState("Normal");

    const buttonVariants = [
        {
            name: 'Primary',
        },
        {
            name: 'Secondary',
        },
        {
            name: 'Danger',
        },
        {
            name: 'Link',
        },
        {
            name: 'Disabled',
        },
    ];

    const buttonSizes = [
        { name: 'Normal', value: 'normal'},
        { name: 'Mini', value: 'mini'},
    ];
    
    return (
        <Box p={2}>
            <h3>Button</h3>
            <Dropdown
                filterKey="name"
                label="Variant:"
                itemToString={(c) => c.name}
                defaultSelectedItem={variant}
                items={buttonVariants}
                onChange={(c) => setVariant(c)}
            />
            <Dropdown
                filterKey="name"
                label="Size:"
                itemToString={(c) => c.name}
                defaultSelectedItem={size}
                items={buttonSizes}
                onChange={(c) => setSize(c)}
            />
        </Box>
    )
}
