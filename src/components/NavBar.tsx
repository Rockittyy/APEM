import React, { FC } from 'react'
import 'scss/components/NavBar.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from "media/Apem/ApemSmall.svg"
import Button from './Button'

interface NavBarProps {

}

const NavBar: FC<NavBarProps> = ({ }) => {
  return (
    <nav id='mainNav'>
      <Link className='clickArea hover' to="/">
        <Logo />
      </Link>
      <div className="loginSignup">
        <Link to={'/debug/1'} className='LoginButton clickArea hover'><h2>LOGIN</h2></Link>
        <Button to='/debug/2' text='SINGUP' />
      </div>
    </nav>
  )
}

export default NavBar;