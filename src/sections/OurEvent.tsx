import React, { FC } from 'react'
import { ColorsPallate } from 'global'

import "scss/sections/OurEvent.scss"

import ArrowElement from 'media/vectors/ArrowElement'

import { ReactComponent as Menu } from 'media/vectors/menu.svg'



import cloud1 from 'media/cloud/awan1.png'
import cloud2 from 'media/cloud/awan2.png'
import Tryout_Osnk_2025 from 'components/events/Tryout_Osnk_2025/Tryout_Osnk_2025'
import Arrow from 'components/Arrow'


interface OurEventProps {

}

const OurEvent: FC<OurEventProps> = ({ }) => {
  return (
    <section id='OurEvent' className='mainSection'>
      <div className="background">
        <img src={cloud1} id="c1" alt="" />
        <img src={cloud2} id="c2" alt="" />
      </div>
      <div className="main lightBox">
        <header className=''>
          <div className="viewAll clickArea hover">
            <div className="viewAll content">
              <Menu />
              <h2>View All</h2>
            </div>
          </div>
          <h1>OUR EVENTS</h1>
        </header>

        <div className="body">
          <div className="right arrow active">
            <Arrow colors={ColorsPallate.$BlueMain} right active />
          </div>
          <div className="left arrow ">
            <Arrow colors={ColorsPallate.$BlueMain} left />
          </div>
          <div className="contentBox">
            {/* here is code c: */}
            <Tryout_Osnk_2025 />
          </div>
          <div className="dots">
            {/* here is som code */}
            <div className='clickArea hover'>
              <div className="dot active" />
            </div>
            <div className='clickArea hover'>
              <div className="dot" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurEvent;