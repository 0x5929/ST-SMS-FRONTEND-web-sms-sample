import '@testing-library/jest-dom'
import { render, screen, cleanup } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks/dom' 
import userEvent from '@testing-library/user-event'
import { useNotification, useStudentForm } from '../../hooks'
import Components from '../../components'

import StudentForm from './StudentForm'


describe('testing form components', () => {


    describe('testing StudentForm component', () => {


        function getNotificationResults() {
            const { result } = renderHook(() => useNotification(Components.NotificationSlide))
            return result.current
        }

        let setup;

        // here beforeEach will outline this test coverage.
        beforeEach(() => {
            setup = ({isEdit=false} = {}) => {

                const notificationResults = getNotificationResults()
                const { result } = renderHook( () => useStudentForm({notificationHandlers: notificationResults[0], notify: notificationResults[1]}))
                const studentFormStates = result.current[0]
                const studentFormHandlers = result.current[1]
                var studentEditFormHandlers = {
                    handleEditSubmit: () => {},
                    handleEditCancel: () => {}
                }

                const submitMk = jest.spyOn(studentFormHandlers, 'handleSubmit')
                const cancelMk = jest.spyOn(studentFormHandlers, 'handleCancel')
                const handleEditSubmitMk = jest.spyOn(studentEditFormHandlers, 'handleEditSubmit')
                const handleEditCancelMk = jest.spyOn(studentEditFormHandlers, 'handleEditCancel')

                if (!isEdit) {
                    studentEditFormHandlers = undefined
                }

                render(
                    <StudentForm 
                        studentFormStates={studentFormStates}
                        studentFormHandlers={studentFormHandlers}
                        studentEditFormHandlers={studentEditFormHandlers}
                    />)

                return {

                    getInput(labelText) {
                        return screen.getByLabelText(labelText)
                    },
                    getByTestId(testId) {
                        return screen.getByTestId(testId)
                    },
                    getByText(text){
                        return screen.getByText(text)
                    },
                    studentFormStates,
                    studentFormHandlers,
                    submitMk,
                    cancelMk,
                    handleEditSubmitMk,
                    handleEditCancelMk
                }
            }
        })
        afterEach(() => {
            setup = undefined;
            cleanup();
        
        })


        test('text inputs', () => {
            const { getInput } = setup()
            const inputLabels = [
                'Student ID',
                'First Name',
                'Last Name',
                'Phone Number',
                'Email',
                'Mailing Address',
                'Third Party Payer Info',
                'Course Cost',
                'Charges Charged',
                'Charges Paid',
                'Employment Position',
                'Place of Employment',
                'Employment Address',
                'Starting Wage',
                'Comments',
            ]

            inputLabels.forEach(label => {
                expect(getInput(label)).toBeInTheDocument()
            })

        })


        it('should render program form component', () => {
            const { getByTestId } = setup()
            expect(getByTestId('program-form')).toBeInTheDocument()
        })

        it('should render form with radio input with options', () => {
            const { getByText } = setup()

            expect(getByText(/Full-time/i)).toBeInTheDocument()
            expect(getByText(/Part-time/i)).toBeInTheDocument()
        })

        it('should render form with checkbox input components', () => {
            const { getByText } = setup()

            expect(getByText(/Employed/i)).toBeInTheDocument()
            expect(getByText(/Graduated/i)).toBeInTheDocument()
            expect(getByText(/Passed First Exam/i)).toBeInTheDocument()
            expect(getByText(/Passed Second or Third Exam/i)).toBeInTheDocument()

        })

        it('should render form with its button components', () => {
            const { getByText, getByTestId } = setup()

            expect(getByText(/Submit/i)).toBeInTheDocument()
            expect(getByText(/Cancel/i)).toBeInTheDocument()
            expect(getByTestId('save-icon')).toBeInTheDocument()

        })

        it('should invoke submit when Submit is pressed', () => {
            const { getByText, submitMk } = setup()
            const submitBtn = getByText(/Submit/i)

            submitBtn.click()
            expect(submitMk.mock.calls).toHaveLength(1)
        })

        it('should invoke handleEditSubmit when Submit is pressed in Edit', () => {
            const { getByText, handleEditSubmitMk } = setup({isEdit: true})

            const submitBtn = getByText(/Submit/i)
            submitBtn.click()

            expect(handleEditSubmitMk.mock.calls).toHaveLength(1)
        })

        it('should invoke handleCancel when Cancel is pressed', () => {
            const { getByText, cancelMk } = setup()
            const cancelBtn = getByText(/Cancel/i)

            cancelBtn.click()
            expect(cancelMk.mock.calls).toHaveLength(1)
        })

        it('should invoke handleEditCancel when Cancel is pressed in Edit', () => {
            const { getByText, handleEditCancelMk } = setup({isEdit: true})

            const cancelBtn = getByText(/Cancel/i)
            cancelBtn.click()

            expect(handleEditCancelMk.mock.calls).toHaveLength(1)
        })
    })


    describe('testing ProgramForm component', () => {

    })

    describe('testing RotationForm component', () => {

    })

    describe('testing QueryForm component', () => {
        
    })
})