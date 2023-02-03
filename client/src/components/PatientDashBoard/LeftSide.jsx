import React, { useState, useEffect, useCallback } from "react";
import { useAccount, useProvider } from "wagmi";
import { MeetADoctor } from "../MeetADoctor";
import { PatientRequests } from "../PatientRequests";
import { PatientAppointments } from "../PatientAppointments";
import { useFVMMedicareContract } from "../../hooks";
import {
  loadAppointments,
  loadRequests,
  getInformation,
} from "../../apis/FVMMedicare";

export const LeftSide = () => {
  const { address } = useAccount();
  const provider = useProvider();
  const [data, setData] = useState({});
  const [acceptedAppointments, setAcceptedAppointments] = useState([]);
  const [pendingAppointments, setPendingAppointments] = useState([]);
  const [rejectedAppointments, setRejectedAppointments] = useState([]);
  const [acceptedRequests, setAcceptedRequests] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [rejectedRequests, setRejectedRequests] = useState([]);

  const contract = useFVMMedicareContract(provider);

  const loadData = useCallback(async () => {
    const data = await getInformation(contract, address);
    setData(data);
  }, [address, contract]);

  const getAppointments = useCallback(async () => {
    const appointments = await loadAppointments(contract, address);
    if (appointments.acceptedappointments)
      setAcceptedAppointments(appointments.rejectedAppointments);
    if (appointments.pendingAppointments)
      setPendingAppointments(appointments.pendingAppointments);
    if (appointments.rejectedAppointments)
      setRejectedAppointments(appointments.rejectedAppointments);
  }, [address, contract]);

  const getRequests = useCallback(async () => {
    const requests = await loadRequests(contract, address);
    if (requests.acceptedappointments)
      setAcceptedRequests(requests.acceptedRequests);
    if (requests.pendingAppointments)
      setPendingRequests(requests.pendingAppointments);
    if (requests.rejectedAppointments)
      setRejectedRequests(requests.rejectedAppointments);
  }, [address, contract]);

  useEffect(() => {
    if (contract & !data) {
      loadData();
      getAppointments();
    }
  }, [contract, loadData, data]);

  return (
    <div className="dashboard_body-left">
      <h2>Welcome Back</h2>
      <h2>
        {data.userSurname}, {data.firstName}
      </h2>
      <div style={{ marginTop: "1.5rem" }}>
        <MeetADoctor />
      </div>
      <div style={{ margin: "3.5rem 0" }}>
        <h3 style={{ marginBottom: "1rem" }}>Requests and Call Appointments</h3>
        <div className="status">
          <PatientRequests
            title={"accepted requests"}
            count={7}
            index={1}
            type={"accepted"}
          />
          <PatientAppointments
            title={"accepted appointments"}
            count={18}
            index={2}
            type={"accepted"}
          />
          <PatientRequests
            title={"pending requests"}
            count={6}
            index={3}
            type={"pending"}
          />
          <PatientAppointments
            title={"pending appointments"}
            count={2}
            index={4}
            type={"pending"}
          />
          <PatientRequests
            title={"rejected requests"}
            count={6}
            index={5}
            type={"rejected"}
          />
          <PatientAppointments
            title={"rejected appointments"}
            count={2}
            index={6}
            type={"rejected"}
          />
        </div>
      </div>
    </div>
  );
};
