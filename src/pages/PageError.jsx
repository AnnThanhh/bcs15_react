import React from 'react'
import { NavLink } from 'react-router-dom'

const PageError = () => {
  return (
    <div>404 error
        <NavLink to="/">Go back!</NavLink>
    </div>
  )
}

export default PageError