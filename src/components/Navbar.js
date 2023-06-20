import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


export default function Navbar(props) {

  const runner = (message,data) => {
    props.toggleMode(message,data)
  }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode?props.mode:'light'}`}>
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="/">Action</a>
            <a className="dropdown-item" href="/">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="/">Something else here</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href='/'>Disabled</a>
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
