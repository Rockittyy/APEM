import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import 'scss/components/Button.scss';

interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
    to: string,
    text: string,
    dark?: boolean,
}

const Button: FC<ButtonProps> = ({ to, text, dark = false, className }) => {
    return (
        <Link to={to} className={`BlueButton ${dark?"dark":"light"} ${className}`}>
            <p className=''>
                {text}
            </p>
        </Link>
    )
}

export default Button;