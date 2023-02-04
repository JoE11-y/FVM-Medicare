import { getUserMessage } from "./PushProtocol";

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
  let acceptedappointments = [];
  let pendingAppointments = [];
  let rejectedAppointments = [];
  const appointmentCount = await getAppointmentCount(contract, address);

  for (let i = 0; i < Number(appointmentCount); i++) {
    const appointmentData = await getAppointment(contract, address, i);
    let info;
    let message;

    if (isDoctor) {
      info = await getInformation(contract, appointmentData.patientInfo);
      message = await getUserMessage(
        address,
        appointmentData.patientAddress,
        appointmentData.uniqueKey
      );
    } else {
      info = await getInformation(contract, appointmentData.doctorAddress);
      message = await getUserMessage(
        address,
        appointmentData.doctorAddress,
        appointmentData.uniqueKey
      );
    }

    let appointment = {
      ...appointmentData,
      ...info,
      message: message,
    };

    if (Number(appointment.status) === 0) {
      pendingAppointments.push(appointment);
    } else if (Number(appointment.status) === 1) {
      acceptedappointments.push(appointment);
    } else if (Number(appointment.status) === 2) {
      rejectedAppointments.push(appointment);
    }
  }

  return { acceptedappointments, pendingAppointments, rejectedAppointments };
};
