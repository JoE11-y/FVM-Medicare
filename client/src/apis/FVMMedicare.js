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
  response
) => {
  const Txn = await contract.respondToAppointment(appointmentId, response);
  await Txn.wait();
};

export const createDataRequest = async (contract, patientAddress) => {
  const Txn = await contract.createDataRequest(patientAddress);
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
