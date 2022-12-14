import React from 'react'
import { 
    Grid, 
    Box as MuiBox, 
    CircularProgress as MuiCircularProgress,
    Stack as MuiStack } from '@mui/material'
import { 
    Check as CheckIcon,  
    Save as SaveIcon } from '@mui/icons-material'


import { createStudentFormStyles } from './styles'
import ProgramForm from './ProgramForm'
import {
    Input,
    DatePicker,
    Checkbox,
    RadioGroup } from '../../components/Inputs'
import {
    BaseButton as Button,
    BaseIconButton,
    BaseFab } from '../../components/Buttons'
import { Modal as BaseModal } from '../../components/Modal'
import { SimpleBackDrop } from '../../components/Backdrop'


const Styles = createStudentFormStyles({
    MuiStack,
    BaseIconButton,
    MuiBox,
    BaseFab,
    BaseModal,
    MuiCircularProgress
})


function StudentForm({ studentFormStates, studentFormHandlers, studentEditFormHandlers, ...others }) {

    const {
    
        studentFormState : {
            schoolOptions,
            showError,
            clearFields,
            submitLoading,
            submitSuccess,
        },
        progressOn,
        inputRefs,
        schoolRadioDefaultValue,
        studentFormValidations,
        hoursWorkedItems,

    } = studentFormStates

    const {
        resolveValue,
        handleSubmit,
        handleCancel,
        convertToDefaultEventParam,
        studentFormDispatch,
    } = studentFormHandlers

    let isEdit

    // should be put inside a useEffect hook?
    // since this is evaulated by props passed in, we can get away with this wo an useEffect
    if (studentEditFormHandlers !== undefined) {
        isEdit = true
    }
    else {
        isEdit = false
    }
    
    return (
    <>
        <Styles.StudentForm data-testid="student-form" {...others}>
            <Grid container>
                <Grid item laptop={6} tablet={12}>
                    {
                        !isEdit &&
                        
                        <RadioGroup 
                            ref={inputRefs.school}
                            studentFormDispatch={studentFormDispatch}
                            initialValue={schoolRadioDefaultValue}
                            name="school"
                            label="School"
                            items={schoolOptions}
                        />
                    }
                    <Input
                        ref={inputRefs.studentId}
                        initialValue={resolveValue('studentId')}
                        name="studentId"
                        label="Student ID"
                        errorHandler={studentFormValidations.studentId}
                        showError={showError}
                        clearFields={clearFields}
                    />
                    <Input
                        ref={inputRefs.firstName}
                        initialValue={resolveValue('firstName')}
                        name="firstName"
                        label="First Name"
                        errorHandler={studentFormValidations.firstName}
                        showError={showError} 
                        clearFields={clearFields}
                    />
                    <Input 
                        ref={inputRefs.lastName}
                        initialValue={resolveValue('lastName')}
                        name="lastName"
                        label="Last Name"
                        errorHandler={studentFormValidations.lastName}
                        showError={showError} 
                        clearFields={clearFields}
                    />
                    <Input 
                        ref={inputRefs.phoneNumber}
                        initialValue={resolveValue('phoneNumber')}
                        name="phoneNumber"
                        label="Phone Number"
                        errorHandler={studentFormValidations.phoneNumber}
                        showError={showError} 
                        clearFields={clearFields}
                    />
                    <Input 
                        ref={inputRefs.email}
                        initialValue={resolveValue('email')}
                        name="email"
                        label="Email"
                        errorHandler={studentFormValidations.email}
                        showError={showError}   
                        clearFields={clearFields}
                    />
                    <Input 
                        ref={inputRefs.mailingAddress}
                        initialValue={resolveValue('mailingAddress')}
                        name="mailingAddress"
                        label="Mailing Address"
                        errorHandler={studentFormValidations.mailingAddress}
                        showError={showError}    
                        clearFields={clearFields}                    
                    />
                    <ProgramForm 
                        validations={studentFormValidations}
                        studentFormStates={studentFormStates}
                        studentFormHandlers={studentFormHandlers}
                    />
                    <DatePicker
                        ref={inputRefs.startDate}
                        initialValue={resolveValue('startDate') || new Date()}
                        name="startDate"
                        label="Program Start Date"
                        convertToDefaultEventParam={convertToDefaultEventParam}
                        errorHandler={studentFormValidations.startDate}
                        showError={showError}   
                        clearFields={clearFields}                     
                    />
                    <DatePicker
                        ref={inputRefs.completionDate}
                        initialValue={resolveValue('completionDate') || new Date()}
                        name="completionDate"
                        label="Program Completion Date"
                        convertToDefaultEventParam={convertToDefaultEventParam}
                        errorHandler={studentFormValidations.completionDate}
                        showError={showError}     
                        clearFields={clearFields}                   
                    />
                    <DatePicker
                        ref={inputRefs.dateEnrollmentAgreementSigned}
                        initialValue={resolveValue('dateEnrollmentAgreementSigned') || new Date()}
                        name="dateEnrollmentAgreementSigned"
                        label="Date Enrollment Agreement Signed"
                        convertToDefaultEventParam={convertToDefaultEventParam}
                        errorHandler={studentFormValidations.dateEnrollmentAgreementSigned}
                        showError={showError}        
                        clearFields={clearFields}                
                        disableFuture
                    />
                    <Input 
                        ref={inputRefs.thirdPartyPayerInfo}
                        initialValue={resolveValue('thirdPartyPayerInfo')}
                        name="thirdPartyPayerInfo"
                        label="Third Party Payer Info" 
                        clearFields={clearFields}
                    />
                    <Input
                        ref={inputRefs.courseCost}
                        initialValue={resolveValue('courseCost')}
                        name="courseCost"
                        label="Course Cost"
                        errorHandler={studentFormValidations.courseCost}
                        showError={showError} 
                        clearFields={clearFields}
                    />
                    <Input 
                        ref={inputRefs.chargesCharged}
                        initialValue={resolveValue('chargesCharged')}
                        name="chargesCharged"
                        label="Charges Charged"
                        errorHandler={studentFormValidations.chargesCharged}
                        showError={showError} 
                        clearFields={clearFields}
                    />
                    <Input 
                        ref={inputRefs.chargesPaid}
                        initialValue={resolveValue('chargesPaid')}
                        name="chargesPaid"
                        label="Charges Paid"
                        errorHandler={studentFormValidations.chargesPaid}
                        showError={showError} 
                        clearFields={clearFields}
                    />
                </Grid>
                <Grid item laptop={6} tablet={12}>
                    <Checkbox
                        ref={inputRefs.graduated}
                        initialValue={resolveValue('graduated') || false}
                        name="graduated"
                        label="Graduated"
                        convertToDefaultEventParam={convertToDefaultEventParam}
                        clearFields={clearFields}
                    />
                    <Checkbox 
                        ref={inputRefs.passedFirstExam}
                        initialValue={resolveValue('passedFirstExam') || false}
                        name="passedFirstExam"
                        label="Passed First Exam"
                        convertToDefaultEventParam={convertToDefaultEventParam}
                        clearFields={clearFields}
                    />
                    <Checkbox 
                        ref={inputRefs.passedSecondOrThird}
                        initialValue={resolveValue('passedSecondOrThird') || false}
                        name="passedSecondOrThird"
                        label="Passed Second or Third Exam"
                        convertToDefaultEventParam={convertToDefaultEventParam}
                        clearFields={clearFields}
                    />
                    <Checkbox 
                        ref={inputRefs.employed}
                        initialValue={resolveValue('employed') || false}
                        name="employed"
                        label="Employed"
                        convertToDefaultEventParam={convertToDefaultEventParam}
                        clearFields={clearFields}
                    />
                    <Input 
                        ref={inputRefs.position}
                        name="position"
                        label="Employment Position"
                        clearFields={clearFields}
                    />
                    <Input 
                        ref={inputRefs.placeOfEmployment}
                        name="placeOfEmployment"
                        label="Place of Employment"
                        clearFields={clearFields}
                    />
                    <Input 
                        ref={inputRefs.employmentAddress}
                        initialValue={resolveValue('employmentAddress')}
                        name="employmentAddress"
                        label="Employment Address"
                        clearFields={clearFields}
                    />
                    <Input 
                        ref={inputRefs.startingWage}
                        initialValue={resolveValue('startingWage')}
                        name="startingWage"
                        label="Starting Wage"
                        clearFields={clearFields}
                        errorHandler={studentFormValidations.startingWage}
                        showError={showError}    
                    />
                    <RadioGroup
                        ref={inputRefs.hoursWorked}
                        initialValue={resolveValue('hoursWorked')}
                        name="hoursWorked"
                        label="Hours Worked"
                        items={hoursWorkedItems}
                        clearFields={clearFields}
                        
                        data-testid="hours-worked-radio-group"
                    />
                    <Input 
                        ref={inputRefs.descriptionAttempts}
                        initialValue={resolveValue('descriptionAttempts')}
                        name="descriptionAttempts"
                        label="Comments"
                        multiline
                        clearFields={clearFields}
                        rows={15}
                    />
                    
                    {/* submission buttons */}

                    <Styles.ButtonContainerBox>
                        <Styles.ButtonBox sx={{ m: 1 }}>
                            {
                                submitSuccess ? 
                                
                                <Styles.SuccessFab
                                    aria-label="save"
                                    color="primary"
                                    onClick={ isEdit ? ( (e) => studentEditFormHandlers.handleEditSubmit(e)) : ( (e) => handleSubmit(e, inputRefs) ) }
                                >
                                    <CheckIcon />
                                </Styles.SuccessFab>

                                        : 

                                <BaseFab
                                    aria-label="save"
                                    color="primary"
                                    onClick={ isEdit ? ( (e) => studentEditFormHandlers.handleEditSubmit(e)) : ( (e) => handleSubmit(e, inputRefs) ) }
                                >
                                    <SaveIcon data-testid="save-icon" />
                                </BaseFab>

                            }
                            {
                                submitLoading && (
                                <Styles.CircularProgress size={68} />
                                )
                            }
                        </Styles.ButtonBox>
                        <Styles.ButtonBox>
                            <Button data-testid="student-form-submit-btn"
                                text="Submit"
                                disabled={submitLoading}
                                onClick={ isEdit ? ( (e) => studentEditFormHandlers.handleEditSubmit(e)) : ( (e) => handleSubmit(e, inputRefs) ) }
                            />
                            {
                                submitLoading && (
                                <Styles.ButtonCircularProgress size={24} />   
                                )
                            }
                        </Styles.ButtonBox>
                        <Styles.ButtonBox>
                            <Button data-testid="student-form-cancel-btn"
                                color="error"
                                text="Cancel"
                                onClick={ isEdit ? studentEditFormHandlers.handleEditCancel : handleCancel }
                            />
                        </Styles.ButtonBox>
                    </Styles.ButtonContainerBox>
                </Grid>
            </Grid>
        </Styles.StudentForm>
        <SimpleBackDrop 
            openBackdrop={progressOn}
        />
    </>
  )
}


export default React.memo(StudentForm)