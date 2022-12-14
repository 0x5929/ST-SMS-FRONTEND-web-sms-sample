import React from 'react'
import { Backdrop as MuiBackdrop, CircularProgress } from '@mui/material'

import createBackdropStyles from './styles'

const Styles = createBackdropStyles({MuiBackdrop})


function SimpleBackDrop({ openBackdrop, ...others }) {

    return (
        <Styles.Backdrop open={openBackdrop} {...others}>
            <CircularProgress data-testid="circularProgress" color="inherit" />
        </Styles.Backdrop>
    )
}


export default React.memo(SimpleBackDrop)