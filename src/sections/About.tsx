import GreenCity from 'components/GreenCity';
import React, { FC } from 'react'
import 'scss/sections/About.scss'


interface AboutProps {

}

const About: FC<AboutProps> = ({ }) => {
  return (
    <div className='mainSection' id='About'>
      <GreenCity />
    </div>
  )
}

export default About;