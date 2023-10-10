import React from 'react'
import './Authenitcation.css'
import { Link } from 'react-router-dom'
import LoginForm from '../../features/authentication/components/login/LoginForm'

export default function Authentication() {
  return (
    <div id="authentication-container">
        <Link className='btn-home' to='/'>
            <span className="material-symbols-outlined">home</span>
        </Link>
        <LoginForm></LoginForm>
    </div>
  )
}
