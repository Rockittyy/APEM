import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import 'scss/components/Button.scss';

interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
    to: string,
    text: string,
    anim?:string,
    dark?: boolean,
}

const Button: FC<ButtonProps> = ({ to, text, dark = false, anim = 'hover', className, ...rest }) => {
    return (
        // here the class name extended manually because we already use the class name 
        // feature here, and thus if we not do it manually, the other assignment of 
        // class name would replace the already existing one
        <Link to={to} className={`clickArea ${anim}`}>
            <div className={`BlueButton ${dark ? "dark" : "light"} ${className}`} {...rest}>
                <p className=''>
                    {text}
                </p>
            </div>
        </Link>
    )
}

export default Button;