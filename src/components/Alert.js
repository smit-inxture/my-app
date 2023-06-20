import React from 'react'

function Alert(props) {
    const camleCase=(str)=>{
        return str[0].toUpperCase() + str.slice(1);
    }

  return (
    props.alert && <div className={`alert alert-${props.alert.alert} alert-dismissible fade show`} role="alert">
        <b>{camleCase(props.alert.alert)}</b>: {props.alert.message}
    </div>
  )
}

export default Alert
