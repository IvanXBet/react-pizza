import React, {useState} from 'react';
import Header from '../header/header';
import Ready from '../ready/ready'

const ReadyPage = () => {
    return (
        <>
            <Header authButton = {false}/>
            <Ready/>
        </>
    )

}
export default ReadyPage;