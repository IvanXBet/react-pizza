import React, {Component} from 'react';
import PizzaServis from '../../services/admin-service';
import logoSvg from '../../assets/img/logo-pizza.svg';


const service = new PizzaServis();

class AdminAuth extends Component {
    state = {
        login: '',
        password: '',
    }

    setInput = async (e) => {
        await this.setState({[e.target.name]: e.target.value})
    }

    onLogin = () => {
        const {login, password} = this.state;
        service.loginAdmin({login, password})
            .then(res => console.log(res))
    }

    render() {
        return(
            <>
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