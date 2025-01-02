import React, { FC } from 'react'
import './Tryout_Osnk_2025.scss';

import { ReactComponent as SceduleWrite } from 'media/vectors/sceduleWrite.svg'
import { ReactComponent as SceduleClock } from 'media/vectors/sceduleClock.svg'
import { ReactComponent as PinPoint } from 'media/vectors/pinPoint.svg'
import { ReactComponent as Moneys } from 'media/vectors/moneys.svg'
import { ReactComponent as Share } from 'media/vectors/share.svg'

import poster from './poster.jpg';

import Button from 'components/Button'


interface Tryout_Osnk_2025Props extends React.HTMLAttributes<HTMLDivElement> {

}

const Tryout_Osnk_2025: FC<Tryout_Osnk_2025Props> = ({ }) => {
  return (
    <div id='Tryout_Osnk_2025'>
      <div className='img'><img src={poster} alt="poster tryout osnk 2025" /></div>

      <div className="content">

        <div className="text">

          <div className="title">
            <h1>TRYOUT SEASON 1</h1>
            <h2>ONS-K 2025</h2>
          </div>


          <h2 className='status'>CLOSED</h2>


          <div className="detail">
            <div className="info1">
              <div className='icon'><SceduleWrite /></div>
              <h3>Pelaksanaan: 05 Oktober</h3>
            </div>

            <div className="info2">
              <div className='icon'><SceduleClock /></div>
              <h3>Pendaftaran: 15 - 30 September</h3>
            </div>

            <div className="info3">
              <div className='icon'><PinPoint /></div>
              <h3>Online</h3>
            </div>

            <div className="info4">
              <div className='icon'><Moneys /></div>
              <h3>Biaya: GRATIS / 10k / 25k</h3>
            </div>
          </div>

        </div>

      </div>
      <div className="buttons">
        <Button to="./" text='Daftar' className='daftar' />
        <Button to="./" text='Learn more' dark />
        <div className="clickArea hover">
          <Share />
        </div>
      </div>


    </div>
  )
}

export default Tryout_Osnk_2025;