import React, { FC } from 'react'

interface arrowProps {
    colors: string,
    facingRight: boolean,
    rotation?: string,
}

const Arrow: FC<arrowProps> = ({ colors, facingRight, rotation = "0deg" }) => {
    return (
        <svg width="44" height="89" viewBox="0 0 44 89" fill="none" xmlns="http://www.w3.org/2000/svg"
            style={{ "transform": `scale(${facingRight ? 1 : -1},1) rotate(${rotation})` }}>
            {/* that will flip depend on the paramater */}

            <path d="M0.375 88.0416V0.958252L43.9167 44.4999L0.375 88.0416Z" fill={colors} />
        </svg>

    )
}

export default Arrow;