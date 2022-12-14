import React from 'react'
import { 
    
    DialogContent,
    Dialog as MuiDialog, 
    DialogTitle as MuiDialogTitle } from '@mui/material';
import { CloseOutlined as CloseOutlinedIcon } from '@mui/icons-material';

import createModalStyles from './styles';
import { BaseTypography as Typography } from '../Typography';
import { BaseIconButton } from '../Buttons';


const Styles = createModalStyles({ MuiDialog, MuiDialogTitle, BaseIconButton })

function Modal(props) {
    
    const { 
        modalTitle, 
        isModalOpen, 
        handleCloseModal, 
        children,

        ...others
       } = props;
    

    return (
        <Styles.Dialog 
            open={isModalOpen}
            maxWidth="laptop"
            onBackdropClick={handleCloseModal}
            fullWidth={true}

            data-testid="mui-dialog"
            { ...others }
        >
            <Styles.DialogTitle data-testid="mui-dialogtitle">
                <div style={{display: 'flex'}}>
                    <Typography
                        variant="h6"
                        component="div"
                        text={modalTitle}
                        style={{flexGrow:1}}
                    />
                    <Styles.IconButton 
                        variant="text"
                        size="small"
                        color="secondary"
                        onClick={handleCloseModal}

                        data-testid="modal-close-btn"
                    >
                        <CloseOutlinedIcon 
                            fontSize="small"
                            color="error"
                        />
                    </Styles.IconButton >
                </div>
            </Styles.DialogTitle>
            <DialogContent data-testid="mui-dialogcontent" dividers>

                 { children }
            
            </DialogContent>

        </Styles.Dialog>
    
    )
}

export default React.memo(Modal)