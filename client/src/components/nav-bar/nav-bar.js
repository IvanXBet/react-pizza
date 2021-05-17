import React, {useState, useEffect} from 'react';
import ButtonCart from '../button-cart/button-cart';
import {Link} from 'react-router-dom';

import logoSvg from '../../assets/img/logo-pizza.svg';

const NavBar = () =>  {
    const [logoHeader, setLogoHeader] = useState(false);

   

    window.addEventListener('scroll', (e) => {
        
    if(window.pageYOffset >= 100) {
        setLogoHeader(true)
    } else {
        setLogoHeader(false)
    }
        
      });
      const logoClass = logoHeader ? 'navbar__logo  hiden' : 'navbar__logo'
    
        return (
                <nav  className='navbar'>
                    <div className='container'>
                        <div className='navbar__items'>
                            
                            <ul className='navbar__menu'>
                                <div className={logoClass}>
                                    <img width="40" src={logoSvg} alt="Pizza logo"/>
                                </div>
                                <li className='navbar__item'> 
                                    <Link to={'/'}> <i class="fas fa-pizza-slice"></i> Пицца </Link>
                                </li>

                                <li className='navbar__item'> 
                                    <Link to={'/'}> <i class="fas fa-glass-whiskey"></i> Напитки</Link>
                                </li>

                                <li className='navbar__item'> 
                                    <Link to={'/delivery'}> <i class="fas fa-truck"></i> Доставка</Link>
                                </li>

                                <li className='navbar__item'> 
                                    <Link to={'/about'}> <i class="fas fa-users"></i> О нас</Link>
                                </li>
                            </ul>
                            <ButtonCart cartButton = {true}/>
                        </div>
                    </div>
                </nav>
        )
    
}


export default NavBar;