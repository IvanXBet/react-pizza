import React from 'react';
import Header from '../header/header.js';
import NavBar from '../nav-bar/nav-bar.js';
import BlockCards from '../block-cards/block-cards';
import AboutUs from '../aboutUs/aboutUs';
import Delivery from '../delivery/delivery';
import {Switch, Route} from 'react-router-dom';


const MainPage = () => {
    return (
        <>
            <Header authButton = {true}/>
            <NavBar/>
            <Switch>
				<Route path='/' exact><BlockCards/></Route>
                <Route path='/about' exact><AboutUs/></Route>
                <Route path='/delivery' exact><Delivery/></Route>
                <Route exact><BlockCards/></Route>
			</Switch>
        </>
    )
}

export default MainPage;
