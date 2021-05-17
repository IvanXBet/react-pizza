import React, {useState} from 'react';
import Header from '../header/header';
import NavBar from '../nav-bar/nav-bar.js';
import Profil from '../profil/profil';

const ProfilPage = () => {
    return (
        <>
            <Header authButton = {true}/>
            <NavBar/>
            <Profil/>
            
        </>
    )

}
export default ProfilPage;