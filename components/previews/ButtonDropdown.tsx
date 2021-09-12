import React from 'react';
import { ButtonDropdown } from '@freshworks/react-nucleus';

export default function() {
    return <ButtonDropdown
        id="multi-click"
        position="bottom"
        onClick={(e, v: any) => alert(`Clicked ${v.name}`)}
    />
}
