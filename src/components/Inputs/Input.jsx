import React, { forwardRef } from 'react';
import { TextField } from '@mui/material';
import { useInputValue } from '../../hooks'

const Input = forwardRef((props, parentRef) => {

    const { name, label, initialValue='', errorHandler, clearFields, showError, ...others } = props
    const [ { value, error }, { inputOnChange } ] = useInputValue({initialValue, errorHandler, clearFields})

    return (  
        <TextField 
            inputRef={parentRef}
            variant="outlined"
            color="primary"
            label={label}
            name={name}
            value={value}
            onChange={inputOnChange}
            inputProps={{ "data-testid": "mui-textfield" }}

            { ...((showError && errorHandler(value)) || error)  }
            
            { ...others }
        />
    );
});


export default React.memo(Input)