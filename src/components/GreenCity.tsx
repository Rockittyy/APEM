import React, { FC } from 'react'
import 'scss/components/GreenCity.scss';

import portal from 'media/greenCity/portal.png'
import city_back from 'media/greenCity/city_back.png'
import city_side from 'media/greenCity/city_side.png'
import path from 'media/greenCity/path.png'
import ground from 'media/greenCity/ground.png'
import smoke_bottom from 'media/greenCity/smoke_bottom.png'
import smoke_middle from 'media/greenCity/smoke_middle.png'
import smoke_top from 'media/greenCity/smoke_top.png'
import ufo from 'media/greenCity/ufo.png'


interface GreenCityProps extends React.HTMLAttributes<HTMLDivElement> {
    scale?: number;
    length?: string;
    horizontalOffset?: string;
}
// 1.5mb version
// const Original = {
//     width: "2880px",
//     height: "1620px",

// }
// 20mb version
// const Original = {
//     width: "6000px",
//     height: "3375px",

// }
const Original = {
    width: "2090px",
    height: "3071px",

}

const GreenCity: FC<GreenCityProps> = ({ scale = 1, length = "100vw", horizontalOffset = '0' }) => {
    const isRelative = !length.includes('px');
    const ratio = parseInt(Original.height) / parseInt(Original.width);
    return (
        <div className="greenCity"
            style={{
                height: isRelative ?
                    `calc(${Original.height}*${scale})` :
                    `${parseInt(Original.height) * scale}px`,
                width: length,
            }}
        >
            <div className="canvas"
                style={{
                    width: isRelative ?
                        `calc(${Original.width}*${scale})` :
                        `${parseInt(Original.width) * scale}px`,

                    height: isRelative ?
                        `calc(${Original.height}*${scale})` :
                        `${parseInt(Original.height) * scale}px`,
                    left: `calc(50% + ${horizontalOffset})`,
                }}
            >

                <div className='holder'
                    style={{
                        transform: `scale(${scale})`,
                    }}
                >
                    <img className='portal' src={portal} alt="" />
                    <img className='city_back' src={city_back} alt="" />
                    <img className='city_side' src={city_side} alt="" />
                    <img className='path' src={path} alt="" />
                    <img className='ground' src={ground} alt="" />
                    <img className='smoke_bottom' src={smoke_bottom} alt="" />
                    <img className='smoke_middle' src={smoke_middle} alt="" />
                    <img className='smoke_top' src={smoke_top} alt="" />
                    <img className='ufo' src={ufo} alt="" />
                </div>

            </div>
        </div>
    )
}

export default GreenCity;