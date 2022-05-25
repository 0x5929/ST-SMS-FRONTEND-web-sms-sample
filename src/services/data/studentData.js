const initialStudentValues = {

    pk: 0,
    studentId : '',
    firstName : '',
    lastName  : '',
    phoneNumber: '',
    email: '',
    mailingAddress : '',
    course: '',
    startDate: new Date(),
    completionDate: new Date(),
    dateEnrollmentAgreementSigned: new Date(),
    thirdPartyPayerInfo: '',
    courseCost: '',
    chargesCharged : '',
    chargesPaid: '',
    paid: false,
    graduated: false,
    passedFirstExam: false,
    passedSecondOrThird: false,
    employed: false,
    position: '',
    placeOfEmployment: '',
    employmentAddress: '',
    startingWage: '',
    hoursWorked: '',
    descriptionAttempts: ''

}

const hoursWorkedRadioItems = [
    {value: 'F', title: 'Full-time'},
    {value: 'P', title: 'Part-time'}
]



const sampleStudentData = [{

    pk: 100,
    studentId : 'RO-CNA-100-0001-AB',
    firstName : 'student1',
    lastName  : 'student1',
    phoneNumber: '123-456-7890',
    email: 'asdf@asdf.com',
    mailingAddress : 'asdf',
    course: 'CNA',
    startDate: new Date(),
    completionDate: new Date(),
    dateEnrollmentAgreementSigned: new Date(),
    thirdPartyPayerInfo: '',
    courseCost: '5',
    chargesCharged : '5',
    chargesPaid: '5',
    paid: false,
    graduated: false,
    passedFirstExam: false,
    passedSecondOrThird: false,
    employed: false,
    position: '',
    placeOfEmployment: '',
    employmentAddress: '',
    startingWage: '',
    hoursWorked: '',
    descriptionAttempts: ''

},{

    pk: 101,
    studentId : 'RO-CNA-100-0002-AB',
    firstName : 'student2',
    lastName  : 'student2',
    phoneNumber: '123-456-7890',
    email: 'asdf@asdf.com',
    mailingAddress : 'asdf',
    course: 'CNA',
    startDate: new Date(),
    completionDate: new Date(),
    dateEnrollmentAgreementSigned: new Date(),
    thirdPartyPayerInfo: '',
    courseCost: '5',
    chargesCharged : '5',
    chargesPaid: '5',
    paid: false,
    graduated: false,
    passedFirstExam: false,
    passedSecondOrThird: false,
    employed: false,
    position: '',
    placeOfEmployment: '',
    employmentAddress: '',
    startingWage: '',
    hoursWorked: '',
    descriptionAttempts: ''

},{

    pk: 102,
    studentId : 'RO-CNA-100-0003-AB',
    firstName : 'student3',
    lastName  : 'student3',
    phoneNumber: '123-456-7890',
    email: 'asdf@asdf.com',
    mailingAddress : 'asdf',
    course: 'CNA',
    startDate: new Date(),
    completionDate: new Date(),
    dateEnrollmentAgreementSigned: new Date(),
    thirdPartyPayerInfo: '',
    courseCost: '5',
    chargesCharged : '5',
    chargesPaid: '5',
    paid: false,
    graduated: false,
    passedFirstExam: false,
    passedSecondOrThird: false,
    employed: false,
    position: '',
    placeOfEmployment: '',
    employmentAddress: '',
    startingWage: '',
    hoursWorked: '',
    descriptionAttempts: ''

},{

    pk: 103,
    studentId : 'RO-CNA-100-0004-AB',
    firstName : 'student4',
    lastName  : 'student4',
    phoneNumber: '123-456-7890',
    email: 'asdf@asdf.com',
    mailingAddress : 'asdf',
    course: 'CNA',
    startDate: new Date(),
    completionDate: new Date(),
    dateEnrollmentAgreementSigned: new Date(),
    thirdPartyPayerInfo: '',
    courseCost: '5',
    chargesCharged : '5',
    chargesPaid: '5',
    paid: false,
    graduated: false,
    passedFirstExam: false,
    passedSecondOrThird: false,
    employed: false,
    position: '',
    placeOfEmployment: '',
    employmentAddress: '',
    startingWage: '',
    hoursWorked: '',
    descriptionAttempts: ''

},{

    pk: 104,
    studentId : 'RO-CNA-100-0005-AB',
    firstName : 'student5',
    lastName  : 'student5',
    phoneNumber: '123-456-7890',
    email: 'asdf@asdf.com',
    mailingAddress : 'asdf',
    course: 'CNA',
    startDate: new Date(),
    completionDate: new Date(),
    dateEnrollmentAgreementSigned: new Date(),
    thirdPartyPayerInfo: '',
    courseCost: '5',
    chargesCharged : '5',
    chargesPaid: '5',
    paid: false,
    graduated: false,
    passedFirstExam: false,
    passedSecondOrThird: false,
    employed: false,
    position: '',
    placeOfEmployment: '',
    employmentAddress: '',
    startingWage: '',
    hoursWorked: '',
    descriptionAttempts: ''

},{

    pk: 105,
    studentId : 'RO-CNA-100-0006-AB',
    firstName : 'student6',
    lastName  : 'student6',
    phoneNumber: '123-456-7890',
    email: 'asdf@asdf.com',
    mailingAddress : 'asdf',
    course: 'CNA',
    startDate: new Date(),
    completionDate: new Date(),
    dateEnrollmentAgreementSigned: new Date(),
    thirdPartyPayerInfo: '',
    courseCost: '5',
    chargesCharged : '5',
    chargesPaid: '5',
    paid: false,
    graduated: false,
    passedFirstExam: false,
    passedSecondOrThird: false,
    employed: false,
    position: '',
    placeOfEmployment: '',
    employmentAddress: '',
    startingWage: '',
    hoursWorked: '',
    descriptionAttempts: ''

},{

    pk: 106,
    studentId : 'RO-CNA-100-0007-AB',
    firstName : 'student7',
    lastName  : 'student7',
    phoneNumber: '123-456-7890',
    email: 'asdf@asdf.com',
    mailingAddress : 'asdf',
    course: 'CNA',
    startDate: new Date(),
    completionDate: new Date(),
    dateEnrollmentAgreementSigned: new Date(),
    thirdPartyPayerInfo: '',
    courseCost: '5',
    chargesCharged : '5',
    chargesPaid: '5',
    paid: false,
    graduated: false,
    passedFirstExam: false,
    passedSecondOrThird: false,
    employed: false,
    position: '',
    placeOfEmployment: '',
    employmentAddress: '',
    startingWage: '',
    hoursWorked: '',
    descriptionAttempts: ''

},{

    pk: 107,
    studentId : 'RO-CNA-100-0008-AB',
    firstName : 'student8',
    lastName  : 'student8',
    phoneNumber: '123-456-7890',
    email: 'asdf@asdf.com',
    mailingAddress : 'asdf',
    course: 'CNA',
    startDate: new Date(),
    completionDate: new Date(),
    dateEnrollmentAgreementSigned: new Date(),
    thirdPartyPayerInfo: '',
    courseCost: '5',
    chargesCharged : '5',
    chargesPaid: '5',
    paid: false,
    graduated: false,
    passedFirstExam: false,
    passedSecondOrThird: false,
    employed: false,
    position: '',
    placeOfEmployment: '',
    employmentAddress: '',
    startingWage: '',
    hoursWorked: '',
    descriptionAttempts: ''

},{

    pk: 108,
    studentId : 'RO-CNA-100-0009-AB',
    firstName : 'student9',
    lastName  : 'student9',
    phoneNumber: '123-456-7890',
    email: 'asdf@asdf.com',
    mailingAddress : 'asdf',
    course: 'CNA',
    startDate: new Date(),
    completionDate: new Date(),
    dateEnrollmentAgreementSigned: new Date(),
    thirdPartyPayerInfo: '',
    courseCost: '5',
    chargesCharged : '5',
    chargesPaid: '5',
    paid: false,
    graduated: false,
    passedFirstExam: false,
    passedSecondOrThird: false,
    employed: false,
    position: '',
    placeOfEmployment: '',
    employmentAddress: '',
    startingWage: '',
    hoursWorked: '',
    descriptionAttempts: ''

},{

    pk: 109,
    studentId : 'RO-CNA-100-0010-AB',
    firstName : 'student10',
    lastName  : 'student10',
    phoneNumber: '123-456-7890',
    email: 'asdf@asdf.com',
    mailingAddress : 'asdf',
    course: 'CNA',
    startDate: new Date(),
    completionDate: new Date(),
    dateEnrollmentAgreementSigned: new Date(),
    thirdPartyPayerInfo: '',
    courseCost: '5',
    chargesCharged : '5',
    chargesPaid: '5',
    paid: false,
    graduated: false,
    passedFirstExam: false,
    passedSecondOrThird: false,
    employed: false,
    position: '',
    placeOfEmployment: '',
    employmentAddress: '',
    startingWage: '',
    hoursWorked: '',
    descriptionAttempts: ''

},{

    pk: 110,
    studentId : 'RO-CNA-100-0011-AB',
    firstName : 'student11',
    lastName  : 'student11',
    phoneNumber: '123-456-7890',
    email: 'asdf@asdf.com',
    mailingAddress : 'asdf',
    course: 'CNA',
    startDate: new Date(),
    completionDate: new Date(),
    dateEnrollmentAgreementSigned: new Date(),
    thirdPartyPayerInfo: '',
    courseCost: '5',
    chargesCharged : '5',
    chargesPaid: '5',
    paid: false,
    graduated: false,
    passedFirstExam: false,
    passedSecondOrThird: false,
    employed: false,
    position: '',
    placeOfEmployment: '',
    employmentAddress: '',
    startingWage: '',
    hoursWorked: '',
    descriptionAttempts: ''

},{

    pk: 111,
    studentId : 'RO-CNA-100-0012-AB',
    firstName : 'student12',
    lastName  : 'student12',
    phoneNumber: '123-456-7890',
    email: 'asdf@asdf.com',
    mailingAddress : 'asdf',
    course: 'CNA',
    startDate: new Date(),
    completionDate: new Date(),
    dateEnrollmentAgreementSigned: new Date(),
    thirdPartyPayerInfo: '',
    courseCost: '5',
    chargesCharged : '5',
    chargesPaid: '5',
    paid: false,
    graduated: false,
    passedFirstExam: false,
    passedSecondOrThird: false,
    employed: false,
    position: '',
    placeOfEmployment: '',
    employmentAddress: '',
    startingWage: '',
    hoursWorked: '',
    descriptionAttempts: ''

},{

    pk: 112,
    studentId : 'RO-CNA-100-0013-AB',
    firstName : 'student13',
    lastName  : 'student13',
    phoneNumber: '123-456-7890',
    email: 'asdf@asdf.com',
    mailingAddress : 'asdf',
    course: 'CNA',
    startDate: new Date(),
    completionDate: new Date(),
    dateEnrollmentAgreementSigned: new Date(),
    thirdPartyPayerInfo: '',
    courseCost: '5',
    chargesCharged : '5',
    chargesPaid: '5',
    paid: false,
    graduated: false,
    passedFirstExam: false,
    passedSecondOrThird: false,
    employed: false,
    position: '',
    placeOfEmployment: '',
    employmentAddress: '',
    startingWage: '',
    hoursWorked: '',
    descriptionAttempts: ''

},{

    pk: 113,
    studentId : 'RO-CNA-100-0014-AB',
    firstName : 'student14',
    lastName  : 'student14',
    phoneNumber: '123-456-7890',
    email: 'asdf@asdf.com',
    mailingAddress : 'asdf',
    course: 'CNA',
    startDate: new Date(),
    completionDate: new Date(),
    dateEnrollmentAgreementSigned: new Date(),
    thirdPartyPayerInfo: '',
    courseCost: '5',
    chargesCharged : '5',
    chargesPaid: '5',
    paid: false,
    graduated: false,
    passedFirstExam: false,
    passedSecondOrThird: false,
    employed: false,
    position: '',
    placeOfEmployment: '',
    employmentAddress: '',
    startingWage: '',
    hoursWorked: '',
    descriptionAttempts: ''

},{

    pk: 114,
    studentId : 'RO-CNA-100-0015-AB',
    firstName : 'student15',
    lastName  : 'student15',
    phoneNumber: '123-456-7890',
    email: 'asdf@asdf.com',
    mailingAddress : 'asdf',
    course: 'CNA',
    startDate: new Date(),
    completionDate: new Date(),
    dateEnrollmentAgreementSigned: new Date(),
    thirdPartyPayerInfo: '',
    courseCost: '5',
    chargesCharged : '5',
    chargesPaid: '5',
    paid: false,
    graduated: false,
    passedFirstExam: false,
    passedSecondOrThird: false,
    employed: false,
    position: '',
    placeOfEmployment: '',
    employmentAddress: '',
    startingWage: '',
    hoursWorked: '',
    descriptionAttempts: ''

},]

const SMSStats = [
    {
        "enrollment": [
            {'year': 2013, 'count': 108},
            {'year': 2014, 'count': 176},
            {'year': 2015, 'count': 102},
            {'year': 2016, 'count': 127},
            {'year': 2017, 'count': 150},
            {'year': 2018, 'count': 63},
            {'year': 2019, 'count': 149},
            {'year': 2020, 'count': 157},
            {'year': 2021, 'count': 129},
            {'year': 2022, 'count': 32}
        ],

        "employment": [
            {'year': 2013, 'count': 76},
            {'year': 2014, 'count': 126},
            {'year': 2015, 'count': 73},
            {'year': 2016, 'count': 90},
            {'year': 2017, 'count': 112},
            {'year': 2018, 'count': 50},
            {'year': 2019, 'count': 108},
            {'year': 2020, 'count': 115},
            {'year': 2021, 'count': 16},
            {'year': 2022, 'count': 0}
        ],

        "graduate": [
            {'year': 2013, 'count': 93},
            {'year': 2014, 'count': 155},
            {'year': 2015, 'count': 83},
            {'year': 2016, 'count': 113},
            {'year': 2017, 'count': 136},
            {'year': 2018, 'count': 56},
            {'year': 2019, 'count': 137},
            {'year': 2020, 'count': 136},
            {'year': 2021, 'count': 32},
            {'year': 2022, 'count': 1}
        ],
        "exam": [
            {'year': 2013, 'count': 88},
            {'year': 2014, 'count': 128},
            {'year': 2015, 'count': 75},
            {'year': 2016, 'count': 89},
            {'year': 2017, 'count': 108},
            {'year': 2018, 'count': 48},
            {'year': 2019, 'count': 78},
            {'year': 2020, 'count': 75},
            {'year': 2021, 'count': 28},
            {'year': 2022, 'count': 0}
        ]
        
    }
]


export {initialStudentValues, hoursWorkedRadioItems, sampleStudentData, SMSStats}