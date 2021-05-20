import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import AdminNavBar from '../../components/admin-nav-bar/admin-nav-bar';
import Header from '../header/header.js';
import WorkerPanel from '../worrker-panel/worker-panel'


class WorkerPage extends Component {
    render() {
        return (
            <>
                {false ? null : <Redirect to={"/authadmin"} />}
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