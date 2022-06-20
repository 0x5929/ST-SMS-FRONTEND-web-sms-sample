import React from 'react'
import { 

    FormControl,
    FormControlLabel,
    Checkbox as MuiCheckbox } from '@mui/material'

function Checkbox(props) {
    console.log('Checkbox component rendered')
    const { 
        name, 
        label, 
        value, 
        onChange, 
        convertToDefaultEventParam,

        ...others
    } = props

    return (  
        <FormControl {...others}>
            <FormControlLabel
                label={label}
                control={<MuiCheckbox
                    color="primary" 
                    name={name}
                    checked={value}
                    onChange={e => onChange(convertToDefaultEventParam(name, e.target.checked))}
                />}
            />
        </FormControl>
    );
}

export default React.memo(Checkbox)