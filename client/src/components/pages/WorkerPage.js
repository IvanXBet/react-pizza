import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import AdminNavBar from '../../components/admin-nav-bar/admin-nav-bar';
import Header from '../header/header.js';
import WorkerPanel from '../worrker-panel/worker-panel'


class WorkerPage extends Component {    

    onRederec() {
        let authAdmin = JSON.parse(localStorage.getItem('dataAdmin'))
            
        if(authAdmin === null) {
            console.log('auth null')
            authAdmin = {auth: false}
        }
        
        console.log(authAdmin.auth)
        const b = authAdmin.auth ? true : false
        console.log(b)


        if(authAdmin.auth === true) {
            console.log('null')
            return null
        } else {
            console.log('red')
            return <Redirect to={"/authadmin"} />
        }
    }

    render() {
        
        return (
            <>
                {this.onRederec()}
                <Header authButton = {false} />

                <AdminNavBar/>
                <Switch>
                    <Route path='/' exact><WorkerPanel/></Route>
                    <Route path='/worker/orders' exact><WorkerPanel/></Route>
                    <Route path='/worker/stats' exact><WorkerPanel/></Route>
                    {/* <Route path='/worker/addcontent' exact><WorkerPanel/></Route> */}
                    
                    
                    <Route exact> <WorkerPanel/></Route>
                    
                </Switch>
            </>
        )
    }
}


export default WorkerPage;