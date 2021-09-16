import React, { useState } from 'react';
import { Input } from '@freshworks/react-nucleus';

export default function InputPreview() {
    const [value, setValue] = useState('');
    return <Input
        placeholder="Accepts 10 chars"
        maxLength={10}
        showCount={false}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        label="First Name:" />
}
