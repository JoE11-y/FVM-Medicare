import React, { useState, useEffect, useCallback } from "react";
import { useAccount, useProvider } from "wagmi";
import { MeetADoctor } from "../MeetADoctor";
import { PatientAppointments } from "../PatientAppointments";
import { useFVMMedicareContract } from "../../hooks";
import { loadAppointments } from "../../apis/FVMMedicare";

export const LeftSide = ({ name }) => {
  const { address } = useAccount();
  const provider = useProvider();
  const [acceptedAppointments, setAcceptedAppointments] = useState(null);
  const [pendingAppointments, setPendingAppointments] = useState(null);
  const [rejectedAppointments, setRejectedAppointments] = useState(null);
  const [scheduledAppointments, setCompleletdAppointments] = useState(null);
  const contract = useFVMMedicareContract(provider);

  const getAppointments = useCallback(async () => {
    try {
      const appointments = await loadAppointments(address, contract, false);
      if (appointments.scheduledAppointments)
        setCompleletdAppointments(appointments.scheduledAppointments);
      if (appointments.acceptedAppointments)
        setAcceptedAppointments(appointments.rejectedAppointments);
      if (appointments.pendingAppointments)
        setPendingAppointments(appointments.pendingAppointments);
      if (appointments.rejectedAppointments)
        setRejectedAppointments(appointments.rejectedAppointments);
    } catch (e) {
      console.log(e);
    }
  }, [address, contract]);

  useEffect(() => {
    let run = true;
    if (
      !(
        acceptedAppointments ||
        pendingAppointments ||
        scheduledAppointments ||
        rejectedAppointments
      ) &&
      run
    ) {
      getAppointments();
    }
    return () => {
      run = false;
    };
  }, [
    getAppointments,
    scheduledAppointments,
    acceptedAppointments,
    pendingAppointments,
    rejectedAppointments,
  ]);

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
            appointments={scheduledAppointments ? scheduledAppointments : []}
          />
          <PatientAppointments
            title={"accepted appointments"}
            index={2}
            type={"accepted"}
            appointments={acceptedAppointments ? acceptedAppointments : []}
          />
          <PatientAppointments
            title={"pending appointments"}
            index={3}
            type={"pending"}
            appointments={pendingAppointments ? pendingAppointments : []}
          />
          <PatientAppointments
            title={"rejected appointments"}
            index={4}
            type={"rejected"}
            appointments={rejectedAppointments ? rejectedAppointments : []}
          />
        </div>
      </div>
    </div>
  );
};
