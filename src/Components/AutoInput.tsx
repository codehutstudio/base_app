import { FormLabel, TextField } from '@mui/material';
import React, { cloneElement, createElement } from 'react'
import { camelCaseToLabel } from '../Utils';

interface Props {
    name: string;
    label?: string;
    type: string;
    optional?: boolean;
    wrapper?: any
}

export default function AutoInput(p: Props) {
    switch(p.type) {
        default: return (p.wrapper 
            ?  cloneElement(p.wrapper, undefined, createInput(p))
            :  createInput(p))
    }
}

function createInput(p: Props) {
    let props = {
        label: p.label || createLabel(p.name),
        helperText: p.optional ? "(Optional)" : "",
        size: 'small',
        type: p.type
    }
    return createElement(TextField, props as any)
}

function createLabel(name: string): string {
    return camelCaseToLabel(name)
}