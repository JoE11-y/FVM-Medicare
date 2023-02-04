import { getUserMessage } from "./PushProtocol";

export const register = async (contract, user, uri, biodata) => {
  const Txn = await contract.register(user, uri, biodata);
  await Txn.wait();
};

export const makeAppointment = async (contract, doctorAddress, uniqueKey) => {
  const Txn = await contract.makeAppointment(doctorAddress, uniqueKey);
  await Txn.wait();
};

export const respondToAppointment = async (
  contract,
  appointmentId,
  response,
  patientAddress,
  uniqueKey = ""
) => {
  const Txn = await contract.respondToAppointment(
    appointmentId,
    response,
    patientAddress,
    uniqueKey
  );
  await Txn.wait();
};

export const respondToDataRequest = async (contract, requestId) => {
  const Txn = await contract.respondToDataRequest(requestId);
  await Txn.wait();
};

export const getInformation = async (contract, address) => {
  const data = await contract.getInformation(address);
  return data;
};

export const getRequestCount = async (contract, address) => {
  const data = await contract.getRequestCount(address);
  return data;
};

export const getAppointmentCount = async (contract, address) => {
  const data = await contract.getAppointmentCount(address);
  return data;
};

export const getRequest = async (contract, address, requestId) => {
  const data = await contract.getRequest(address, requestId);
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
    const message = await getUserMessage(
      address,
      appointmentData.patientAddress,
      appointmentData.uniqueKey
    );

    let info;
    let cid;
    if (isDoctor) {
      info = await getInformation(contract, appointmentData.patientInfo);
      cid = await loadRequestCID(
        contract,
        address,
        appointmentData.patientAddress
      );
    } else {
      info = await getInformation(contract, appointmentData.doctorAddress);
      cid = "";
    }

    let appointment = {
      ...appointmentData,
      ...info,
      message: message,
      cid: cid,
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

export const loadRequestCID = async (contract, address, patientAddress) => {
  const requestCount = await getRequestCount(contract, address);

  let message;

  for (let i = 0; i < Number(requestCount); i++) {
    const requestData = await getRequest(contract, address, i);

    if (
      requestData.patientAddress.toLowerCase() !== patientAddress.toLowerCase()
    )
      continue;

    message = await getUserMessage(
      address,
      requestData.patientAddress,
      requestData.uniqueKey
    );
  }
  return message;
};

export const loadRequests = async (contract, address, isDoctor = false) => {
  let acceptedRequests = [];
  let pendingRequests = [];
  let rejectedRequests = [];

  const requestCount = await getRequestCount(contract, address);

  for (let i = 0; i < Number(requestCount); i++) {
    const requestData = await getRequest(contract, address, i);

    const message = await getUserMessage(
      address,
      requestData.doctorAddress,
      requestData.uniqueKey
    );

    let info;
    if (isDoctor) {
      info = await getInformation(contract, requestData.patientAddress);
    } else {
      info = await getInformation(contract, requestData.doctorAddress);
    }

    let request = { ...requestData, ...info, message: message };
    if (Number(request.status) === 0) {
      pendingRequests.push(request);
    } else if (Number(request.status) === 1) {
      acceptedRequests.push(request);
    } else if (Number(request.status) === 2) {
      rejectedRequests.push(request);
    }
  }
  return { acceptedRequests, pendingRequests, rejectedRequests };
};
