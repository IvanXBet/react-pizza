import React, {Component} from 'react';
import {connect} from 'react-redux';

import getUser from '../../services/getUser-service';

import OrderItemProfil from '../orderItemProfil/orderItemProfil';
import InputProfil from '../inputProfil/inputProfil';
import Spinner from '../spinner/spinner';
import Error from '../error/error';

import {Link} from 'react-router-dom';

const User = new getUser();


class Profil extends Component {

    state = {
        user: {},
        orders: [],
        loading: true,
        error: false,

        name:'',
        phone:'',
        email:'',
    }

    message = (text) => {
        if (text) {

            alert(text);
        
        }
    }

    async componentDidMount() {
        const userData = JSON.parse(localStorage.getItem('userData'));
        await User.getUserProfil({userId: userData.userId})
        .then(res =>{  this.setState({
                orders: res.orders,
                user: res.candidate,
                loading: false,
            })
            localStorage.setItem('userData', JSON.stringify({
                auth:true, userName:res.candidate.name, userId:res.candidate._id, token:res.candidate.jwtToken
            }))
            
        })
        .catch(error => this.setState({error: true}))

        
    }

    dateBday() {
        const date = new Date(this.state.user.bday);
        let y = date.getFullYear();
        let m;
        let d;
        if(date.getMonth() <10){
            m = '0' + (date.getMonth() + 1)
        } else {m = date.getMonth() + 1}
        
        if(date.getDate() < 10){
            d = '0' + (date.getDate() + 1)
        } else {d = date.getDate() + 1}

        const str = `${d}-${m}-${y}`;

        return str;
    }

    setInput = async (e, name) => {
        await this.setState((state, item) => ({user: {...state.user, [e.target.name]: e.target.value}}))
       
    }

    changeInput = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    changeProfil = async (e) => {
        e.preventDefault();
        await User.changeUserProfil(this.state.user)
        .then(res => {
            if(res.message === 'Некорректный данные при регистрации') {
                this.message(res.message)  
                
            } else {
                console.log(res)
                // window.location.reload();
            }
        })
    }

    logout = () => {
        localStorage.removeItem('userData');
    }

    
    render() {
        const {loading, error} = this.state
        const strBday = this.dateBday();
        const newOrder = this.state.orders.reverse()

        const spinner = loading ? <Spinner/> : null;
        const errorMenu = error ? <Error/> : null;
        const content = !(loading || error) ? <View changeProfil={this.changeProfil} setInput={this.setInput} user={this.state.user} orders={newOrder} logout={this.logout} strBday={strBday} changeInput={this.changeInput}/> : null;

        return (
            <>
                <div className='profil'>
                    <div className='container container_profil'>
                        <div className='profil__title'><i class="fas fa-user"></i> Профиль</div>
                        {spinner}
                        {errorMenu}
                        {content}
                    </div>
                </div>
            </>
        )

    }

}

const View = ({user, orders, logout, strBday, setInput, changeProfil}) => {
    return(
        <div className='profil__block'>
        <div className='profil__info'>
            
            <form className='profil__inputs'>
                    <div className='inputProfil'> 
                        <label>Имя</label>
                        <div className='inputProfil__input'>
                            <input name='name' required onChange={setInput} value={user.name}></input> 
                        </div>
                    </div>

                    
                
                    <div className='inputProfil'> 
                        <label>Телефона</label>
                        <div className='inputProfil__input'>
                            <input name='phone' required onChange={setInput} value={user.phone}></input> 
                        </div>
                    </div>

                    <div className='inputProfil'> 
                        <label>День рождения</label>
                        <div className='inputProfil__input'>
                            <input name='text'  value={strBday}></input> 
                        </div>
                    </div>

                    <div className='inputProfil'> 
                        <label>Почта</label>
                        <div className='inputProfil__input'>
                            <input name='email' type='email' required onChange={setInput} value={user.email}></input> 
                        </div>
                    </div>

                    
            </form>
            <div className='profil__buttons'>
                <button onClick={changeProfil} className='button button_inputProfil'>Изменить</button>
                <Link to={'/'} onClick={logout} className='button button__outProfil'>Выход</Link>
            </div>
        </div>

        <div className='profil__order'>
            <h3 className='profil__orderTitle'>Заказы</h3>

            {
                orders.map(orderItem => {
                    return  <OrderItemProfil orderItem={orderItem}/>
                })
            }
            
        </div>
    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = {
}

    
    export default connect(mapStateToProps, mapDispatchToProps)(Profil);
