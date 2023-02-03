// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./IFVMMedicareNFT.sol";

contract FVMMedicare is Ownable {
    address doctorMedicareNFTAddress;

    address patientMedicareNFTAddress;

    enum Status {
        PENDING,
        ACCEPTED,
        REJECTED
    }

    enum Category {
        DOCTOR,
        PATIENT
    }

    struct Appointment {
        uint256 appointmentId;
        string uniqueKey;
        address patientAddress;
        address doctorAddress;
        Status status;
    }

    struct Request {
        uint256 requestId;
        string uniqueKey;
        address patientAddress;
        address doctorAddress;
        Status status;
    }

    struct BioData {
        string userName;
        string userSurname;
        string userBirthDate;
        string speciality;
    }

    struct Patient {
        address patientAddress;
        string name;
        string surname;
        string birthDate;
        string employment;
        uint256 requestCount;
        uint256 appointmentCount;
        mapping(uint256 => Request) patientRequests;
        mapping(uint256 => Appointment) patientAppointments;
        mapping(uint256 => uint256) doctorToPatientAppointmentMapping;
    }

    struct Doctor {
        address doctorAddress;
        string name;
        string surname;
        string birthDate;
        string speciality;
        uint256 requestCount;
        uint256 appointmentCount;
        mapping(uint256 => Appointment) doctorAppointments;
        mapping(uint256 => Request) doctorRequests;
        mapping(uint256 => uint256) patientToDoctorRequestMapping;
    }

    mapping(uint256 => Doctor) private Doctors;
    mapping(uint256 => Patient) private Patients;

    constructor(address _doctorNFTAddress, address _patientNFTAddress) {
        doctorMedicareNFTAddress = _doctorNFTAddress;
        patientMedicareNFTAddress = _patientNFTAddress;
    }

    function register(Category user, string calldata uri, BioData memory _biodata) public {
        if (user == Category.DOCTOR) {
            uint256 doctorId = IFVMMedicareNFT(doctorMedicareNFTAddress).createData(
                msg.sender,
                uri
            );

            Doctor storage _doctor = Doctors[doctorId];
            _doctor.doctorAddress = msg.sender;
            _doctor.name = _biodata.userName;
            _doctor.birthDate = _biodata.userBirthDate;
            _doctor.speciality = _biodata.speciality;
        } else if (user == Category.PATIENT) {
            uint256 patientId = IFVMMedicareNFT(patientMedicareNFTAddress).createData(
                msg.sender,
                uri
            );

            Patient storage _patient = Patients[patientId];
            _patient.patientAddress = msg.sender;
            _patient.name = _biodata.userName;
            _patient.birthDate = _biodata.userBirthDate;
            _patient.employment = _biodata.speciality;
        }
    }

    function makeAppointment(address _doctorAddress, string memory _uniqueKey) public {
        require(
            IFVMMedicareNFT(patientMedicareNFTAddress).isTokenHolder(msg.sender),
            "Only Patients can access this"
        );
        require(
            IFVMMedicareNFT(doctorMedicareNFTAddress).isTokenHolder(_doctorAddress),
            "Address is not a doctor"
        );

        uint256 doctorTokenId = IFVMMedicareNFT(doctorMedicareNFTAddress).getTokenId(
            _doctorAddress
        );

        uint256 patientTokenId = IFVMMedicareNFT(patientMedicareNFTAddress).getTokenId(msg.sender);

        Appointment memory newAppointMent = Appointment({
            appointmentId: 0,
            uniqueKey: _uniqueKey,
            patientAddress: msg.sender,
            doctorAddress: _doctorAddress,
            status: Status.PENDING
        });

        Patient storage _patient = Patients[patientTokenId];
        _patient.appointmentCount++;
        newAppointMent.appointmentId = _patient.appointmentCount;
        _patient.patientAppointments[_patient.appointmentCount] = newAppointMent;

        Doctor storage _doctor = Doctors[doctorTokenId];
        _doctor.appointmentCount++;
        newAppointMent.appointmentId = _doctor.appointmentCount;
        _doctor.doctorAppointments[_doctor.appointmentCount] = newAppointMent;

        _patient.doctorToPatientAppointmentMapping[_doctor.appointmentCount] = _patient
            .appointmentCount;
    }

    function respondToAppointment(uint256 _doctorAppointmentId, Status _response) public {
        require(
            IFVMMedicareNFT(doctorMedicareNFTAddress).isTokenHolder(msg.sender),
            "Only doctors can access this"
        );

        uint256 doctorTokenId = IFVMMedicareNFT(doctorMedicareNFTAddress).getTokenId(msg.sender);

        Appointment storage editedAppointment = Doctors[doctorTokenId].doctorAppointments[
            _doctorAppointmentId
        ];

        editedAppointment.status = _response;

        uint256 patientTokenId = IFVMMedicareNFT(patientMedicareNFTAddress).getTokenId(
            editedAppointment.patientAddress
        );

        uint256 _patientAppointmentId = Patients[patientTokenId].doctorToPatientAppointmentMapping[
            _doctorAppointmentId
        ];

        Appointment storage editedAppointmentPatient = Patients[patientTokenId].patientAppointments[
            _patientAppointmentId
        ];

        editedAppointmentPatient.status = _response;
    }

    function createDataRequest(address _patientAddress, string memory _uniqueKey) public {
        require(
            IFVMMedicareNFT(doctorMedicareNFTAddress).isTokenHolder(msg.sender),
            "Only doctors can access this"
        );
        require(
            IFVMMedicareNFT(patientMedicareNFTAddress).isTokenHolder(_patientAddress),
            "Patient is not a doctor"
        );

        uint256 doctorTokenId = IFVMMedicareNFT(doctorMedicareNFTAddress).getTokenId(msg.sender);

        uint256 patientTokenId = IFVMMedicareNFT(patientMedicareNFTAddress).getTokenId(
            _patientAddress
        );

        Request memory newRequest = Request({
            requestId: 0,
            uniqueKey: _uniqueKey,
            patientAddress: _patientAddress,
            doctorAddress: msg.sender,
            status: Status.PENDING
        });

        Doctor storage _doctor = Doctors[doctorTokenId];
        _doctor.requestCount++;
        newRequest.requestId = _doctor.requestCount;
        _doctor.doctorRequests[_doctor.requestCount] = newRequest;

        Patient storage _patient = Patients[patientTokenId];
        _patient.requestCount++;
        newRequest.requestId = _patient.requestCount;
        _patient.patientRequests[_patient.requestCount] = newRequest;

        _doctor.patientToDoctorRequestMapping[_patient.requestCount] = _doctor.requestCount;
    }

    function respondToDataRequest(uint256 _patientRequestId, Status _response) public {
        require(
            IFVMMedicareNFT(patientMedicareNFTAddress).isTokenHolder(msg.sender),
            "Only patients can access this"
        );

        uint256 patientTokenId = IFVMMedicareNFT(patientMedicareNFTAddress).getTokenId(msg.sender);

        Request storage editedRequest = Patients[patientTokenId].patientRequests[_patientRequestId];

        editedRequest.status = _response;

        uint256 doctorTokenId = IFVMMedicareNFT(doctorMedicareNFTAddress).getTokenId(
            editedRequest.doctorAddress
        );

        uint256 _doctorRequestId = Doctors[doctorTokenId].patientToDoctorRequestMapping[
            _patientRequestId
        ];

        Request storage editedRequestDoctor = Doctors[doctorTokenId].doctorRequests[
            _doctorRequestId
        ];

        editedRequestDoctor.status = _response;
    }

    function getInformation(address _addr) public view returns (BioData memory) {
        BioData memory _information;

        if (IFVMMedicareNFT(patientMedicareNFTAddress).isTokenHolder(_addr)) {
            uint256 patientTokenId = IFVMMedicareNFT(patientMedicareNFTAddress).getTokenId(_addr);
            _information = BioData({
                userName: Patients[patientTokenId].name,
                userSurname: Patients[patientTokenId].surname,
                userBirthDate: Patients[patientTokenId].birthDate,
                speciality: Patients[patientTokenId].employment
            });
        } else if (IFVMMedicareNFT(doctorMedicareNFTAddress).isTokenHolder(_addr)) {
            uint256 doctorTokenId = IFVMMedicareNFT(doctorMedicareNFTAddress).getTokenId(_addr);
            _information = BioData({
                userName: Doctors[doctorTokenId].name,
                userSurname: Doctors[doctorTokenId].surname,
                userBirthDate: Doctors[doctorTokenId].birthDate,
                speciality: Doctors[doctorTokenId].speciality
            });
        }
        return _information;
    }

    function getRequestCount(address _addr) public view returns (uint256) {
        uint256 count;
        if (IFVMMedicareNFT(patientMedicareNFTAddress).isTokenHolder(_addr)) {
            uint256 patientTokenId = IFVMMedicareNFT(patientMedicareNFTAddress).getTokenId(_addr);
            count = Patients[patientTokenId].requestCount;
        } else if (IFVMMedicareNFT(doctorMedicareNFTAddress).isTokenHolder(_addr)) {
            uint256 doctorTokenId = IFVMMedicareNFT(doctorMedicareNFTAddress).getTokenId(_addr);
            count = Doctors[doctorTokenId].requestCount;
        }
        return count;
    }

    function getAppointmentCount(address _addr) public view returns (uint256) {
        uint256 count;
        if (IFVMMedicareNFT(patientMedicareNFTAddress).isTokenHolder(_addr)) {
            uint256 patientTokenId = IFVMMedicareNFT(patientMedicareNFTAddress).getTokenId(_addr);
            count = Patients[patientTokenId].appointmentCount;
        } else if (IFVMMedicareNFT(doctorMedicareNFTAddress).isTokenHolder(_addr)) {
            uint256 doctorTokenId = IFVMMedicareNFT(doctorMedicareNFTAddress).getTokenId(_addr);
            count = Doctors[doctorTokenId].appointmentCount;
        }
        return count;
    }

    function getRequest(address _addr, uint256 _requestId) public view returns (Request memory) {
        Request memory _request;
        if (IFVMMedicareNFT(patientMedicareNFTAddress).isTokenHolder(_addr)) {
            uint256 patientTokenId = IFVMMedicareNFT(patientMedicareNFTAddress).getTokenId(_addr);
            _request = Patients[patientTokenId].patientRequests[_requestId];
        } else if (IFVMMedicareNFT(doctorMedicareNFTAddress).isTokenHolder(_addr)) {
            uint256 doctorTokenId = IFVMMedicareNFT(doctorMedicareNFTAddress).getTokenId(_addr);
            _request = Doctors[doctorTokenId].doctorRequests[_requestId];
        }
        return _request;
    }

    function getAppointment(
        address _addr,
        uint256 _appointmentId
    ) public view returns (Appointment memory) {
        Appointment memory _appointment;
        if (IFVMMedicareNFT(patientMedicareNFTAddress).isTokenHolder(_addr)) {
            uint256 patientTokenId = IFVMMedicareNFT(patientMedicareNFTAddress).getTokenId(_addr);
            _appointment = Patients[patientTokenId].patientAppointments[_appointmentId];
        } else if (IFVMMedicareNFT(doctorMedicareNFTAddress).isTokenHolder(_addr)) {
            uint256 doctorTokenId = IFVMMedicareNFT(doctorMedicareNFTAddress).getTokenId(_addr);
            _appointment = Doctors[doctorTokenId].doctorAppointments[_appointmentId];
        }
        return _appointment;
    }
}
