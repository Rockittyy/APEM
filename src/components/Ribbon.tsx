import RibbonEnd from 'media/vectors/RibbonEnd';
import React, { FC } from 'react'
import 'scss/components/Ribbon.scss';


interface RibbonProps extends React.HTMLAttributes<HTMLDivElement> {
    backColor: string;
    color: string;
    fontSize?: string;
    lineHeight?: string; //please use rem
    nudge?:string;
}

const Ribbon: FC<RibbonProps> = ({ backColor, color, children, lineHeight = '3rem', fontSize = '2rem', nudge='0px' }) => {
    const ribbonHight = `calc(${lineHeight} * 1.225)`;

    return (
        <div className='Ribbon'>
            <RibbonEnd color={backColor} left style={{ height: ribbonHight }} />
            <h1 className='children'
                style={{
                    lineHeight: lineHeight,
                    backgroundColor: backColor,
                    color: color,
                    fontSize:fontSize,
                    position:'relative',
                    top:nudge,
                }}
            >
                {children}
            </h1>
            <RibbonEnd color={backColor} right style={{ height: ribbonHight }} />
        </div>
    )
}

export default Ribbon;