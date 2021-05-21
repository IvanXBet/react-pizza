import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import PizzaServis from '../../services/admin-service';
import logoSvg from '../../assets/img/logo-pizza.svg';


const service = new PizzaServis();

class AdminAuth extends Component {
    state = {
        login: '',
        password: '',
        authAdmin: 'false',
    }

    async componentDidMount() {
        const {authAdmin} = this.state

        if(localStorage.getItem('dataAdmin') != null) {
            const authAdmin = JSON.parse(localStorage.getItem('dataAdmin'))
            console.log(authAdmin)
            await this.setState({authAdmin: authAdmin.auth})
        } else {
            await localStorage.setItem('dataAdmin', JSON.stringify({auth: authAdmin}))
        }
        
        console.log(this.state)
    }

    setInput = async (e) => {
        await this.setState({[e.target.name]: e.target.value})
    }

    onLogin = async () => {
        const {login, password} = this.state;
        await service.loginAdmin({login, password})
            .then(res => this.setState({authAdmin: res.admin}))
        console.log(this.state.authAdmin)
        this.onAuthAdmin();
    }

    onAuthAdmin = async () => {
        const {authAdmin} = this.state
        if(authAdmin){
            await localStorage.setItem('dataAdmin', JSON.stringify({auth: authAdmin}))
            window.location.reload();
        }
    }

    onRederec() {
        const {authAdmin} = this.state
        if(authAdmin === true) {
            console.log('red')
            return <Redirect to={"/worker"}/>
            
        } else {
            console.log('null')
            return null
        }
    }

    render() {
        
        console.log(this.state.authAdmin)
        return(
            <>
                {this.onRederec()}
                <div className='authAdmin'>
                    <div className='container'>
                        <img width="50" src={logoSvg} alt="Pizza logo"/>
                        <form className='authAdmin__block'>
                            <div className='authAdmin__inputs'>
                                <div className='authAdmin__input'>
                                    <label>Логин</label> 
                                    <input onChange={this.setInput} name='login' type='text'></input> 
                                </div>

                                <div className='authAdmin__input'>
                                    <label>Пароль</label> 
                                    <input onChange={this.setInput} name='password' type='password'></input> 
                                </div>
                            </div>
                            <div onClick={this.onLogin} className='button button_authAdmin' type='submit'>Войти</div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
export default AdminAuth;