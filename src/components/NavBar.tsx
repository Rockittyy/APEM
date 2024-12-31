import React, { FC } from 'react'
import 'scss/components/NavBar.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from "media/Apem/ApemSmall.svg"
import Button from './Button'

interface NavBarProps  {

}

const NavBar: FC<NavBarProps> = ({ }) => {
  return (
    <nav>
      <Link to="/">
        <Logo />
      </Link>
      <div className="loginSignup">
        <Link to={'/'} className='LoginButton'><h2>LOGIN</h2></Link>
        <Button to='/' text='SINGUP' />
      </div>
    </nav>
  )
}

export default NavBar;