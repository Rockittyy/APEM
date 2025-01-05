import Card from 'components/ProfileCard';
import React, { FC } from 'react'
import "scss/sections/Sesepuh.scss"

interface SesepuhProps {

}

const Sesepuh: FC<SesepuhProps> = ({ }) => {
  return (
    <div className='mainSection' id='Sesepuh'>
      <div className='title'>
        <h1>SESEPUH</h1>
        <h2>Meet the team</h2>
      </div>
      <div className='cardsRow'>
        <div className="holder">

          {/* dont forgor to code here */}
          {
            Array(10).fill(0).map(() => (

              <div className="clickArea hover">
                <Card />
              </div>

            ))
          }
          {/* <Card /> */}
        </div>
      </div>
      <div className='scroll'>

      </div>
    </div>
  )
}

export default Sesepuh;