import React, { FC } from 'react'
import 'scss/sections/Header.scss'
import { ReactComponent as Logo } from 'media/Apem/ApemFull.svg'

// clouds
import cloud1 from 'media/cloud/cloud_head_top_left.png'
import cloud2 from 'media/cloud/cloud_head_top_right.png'
import cloud3 from 'media/cloud/cloud_head_bottom_left.png'
import cloud4 from 'media/cloud/cloud_head_bottom_right.png'

import Button from 'components/Button'

interface headerProps {

}

const Header: FC<headerProps> = ({ }) => {
  return (
    <header className='centerFlex'>

      <main className="content">

        <div className="logo">
          <Logo id='logoMain' />
        </div>

        <div className="contentText">

          <div className="title">
            <h1 className=''>APEM</h1>
            <h2 className=''>AKADEMI PEMULA</h2>
          </div>

          <div className="slogan">
            <p >
              Siap melatih dari pemula, jadi sepuh tingkat dewa
            </p>
          </div>

          <div className="buttons">
            <Button to="./" text='Learn more' />
            <Button to="./" dark text='Our event' />
          </div>

        </div>

      </main>

      <div className="background">
        <img src={cloud1} id="c1" alt="" />
        <img src={cloud2} id="c2" alt="" />
        <img src={cloud3} id="c3" alt="" />
        <img src={cloud4} id="c4" alt="" />
      </div>

    </header>
  )
}

export default Header;