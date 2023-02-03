import React from "react";
import { Alert } from "@mui/material";
import { PatientAppointmentCard } from "./PatientAppointmentCard";

export const PatientAppointmentList = ({ severity, title, data }) => {
  return (
    <div>
      <Alert severity={severity} style={{ textTransform: "capitalize" }}>
        {title}
      </Alert>
      {data.map(({ name, image }, key) => (
        <PatientAppointmentCard
          key={key}
          name={name}
          img={image}
          message={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis iure unde voluptatem autem explicabo! Hic voluptatum explicabo tenetur facilis distinctio eaque, modi minima dicta fuga libero veritatis nostrum eum?"
          }
          id={key}
        />
      ))}
    </div>
  );
};
