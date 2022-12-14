import React from 'react'

import { createDetailedTableStyles } from './styles'
import { useDetailedViewModal } from  '../../../hooks'
import Components from '../../../components'


const Styles = createDetailedTableStyles({
    BaseDetailedTblContainer: Components.DetailedTblContainer
})


function ViewStudent({ tableData, recordForView, setRecordForView }) {
    const [ { isDetailedViewModalOpen }, detailedViewModalHandlers ]  = useDetailedViewModal({recordForView, setRecordForView})
    const { handleDetailedViewModalClose, getDetailedRecord } = detailedViewModalHandlers


    return (
        <Components.Modal
            modalTitle="Detail View"
            isModalOpen={isDetailedViewModalOpen}
            handleCloseModal={handleDetailedViewModalClose}
        >
            <Styles.DetailedTblContainer>
                <Components.DetailedTblHead 
                    tableData={tableData} 
                />
                <Components.DetailedTblBody 
                    record={getDetailedRecord()}
                    tableData={tableData}
                />
            </Styles.DetailedTblContainer>
        </Components.Modal>
    )
}

export default React.memo(ViewStudent)