import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  console.log(props.mode,'-----------',props.mode.bsColor)

  const runner = (message,data) => {
    props.toggleMode(message,data)
  }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode?props.mode:'light'}`}>
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <div className="dropdown-menu">
            <Link className="dropdown-item" to="/">Action</Link>
            <Link className="dropdown-item" to="/">Another action</Link>
            <div className="dropdown-divider"></div>
            <Link className="dropdown-item" to="/">Something else here</Link>
          </div>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" to='/'>Disabled</Link>
        </li>
      </ul>
      <div className="btn-group" role="group" aria-label="Basic mixed styles example">
        <button type="button" onClick={()=> runner('warning','yellow')} className="btn btn-warning"></button>
        <button type="button" onClick={()=> runner('danger','red')} className="btn btn-danger"></button>
        <button type="button" onClick={()=> runner('light','grey')} className="btn btn-light"></button>
        <button type="button" onClick={()=> runner('info','blue')} className="btn btn-info"></button>
        <button type="button" onClick={()=> runner('dark','black')}className="btn btn-dark"></button>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {title :PropTypes.string.isRequired,}
Navbar.defaultProps = {title:"sadda kutta tommy"}
