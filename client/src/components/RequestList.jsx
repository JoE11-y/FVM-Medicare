import React from "react"
import { Alert } from "@mui/material"
import { RequestCard } from "./RequestCard"

export const RequestList = ({ severity, title, data }) => {
  return (
    <div>
      <Alert severity={severity}>{title}</Alert>
      {data.map(({ name, image }, key) => (
        <RequestCard
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
  )
}
