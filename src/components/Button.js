import React from 'react';
import { Button as MuiButton} from '@mui/material';
import { styled } from '@mui/material/styles';


const NonCapButton = styled(MuiButton)(( {theme} ) => ({
    textTransform: 'none',
    margin: theme.spacing(0.5)

}));


export function Button(props) {

    const { text, Icon, size, color, variant, onClick, ...others } = props;

    var variantDefault = "contained"
    var sizeDefault = "large"
    var colorDefault = "primary"

    return (  
        <NonCapButton
            variant={variant || variantDefault}
            size={size || sizeDefault}
            color={color || colorDefault}
            onClick={onClick}
            
            {...others}
        >
            {text}
        </NonCapButton>
    );
}



export function IconButton(props) {

    const { Icon, size, color, iconColor, variant, onClick, ...others } = props;

    var variantDefault = "text"
    var sizeDefault = "small"
    var colorDefault = "secondary"
    return (
        <NonCapButton
            variant={variant || variantDefault}
            size={size || sizeDefault}
            color={color || colorDefault}
            onClick={onClick}

            {...others}
        >
            <Icon 
                color={iconColor || 'primary'} 
                {...others.iconProps}
            />

        </NonCapButton>
    )
}