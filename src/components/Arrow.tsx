import React, { FC } from 'react'
import ArrowElement, { arrowElementProps } from 'media/vectors/ArrowElement'
import 'scss/components/Arrow.scss'
import { ColorsPallate } from 'global';

interface arrowProps extends arrowElementProps {
    right?: boolean;
    left?: boolean;
    holderClass?: string;
    active?: boolean;
}

const Arrow: FC<arrowProps> = ({ right = true, left = false, holderClass = '', active = false, ...rest }) => {
    let toRight = right;
    toRight = !left;
    return (
        <div 
        className={`clickArea swipe ${active ? 'active' : ''} ${toRight ? 'right' : 'left'}  Arrow${holderClass}`} >
            <ArrowElement className={`clickArea`} pointingRight={toRight} {...rest} />
        </div>
    )
}

export default Arrow;