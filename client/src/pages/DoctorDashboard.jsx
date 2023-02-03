import React, { useEffect, useCallback, useState } from "react";
import { useAccount, useProvider } from "wagmi";
import { DesktopNav } from "../components/DesktopNav";
import { Logo } from "../components/Logo";
import { UserIcon } from "../components/UserIcon";
import { PatientSummary } from "../components/PatientSummary";
import { AppointmentList } from "../components/AppointmentList";
import { DoctorPendingAppointment } from "../components/DoctorPendingAppointment";
import { PatientSummaryProvider } from "../context";
import { useFVMMedicareContract } from "../hooks";
import {
  getAppointment,
  getAppointmentCount,
  getInformation,
} from "../apis/FVMMedicare";
import { getUserMessage } from "../apis/PushProtocol";

export const DoctorDashboard = () => {
  const { address } = useAccount();
  const provider = useProvider();
  const [data, setData] = useState({});
  const [appointments, setAppointments] = useState([]);
  const [pendingAppointments, setPendingAppointments] = useState([]);
  const contract = useFVMMedicareContract(provider);
  const loadData = useCallback(async () => {
    const data = await getInformation(contract, address);
    setData(data);
  }, [address, contract]);

  const loadAppointments = useCallback(async () => {
    let appointments = [];
    let pendingAppointments = [];
    const appointmentCount = await getAppointmentCount(contract, address);

    for (let i = 0; i < Number(appointmentCount); i++) {
      const appointmentData = await getAppointment(address, i);
      const message = await getUserMessage(
        address,
        appointmentData.patientAddress,
        appointmentData.uniqueKey
      );
      let appointment = { ...appointmentData, message: message };
      if (Number(appointment.status) === 0) {
        pendingAppointments.push(appointment);
      } else if (Number(appointment.status) === 1) {
        appointments.push(appointment);
      }
    }

    if (appointments) setAppointments(appointments);
    if (pendingAppointments) setPendingAppointments(pendingAppointments);
  }, [address, contract]);

  useEffect(() => {
    if (contract & !data) {
      loadData();
      loadAppointments();
    }
  }, [contract, loadData, data, loadAppointments]);

  return (
    <PatientSummaryProvider>
      <div className="doctor-dashboard">
        <header className="landingHeader">
          <div style={{ display: "flex", alignItems: "center" }}>
            <Logo colorTop={"#272F3F"} colorBottom={"#272F3F"} />
            <DesktopNav style={{ borderColor: "#272F3F", color: "#272F3F" }} />
          </div>
          <UserIcon />
        </header>

        <section style={{ padding: "1rem 2rem 2rem" }}>
          <div>
            <p>
              Good Morning <b>Dr. {data.userSurname}</b>{" "}
            </p>
            <p>
              <small style={{ opacity: 0.5 }}>
                Happiness is the highest form of health.
              </small>
            </p>
          </div>
          <div className="doctor-view">
            <AppointmentList />
            <PatientSummary
              name={"Dell Jackson"}
              info="Male - 28 Years 03 Months"
            />
            <DoctorPendingAppointment />
          </div>
        </section>
      </div>
    </PatientSummaryProvider>
  );
};
