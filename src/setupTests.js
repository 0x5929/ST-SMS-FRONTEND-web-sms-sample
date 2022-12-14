import { SMSStats, sampleStudentData, sampleCourseOptions, sampleRotationOptions } from './services/data/studentData'

// mocking the entire module of djREST, bc it is the module that connects to backend API
import { 
    authRefreshGET, 
    authenticationPOST, 
    logoutPOST, 
    studentStatisticsGET, 
    studentQueryGET, 
    programNameGET, 
    rotationNumberGET,
    studentCreatePOST, 
    rotationCreatePOST,
    studentRemoveDELETE,
    studentEditPATCH,
    schoolOptionsCreateGET,
    schoolOptionsEditGET,
    rotationNumberByUUIDGET
} from './services/api/djREST'

jest.mock('./services/api/djREST')

const mockResolvedValues = {
    authRefreshGET         : {access: '__TEST_ACCESS__'},
    authenticationPOST     : {user: '__TEST_USER__', access_code : '__TEST_ACCESS__', refresh_code: '__TEST_REFRESH__'},
    logoutPOST             : [],
    studentStatisticsGET   : SMSStats[0],
    studentQueryGET        : sampleStudentData,
    schoolOptionsCreateGET : [{value: 'ABC', title: 'ABC'}],
    schoolOptionsEditGET   : 'ABC',
    programNameGET         : sampleCourseOptions,
    rotationNumberGET      : sampleRotationOptions(sampleCourseOptions[0].value),
    studentCreatePOST      : [],
    rotationCreatePOST     : [],
    studentEditPATCH       : sampleStudentData[0],
    studentRemoveDELETE    : [],
    rotationNumberByUUIDGET: '1'
}


// TODO: change the darn names, they are easy to get mixed up

beforeEach(() => {

    authRefreshGET.mockResolvedValue(mockResolvedValues['authRefreshGET'])
    authenticationPOST.mockResolvedValue(mockResolvedValues['authenticationPOST'])
    logoutPOST.mockResolvedValue(mockResolvedValues['logoutPOST'])
    studentStatisticsGET.mockResolvedValue(mockResolvedValues['studentStatisticsGET'])
    studentQueryGET.mockResolvedValue(mockResolvedValues['studentQueryGET'])
    schoolOptionsCreateGET.mockResolvedValue(mockResolvedValues['schoolOptionsCreateGET'])
    schoolOptionsEditGET.mockResolvedValue(mockResolvedValues['schoolOptionsEditGET'])
    programNameGET.mockResolvedValue(mockResolvedValues['programNameGET'])
    rotationNumberGET.mockResolvedValue(mockResolvedValues['rotationNumberGET'])
    studentCreatePOST.mockResolvedValue(mockResolvedValues['studentCreatePOST'])
    rotationCreatePOST.mockResolvedValue(mockResolvedValues['rotationCreatePOST'])
    studentEditPATCH.mockResolvedValue(mockResolvedValues['studentEditPUT'])
    studentRemoveDELETE.mockResolvedValue(mockResolvedValues['studentRemoveDELETE'])
    rotationNumberByUUIDGET.mockResolvedValue(mockResolvedValues['rotationNumberByUUIDGET'])

})

