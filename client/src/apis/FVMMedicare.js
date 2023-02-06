import { getUserMessage } from "./PushProtocol";
import { BigNumber } from "ethers";

export const register = async (contract, user, uri, biodata) => {
  const Txn = await contract.register(user, uri, biodata);
  await Txn.wait();
};

export const makeAppointment = async (
  contract,
  doctorAddress,
  uniqueKey,
  appoinmentType
) => {
  const Txn = await contract.makeAppointment(
    doctorAddress,
    uniqueKey,
    appoinmentType
  );
  await Txn.wait();
};

export const respondToAppointment = async (
  contract,
  appointmentId,
  response
) => {
  const Txn = await contract.respondToAppointment(appointmentId, response);
  await Txn.wait();
};

export const respondToDataRequest = async (
  contract,
  appointmentId,
  giveAccess
) => {
  const Txn = await contract.respondToDataRequest(appointmentId, giveAccess);
  await Txn.wait();
};

export const getInformation = async (contract, address) => {
  const data = await contract.getInformation(address);
  return data;
};

export const getAppointmentCount = async (contract, address) => {
  const data = await contract.getAppointmentCount(address);
  return data;
};

export const getAppointment = async (contract, address, appointmentId) => {
  const data = await contract.getAppointment(address, appointmentId);
  return data;
};

export const loadAppointments = async (address, contract, isDoctor = true) => {
  let scheduledAppointments = [];
  let acceptedAppointments = [];
  let pendingAppointments = [];
  let rejectedAppointments = [];
  const appointmentCount = await getAppointmentCount(contract, address);

  for (let i = 0; i < BigNumber.from(appointmentCount).toNumber(); i++) {
    let id = i + 1;
    const appointmentData = await getAppointment(contract, address, id);
    let info;
    let patientMessage;
    let doctorMessage;

    if (isDoctor) {
      info = await getInformation(contract, appointmentData.patientAddress);
      patientMessage = await getUserMessage(
        address,
        appointmentData.patientAddress,
        appointmentData.uniqueKey
      );
      doctorMessage = await getUserMessage(
        appointmentData.patientAddress,
        address,
        appointmentData.uniqueKey
      );
    } else {
      info = await getInformation(contract, appointmentData.doctorAddress);
      patientMessage = await getUserMessage(
        appointmentData.doctorAddress,
        address,
        appointmentData.uniqueKey
      );
      doctorMessage = await getUserMessage(
        address,
        appointmentData.doctorAddress,
        appointmentData.uniqueKey
      );
    }

    let appointment = {
      ...appointmentData,
      ...info,
      patientMessage: patientMessage,
      doctorMessage: doctorMessage,
    };

    if (Number(appointment.appointmentStatus) === 1) {
      pendingAppointments.push(appointment);
    } else if (
      Number(appointment.appointmentStatus) === 2 &&
      appointment.medicalRecordShared &&
      !isDoctor
    ) {
      scheduledAppointments.push(appointment);
    } else if (Number(appointment.appointmentStatus) === 2) {
      acceptedAppointments.push(appointment);
    } else if (Number(appointment.appointmentStatus) === 3) {
      rejectedAppointments.push(appointment);
    }
  }

  return {
    scheduledAppointments,
    acceptedAppointments,
    pendingAppointments,
    rejectedAppointments,
  };
};
