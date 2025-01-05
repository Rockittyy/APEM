import React, { FC } from 'react'
import 'scss/components/ProfileCard.scss';


import profileCard from 'media/profileCards/Mas_Muil/ProfileCard.Mas_Muil.png'
import { ReactComponent as OSNLogo } from 'media/OSN_Logo/OSN_emas/kebum_osn_emas.svg'
import { ColorsPallate } from 'global';

import Arrow from './Arrow';
import Medal from 'media/vectors/Medal';
import Quote from 'media/vectors/Quote';
import ArrowElement from 'media/vectors/ArrowElement';
import Ribbon from './Ribbon';

interface ProfileCardProps extends React.HTMLAttributes<HTMLDivElement> {

}

const Card: FC<ProfileCardProps> = ({ }) => {
    return (
        <div className='profileCard'>
            <div className='img'><img src={profileCard} alt="Mas Muil" /></div>
            <div className='middle'>
                <h3 className='left'>OSN 2024</h3>
                <OSNLogo className='logo' />
                <h3 className='right'>KEBUMIAN</h3>
            </div>
            <div className='bottom'>
                <div className="RibbonName">
                    <Ribbon backColor={ColorsPallate.$orange} color={ColorsPallate.$yellow} lineHeight='2rem' fontSize='1.17em' >
                        ISMAIL MUZAMIL
                    </Ribbon>

                </div>
                <div className="title">
                    <Arrow colors={ColorsPallate.$grey} left />
                    <h3>Medalis Emas OSN Kebumian 2024</h3>
                    <Arrow colors={ColorsPallate.$yellow} right active />
                </div>
                <div className="list">
                    <div className="medals">
                        {/* dont forget code here */}
                        <Quote color={ColorsPallate.$yellow} glow='5px' />
                        <Medal color={ColorsPallate.$yellow} glow='5px' />
                        <Medal color={ColorsPallate.$yellow} glow='5px' />
                        <Medal color={ColorsPallate.$yellow} glow='5px' />
                        <Medal color={ColorsPallate.$yellow} glow='5px' />
                        <Medal color={ColorsPallate.$yellow} glow='5px' />
                    </div>
                    <div className="Arrow">
                        <ArrowElement colors={ColorsPallate.$yellow} rotation={-90} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;