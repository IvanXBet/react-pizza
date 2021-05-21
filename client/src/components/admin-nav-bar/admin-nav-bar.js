import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';


const AdminNavBar = () =>  {
        return (
            <nav  className='navbar'>
                <div className='container'>
                    <div className='navbar__items'>
                        <ul className='navbar__menu navbar__menu_admin'>
                            <li className='navbar__item'> 
                                <Link to={'/worker/orders'}>Обработка зкаказов</Link>
                            </li>

                            <li className='navbar__item'> 
                                <Link to={'/worker/stats'}>Статистика</Link>
                            </li>

                            <li className='navbar__item'> 
                                <Link to={'/worker/addcontent'}>Добавление контента</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    
}


export default AdminNavBar;