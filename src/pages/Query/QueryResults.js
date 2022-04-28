import React from 'react'
import { useQueryResultTable, useDetailedViewTable } from '../../controllers/tableController'
import { useNotification, useConfirmDialog } from '../../controllers/userFeedbackController'
import Controls from '../../components'



import { Box } from '@mui/material'


export default function QueryResults(props) {

    const { results } = props;

    const {

        notify,
        setNotify,
        closeNotification,

    } = useNotification(Controls.NotificationSlide)
    

    const {
        confirmDialog,
        setConfirmDialog,
        handleUnconfirmed
    } = useConfirmDialog()


    const {
        
        // table
        records,
        tableData,
        getFinalDisplayRecords,


        // paging
        pages,
        page,
        rowsPerPage,
        handleChangePage,
        handleChangeRowsPerPage,


        //filtering
        filterLabel,
        textInput,
        handleClear,

        // sorting
        orderBy,
        order,
        handleSortRequest,
        handleFilter,

        // modals
        modalTitle, 
        openModal, 
        openInModal,
        closeModal,
        recordForEdit,

        // modal handling for view
        recordForView,
        setRecordForView,

        // delete operations
        handleDeletePress,

        // edit forms
        values, 
        errors,
        handleInputChange,
        handleEditSubmit,
        handleEditCancel,
        getCourseOptions,
        hoursWorkedRadioItems,
        populateFormFieldsForEdit,
        convertToDefaultEventParam

    } = useQueryResultTable({
        setNotify,
        notify,
        confirmDialog,
        setConfirmDialog
    }, results)

    const {
        detailedViewModalTitle,
        detailedViewOpen,
        detailedViewClose,
        openInDetail,
        getDetailedRecord,
    } = useDetailedViewTable(recordForView, setRecordForView)
    
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end'
            }}>
                <Controls.SearchBar 
                    onChange={handleFilter}
                    textInput={textInput}
                    handleClear={handleClear}
                    label={filterLabel}
                    style={{flexGrow: 0}}

                />
                <Controls.BaseButton
                    text="Back to query"
                    size="small"
                    color="secondary"
                    variant="outlined"
                    onClick={()=> {      
                        if (typeof window !== 'undefined') {
                        window.location.href = "http://localhost:3000";
                   }}}
                />
            </Box>
            <Controls.QueryTblContainer>
                <Controls.QueryTblHead 
                    tableData={tableData} 
                    handleSortRequest={handleSortRequest}
                    orderBy={orderBy}
                    order={order}
                />
                <Controls.QueryTblBody 
                    records={getFinalDisplayRecords()}
                    openInModal={openInModal}
                    openInDetail={openInDetail}
                    handleDeletePress={handleDeletePress}
                />
            </Controls.QueryTblContainer>
            <Controls.QueryTblPagination 
                page={page}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={pages}
                count={records.length}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <Controls.Modal
                modalTitle={modalTitle}
                openModal={openModal}
                closeModal={closeModal}
            >
                <Controls.Form onSubmit={handleEditSubmit}>
                    <Controls.StudentForm
                        recordForEdit={recordForEdit}
                        values={values}
                        errors={errors}
                        handleInputChange={handleInputChange}
                        handleCancel={handleEditCancel}
                        getCourseOptions={getCourseOptions}
                        hoursWorkedRadioItems={hoursWorkedRadioItems}
                        populateFormFieldsForEdit={populateFormFieldsForEdit}
                        convertToDefaultEventParam={convertToDefaultEventParam}
                    />
                </Controls.Form>
            </Controls.Modal>
            <Controls.Modal
                modalTitle={detailedViewModalTitle}
                openModal={detailedViewOpen}
                closeModal={detailedViewClose}
                onBackdropClick={detailedViewClose}
            >
                <Controls.DetailedTblContainer>
                    <Controls.DetailedTblHead 
                        tableData={tableData} 
                    />
                    <Controls.DetailedTblBody 
                        record={getDetailedRecord()}
                        tableData={tableData}
                    />
                </Controls.DetailedTblContainer>
            </Controls.Modal>
            <Controls.Notification 
                notify={notify}
                closeNotification={closeNotification}
            />
            <Controls.ConfirmDialog 
                confirmDialog={confirmDialog}
                handleUnconfirmed={handleUnconfirmed}
            />
        </>
    )
}
