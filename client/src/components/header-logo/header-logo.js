import React from 'react';
import {Link} from 'react-router-dom';

import logoSvg from '../../assets/img/logo-pizza.svg';

const HeaderLogo = () => {
    
    return (
        <Link to={'/'} className="header__logo">
            
                <img width="48" src={logoSvg} alt="Pizza logo"/>

                <div>
                    <h1>React Pizza</h1>
                    <p>самая вкусная пицца во вселенной</p>
                </div>
            
        </Link>
    )
}

export default HeaderLogo;
                    