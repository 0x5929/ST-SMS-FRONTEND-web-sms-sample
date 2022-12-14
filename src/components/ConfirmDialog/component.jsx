import React from 'react'
import { 
    Dialog as MuiDialog, 
    DialogActions as MuiDialogAction, 
    DialogContent as MuiDialogContent, 
    DialogTitle as MuiDialogTitle } from '@mui/material'
import { NotListedLocation  } from '@mui/icons-material'

import createConfirmDialogStyles from './styles'
import { BaseTypography as Typography } from '../Typography'
import { BaseButton as Button, BaseIconButton } from '../Buttons'


const Styles = createConfirmDialogStyles({
    MuiDialog,
    MuiDialogAction,
    MuiDialogContent,
    MuiDialogTitle,
    BaseIconButton
})

function ConfirmDialog({ confirmDialog, confirmDialogHandlers, ...others }) {
    const { handleUnconfirmed } = confirmDialogHandlers;

    return (
        <Styles.Dialog data-testid="confirmDialog" open={confirmDialog.isOpen} {...others}>
            <Styles.DialogTitle>
                <Styles.IconButton disableRipple>
                    <NotListedLocation />
                </Styles.IconButton>
            </Styles.DialogTitle>
            <Styles.DialogContent>
                <Typography 
                    variant="h6"
                    text={confirmDialog.title}
                />
                <Typography 
                    variant="subtitle1"
                    text={confirmDialog.subTitle}
                />
            </Styles.DialogContent>
            <Styles.DialogActions>
                <Button 
                    color="primary"
                    text="No"
                    onClick={handleUnconfirmed}
                />
                <Button 
                    color="error"
                    text="Yes"
                    onClick={confirmDialog.onConfirm}
                />
            </Styles.DialogActions>
        </Styles.Dialog>
    )
}

export default React.memo(ConfirmDialog)