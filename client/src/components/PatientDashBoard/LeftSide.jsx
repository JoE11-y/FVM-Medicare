import React, { useState, useEffect, useCallback } from "react";
import { useAccount, useProvider } from "wagmi";
import { MeetADoctor } from "../MeetADoctor";
import { PatientAppointments } from "../PatientAppointments";
import { useFVMMedicareContract } from "../../hooks";
import {
  loadAppointments,
  loadRequests,
  getInformation,
} from "../../apis/FVMMedicare";
import { patients } from "../../dummyData";

export const LeftSide = () => {
  const { address } = useAccount();
  const provider = useProvider();
  const [data, setData] = useState({});
  const [acceptedAppointments, setAcceptedAppointments] = useState([]);
  const [pendingAppointments, setPendingAppointments] = useState([]);
  const [rejectedAppointments, setRejectedAppointments] = useState([]);
  const contract = useFVMMedicareContract(provider);

  const loadData = useCallback(async () => {
    const data = await getInformation(contract, address);
    setData(data);
  }, [address, contract]);

  const getAppointments = useCallback(async () => {
    const appointments = await loadAppointments(contract, address, false);
    if (appointments.acceptedappointments)
      setAcceptedAppointments(appointments.rejectedAppointments);
    if (appointments.pendingAppointments)
      setPendingAppointments(appointments.pendingAppointments);
    if (appointments.rejectedAppointments)
      setRejectedAppointments(appointments.rejectedAppointments);
  }, [address, contract]);

  useEffect(() => {
    if (contract & !data) {
      loadData();
      getAppointments();
    }
  }, [contract, loadData, getAppointments, data]);

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
        <h3 style={{ marginBottom: "1rem" }}>Call Appointments</h3>
        <div className="status">
          <PatientAppointments
            title={"accepted appointments"}
            index={1}
            type={"accepted"}
            appointments={
              acceptedAppointments.length !== 0
                ? acceptedAppointments
                : patients
            }
          />
          <PatientAppointments
            title={"pending appointments"}
            index={2}
            type={"pending"}
            appointments={
              pendingAppointments.length !== 0 ? pendingAppointments : patients
            }
          />
          <PatientAppointments
            title={"rejected appointments"}
            index={3}
            type={"rejected"}
            appointments={
              rejectedAppointments.length !== 0
                ? rejectedAppointments
                : patients
            }
          />
        </div>
      </div>
    </div>
  );
};
