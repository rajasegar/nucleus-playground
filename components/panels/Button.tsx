import React, { useState } from 'react';
import { Dropdown } from '@freshworks/react-nucleus';
import { Box } from 'rebass/styled-components';
import { useComponents } from "../../contexts/ComponentsContext";

export default function({ current }) {
    const [variant, setVariant] = useState("Primary");
    const [size, setSize] = useState("Normal");

    console.log(current);
    const { components, setComponents } = useComponents();
    console.log(components);

    function updateVariant(variant) {
        const comp = components.find(c => c.id === current.id);
        comp.props.variant = variant;
        setVariant(variant);
        setComponents(components);
    }

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
                onChange={(c) => updateVariant(c)}
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
