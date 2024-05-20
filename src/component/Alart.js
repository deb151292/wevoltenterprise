
import React from 'react'

export default function Alerts(props) {

  return (
<div className="container my-2" style={{ height: '5px' , width : '300px'}} >
 {props.alerts &&   
    <div className= {`alert alert-${props.alerts.type} alert-dismissible fade show`} role="alert">
  <h4 className="alert-heading">{props.alerts.type=== "success" ? "Success" : "Sorry :( "}</h4>
  <p className="mb-0">{props.alerts.msg}</p>
</div>}
</div>
  )
}


