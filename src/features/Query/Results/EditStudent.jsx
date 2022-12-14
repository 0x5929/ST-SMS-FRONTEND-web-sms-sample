import React from 'react'

import { useEditModal } from  '../../../hooks'
import Components from '../../../components'

function EditStudent({setRecordForEdit, setRecords, userFeedbackObj, recordForEdit}) {
    const [ { isEditModalOpen, studentFormStates }, editModalHandlers ] = useEditModal(
        {
            setRecordForEdit, 
            setRecords, 
            userFeedbackObj, 
            recordForEdit
        }
    )

    const {
        handleCloseEditModal, 
        studentFormHandlers ,
        handleEditCancel, 
        handleEditSubmit

    } = editModalHandlers


    return (
        <Components.Modal
            modalTitle="Edit Student Data"
            isModalOpen={isEditModalOpen}
            handleCloseModal={handleCloseEditModal}
        >
            <Components.StudentForm
                studentFormStates={studentFormStates}
                studentFormHandlers={studentFormHandlers}
                studentEditFormHandlers={{handleEditCancel, handleEditSubmit}}
            />
        </Components.Modal>
    )
}

export default React.memo(EditStudent)