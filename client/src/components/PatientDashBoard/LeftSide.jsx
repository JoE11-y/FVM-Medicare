import React, { useState, useEffect, useCallback } from "react";
import { useAccount, useProvider } from "wagmi";
import { MeetADoctor } from "../MeetADoctor";
import { PatientAppointments } from "../PatientAppointments";
import { useFVMMedicareContract } from "../../hooks";
import { loadAppointments } from "../../apis/FVMMedicare";
import { patients } from "../../dummyData";

export const LeftSide = ({ name }) => {
  const { address } = useAccount();
  const provider = useProvider();
  const [fetched, setFetched] = useState(false);
  const [acceptedAppointments, setAcceptedAppointments] = useState([]);
  const [pendingAppointments, setPendingAppointments] = useState([]);
  const [rejectedAppointments, setRejectedAppointments] = useState([]);
  const [completedAppointments, setCompleletdAppointments] = useState([]);
  const contract = useFVMMedicareContract(provider);

  const empty = useCallback(
    () =>
      (acceptedAppointments.length &&
        pendingAppointments.length &&
        completedAppointments.length &&
        rejectedAppointments.length) === 0,
    [
      completedAppointments,
      pendingAppointments,
      acceptedAppointments,
      rejectedAppointments,
    ]
  );

  const getAppointments = useCallback(async () => {
    if (fetched) return;
    try {
      const appointments = await loadAppointments(address, contract, false);
      if (appointments.completedAppointments)
        setCompleletdAppointments(appointments.completedAppointments);
      if (appointments.acceptedAppointments)
        setAcceptedAppointments(appointments.rejectedAppointments);
      if (appointments.pendingAppointments)
        setPendingAppointments(appointments.pendingAppointments);
      if (appointments.rejectedAppointments)
        setRejectedAppointments(appointments.rejectedAppointments);
      console.log("done");
      setFetched(true);
    } catch (e) {
      console.log(e);
    }
  }, [address, contract, fetched]);

  useEffect(() => {
    let run = true;
    if (empty() && run) {
      if (fetched) return;
      getAppointments();
    }
    return () => {
      run = false;
    };
  }, [getAppointments, empty, fetched]);

  return (
    <div className="dashboard_body-left">
      <h3>Welcome Back</h3>
      <h3>{name}</h3>
      <div style={{ marginTop: "1.5rem" }}>
        <MeetADoctor />
      </div>
      <div style={{ margin: "3.5rem 0" }}>
        <h3 style={{ marginBottom: "1rem" }}>Call Appointments</h3>
        <div className="status">
          <PatientAppointments
            title={"scheduled appointments"}
            index={1}
            type={"scheduled"}
            appointments={
              completedAppointments.length !== 0
                ? completedAppointments
                : patients
            }
          />
          <PatientAppointments
            title={"accepted appointments"}
            index={2}
            type={"accepted"}
            appointments={
              acceptedAppointments.length !== 0
                ? acceptedAppointments
                : patients
            }
          />
          <PatientAppointments
            title={"pending appointments"}
            index={3}
            type={"pending"}
            appointments={
              pendingAppointments.length !== 0 ? pendingAppointments : patients
            }
          />
          <PatientAppointments
            title={"rejected appointments"}
            index={4}
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
