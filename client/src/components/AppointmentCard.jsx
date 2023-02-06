import React, { useContext } from "react";
import { AcceptAppointment } from "./AcceptAppointment";
import { DeclineAppointment } from "./DeclineAppointment";
import { appointmentSummaryContext } from "../context";
import { IpfsImage } from "react-ipfs-image";
import { BigNumber } from "ethers";

export const AppointmentCard = ({ appointment, border, cursor, index }) => {
  const { dispatch } = useContext(appointmentSummaryContext);
  const type = [
    "Medical Checkup",
    "Weekly Visit",
    "Lab Test",
    "Surgery",
    "Get Report",
    "Others",
  ];
  return (
    <div
      className="appointment-card"
      style={{ border, cursor }}
      onClick={() => {
        appointment.appointmentStatus === 2 &&
          appointment.medicalRecordShared &&
          dispatch({ type: "SET_CURR_APPOINTMENT", payload: index });
      }}
    >
      <div className="appointment-img">
        <IpfsImage
          hash={
            appointment.image
              ? appointment.image
              : "Qme8SriYgGNoXQzG1qYYZKThv3QTBf7pMJwUpu3gqaqQRH"
          }
          gatewayUrl={
            appointment.image
              ? "https://gateway.lighthouse.storage/ipfs"
              : "https://gateway.pinata.cloud/ipfs"
          }
        />
      </div>
      <div className="patient-name">
        <p>{appointment.name}</p>
        <small style={{ opacity: 0.5 }}>
          {type[BigNumber.from(appointment.appointmentType).toNumber()]}
        </small>
      </div>
      {appointment.appointmentStatus === 2 ? (
        appointment.requestStatus === 1 && !appointment.medicalRecordShared ? (
          <div className="appointment-time">Awaiting Medical Record</div>
        ) : (
          <div className="appointment-time">Medical Record Available</div>
        )
      ) : appointment.appointmentStatus === 1 ? (
        <div className="appointment-time">
          <AcceptAppointment appointment={appointment} />
          <DeclineAppointment appointment={appointment} />
        </div>
      ) : null}
    </div>
  );
};
