import React, { useState } from 'react'
import './Box.css'

export default function Box({NamePlan,onclick,name}) {
  return (
    <div className={name} onClick={onclick}>
      <h1>{NamePlan}</h1>
    </div>
  )
}
