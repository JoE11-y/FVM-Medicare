// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./IFVMMedicareNFT.sol";

contract FVMMedicare is Ownable {
    address doctorMedicareNFTAddress;

    address patientMedicareNFTAddress;

    enum Status {
        NONE,
        PENDING,
        ACCEPTED,
        REJECTED,
        COMPLETED
    }

    enum Category {
        DOCTOR,
        PATIENT
    }

    struct Appointment {
        uint256 appointmentId;
        string uniqueKey;
        uint256 appointmentType;
        address patientAddress;
        address doctorAddress;
        bool medicalRecordShared;
        Status appointmentStatus;
        Status requestStatus;
    }

    struct BioData {
        string name;
        string specialization;
        string hospital;
        string image;
    }

    struct Patient {
        address patientAddress;
        BioData patientBioData;
        uint256 appointmentCount;
        mapping(uint256 => Appointment) patientAppointments;
        mapping(uint256 => uint256) doctorToPatientAppointmentMapping;
    }

    struct Doctor {
        address doctorAddress;
        BioData doctorBioData;
        uint256 appointmentCount;
        mapping(uint256 => Appointment) doctorAppointments;
        mapping(uint256 => uint256) patientToDoctorAppointmentMapping;
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
            _doctor.doctorBioData = _biodata;
        } else if (user == Category.PATIENT) {
            uint256 patientId = IFVMMedicareNFT(patientMedicareNFTAddress).createData(
                msg.sender,
                uri
            );

            Patient storage _patient = Patients[patientId];
            _patient.patientAddress = msg.sender;
            _patient.patientBioData = _biodata;
        }
    }

    function makeAppointment(
        address _doctorAddress,
        string memory _uniqueKey,
        uint256 _appointmentType
    ) public {
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
            appointmentType: _appointmentType,
            patientAddress: msg.sender,
            doctorAddress: _doctorAddress,
            medicalRecordShared: false,
            appointmentStatus: Status.PENDING,
            requestStatus: Status.NONE
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

        _doctor.patientToDoctorAppointmentMapping[_patient.appointmentCount] = _doctor
            .appointmentCount;
    }

    function respondToAppointment(uint256 _doctorAppointmentId, bool _accepted) public {
        require(
            IFVMMedicareNFT(doctorMedicareNFTAddress).isTokenHolder(msg.sender),
            "Access is only for doctors"
        );

        uint256 doctorTokenId = IFVMMedicareNFT(doctorMedicareNFTAddress).getTokenId(msg.sender);

        Appointment storage editedAppointmentDoctor = Doctors[doctorTokenId].doctorAppointments[
            _doctorAppointmentId
        ];

        uint256 patientTokenId = IFVMMedicareNFT(patientMedicareNFTAddress).getTokenId(
            editedAppointmentDoctor.patientAddress
        );

        uint256 _patientAppointmentId = Patients[patientTokenId].doctorToPatientAppointmentMapping[
            _doctorAppointmentId
        ];

        Appointment storage editedAppointmentPatient = Patients[patientTokenId].patientAppointments[
            _patientAppointmentId
        ];

        if (_accepted) {
            editedAppointmentDoctor.appointmentStatus = Status.ACCEPTED;
            editedAppointmentPatient.appointmentStatus = Status.ACCEPTED;
            editedAppointmentDoctor.requestStatus = Status.PENDING;
            editedAppointmentPatient.requestStatus = Status.PENDING;
        } else {
            editedAppointmentDoctor.appointmentStatus = Status.REJECTED;
            editedAppointmentPatient.appointmentStatus = Status.REJECTED;
        }
    }

    function respondToDataRequest(uint256 _patientAppointmentId, bool giveAccess) public {
        require(
            IFVMMedicareNFT(patientMedicareNFTAddress).isTokenHolder(msg.sender),
            "Only patients can access this"
        );

        uint256 patientTokenId = IFVMMedicareNFT(patientMedicareNFTAddress).getTokenId(msg.sender);

        Appointment storage editedAppointmentPatient = Patients[patientTokenId].patientAppointments[
            _patientAppointmentId
        ];

        uint256 doctorTokenId = IFVMMedicareNFT(doctorMedicareNFTAddress).getTokenId(
            editedAppointmentPatient.doctorAddress
        );

        uint256 _doctorAppointmentId = Doctors[doctorTokenId].patientToDoctorAppointmentMapping[
            _patientAppointmentId
        ];

        Appointment storage editedAppointmentDoctor = Doctors[doctorTokenId].doctorAppointments[
            _doctorAppointmentId
        ];

        if (giveAccess) {
            editedAppointmentPatient.requestStatus = Status.ACCEPTED;
            editedAppointmentPatient.medicalRecordShared = true;
            editedAppointmentDoctor.requestStatus = Status.ACCEPTED;
            editedAppointmentDoctor.medicalRecordShared = true;
        } else {
            editedAppointmentPatient.requestStatus = Status.PENDING;
            editedAppointmentPatient.medicalRecordShared = false;
            editedAppointmentDoctor.requestStatus = Status.PENDING;
            editedAppointmentDoctor.medicalRecordShared = false;
        }
    }

    function endAppointment(uint256 _doctorAppointmentId) public {
        require(
            IFVMMedicareNFT(doctorMedicareNFTAddress).isTokenHolder(msg.sender),
            "Access is only for doctors"
        );

        uint256 doctorTokenId = IFVMMedicareNFT(doctorMedicareNFTAddress).getTokenId(msg.sender);

        Appointment storage editedAppointmentDoctor = Doctors[doctorTokenId].doctorAppointments[
            _doctorAppointmentId
        ];

        uint256 patientTokenId = IFVMMedicareNFT(patientMedicareNFTAddress).getTokenId(
            editedAppointmentDoctor.patientAddress
        );

        uint256 _patientAppointmentId = Patients[patientTokenId].doctorToPatientAppointmentMapping[
            _doctorAppointmentId
        ];

        Appointment storage editedAppointmentPatient = Patients[patientTokenId].patientAppointments[
            _patientAppointmentId
        ];

        editedAppointmentDoctor.appointmentStatus = Status.COMPLETED;
        editedAppointmentPatient.appointmentStatus = Status.COMPLETED;
    }

    function getInformation(address _addr) public view returns (BioData memory) {
        BioData memory _information;

        if (IFVMMedicareNFT(patientMedicareNFTAddress).isTokenHolder(_addr)) {
            uint256 patientTokenId = IFVMMedicareNFT(patientMedicareNFTAddress).getTokenId(_addr);
            _information = Patients[patientTokenId].patientBioData;
        } else if (IFVMMedicareNFT(doctorMedicareNFTAddress).isTokenHolder(_addr)) {
            uint256 doctorTokenId = IFVMMedicareNFT(doctorMedicareNFTAddress).getTokenId(_addr);
            _information = Doctors[doctorTokenId].doctorBioData;
        }
        return _information;
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
