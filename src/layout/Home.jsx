import React from 'react'
import { Link } from 'react-router-dom'
import User from '../components/User'
import Header from '../components/Header'
import Element from '../components/Element'

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Element></Element>
      <Element></Element>
      <Element></Element>
      <Element></Element>
      <Link to="/login">Login</Link>
    </div>
  )
}
