import React, { FC } from 'react'
import { ColorsPallate as ColorPallate } from 'global'

import "scss/sections/OurEvent.scss"

import Arrow from 'media/vectors/ArrowElement'

import { ReactComponent as Menu } from 'media/vectors/menu.svg'

import { ReactComponent as Moneys } from 'media/vectors/moneys.svg'
import { ReactComponent as PinPoint } from 'media/vectors/pinPoint.svg'
import { ReactComponent as SceduleClock } from 'media/vectors/sceduleClock.svg'
import { ReactComponent as SceduleWrite } from 'media/vectors/sceduleWrite.svg'
import { ReactComponent as Share } from 'media/vectors/share.svg'

import cloud1 from 'media/cloud/awan1.png'
import cloud2 from 'media/cloud/awan2.png'


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
        <header>
          <div className="viewAll">
            <Menu />
            <h2>View All</h2>
          </div>
          <h1>OUR EVENTS</h1>
        </header>

        <div className="body">
          <div className="left arrow">
            <div className="clickArea swipe right active">
              <Arrow colors={ColorPallate.$BlueMain} className='clickArea' pointingRight/>
            </div>
          </div>
          <div className="right arrow">
            <div className="clickArea swipe left active">
              <Arrow colors={ColorPallate.$BlueMain} className='clickArea' />
            </div>
          </div>
          <div className="content">

          </div>
        </div>
      </div>
    </section>
  )
}

export default OurEvent;