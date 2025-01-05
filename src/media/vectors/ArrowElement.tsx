import React, { FC } from 'react'

export interface arrowElementProps extends React.HTMLAttributes<SVGSVGElement> {
    colors: string,
    pointingRight?: boolean,
    rotation?: number,
}

const ArrowElement: FC<arrowElementProps> = ({ colors, pointingRight: facingRight = false, rotation = 0, ...rest }) => {
    return (
        <svg width="44" height="89" viewBox="0 0 44 89" fill="none" xmlns="http://www.w3.org/2000/svg"
            {...rest}
            style={{ "transform": `scale(${facingRight ? 1 : -1},1)` }}>
            {/* that will flip depend on the paramater */}

            <path d="M0.375 88.0416V0.958252L43.9167 44.4999L0.375 88.0416Z" fill={colors} transform={`rotate(${rotation},50,50)`} />
        </svg>

    )
}

export default ArrowElement;