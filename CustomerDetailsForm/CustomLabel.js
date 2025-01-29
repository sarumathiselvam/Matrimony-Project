import React from 'react'
import './CustomDetailForm.css'

const CustomLabel = ({name}) => {
  return (
   <div className="label">
        <div className="textAlign">{name}</div>
   </div>
  )
}

export default CustomLabel