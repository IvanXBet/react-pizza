import React, {Component} from 'react';
import {connect} from 'react-redux';

import getUser from '../../services/getUser-service';

import OrderItemProfil from '../orderItemProfil/orderItemProfil';
import InputProfil from '../inputProfil/inputProfil';

import {Link} from 'react-router-dom';

const User = new getUser();


class Profil extends Component {

    state = {
        user: {},
        orders: []
    }

    async componentDidMount() {
        const userData = JSON.parse(localStorage.getItem('userData'));
        await User.getUserProfil({userId: userData.userId})
        .then(res =>  this.setState({
            orders: res.orders,
            user: res.candidate
        }))
        
       
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

    logout = () => {
        localStorage.removeItem('userData');
    }

    
    render() {
        const {name, phone, bday, email} = this.state.user
        const strBday = this.dateBday();
        const newOrder = this.state.orders.reverse()

        console.log(strBday)
        return (
            <>
                <div className='profil'>
                    <div className='container container_profil'>
                        <div className='profil__title'><i class="fas fa-user"></i> Профиль</div>
                        
                        <div className='profil__block'>
                            <div className='profil__info'>
                                <div className='profil__inputs'>
                                    <InputProfil label={'Имя'} input={name}/>
                                    <InputProfil label={'Телефон'} input={phone}/>
                                    <InputProfil label={'День рождения'} input={strBday} />
                                    <InputProfil label={'Почта'} input={email}/>
                                </div>

                                <Link to={'/'} onClick={this.logout} className='button button__outProfil'>Выход</Link>
                            </div>

                            <div className='profil__order'>
                                <h3 className='profil__orderTitle'>Заказы</h3>

                                {
                                    
                                    newOrder.map(orderItem => {
                                        return  <OrderItemProfil orderItem={orderItem}/>
                                    })
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
                
            </>
        )

    }
    
    }

    const mapStateToProps = (state) => {
        return {
            
        }
    }
    
    const mapDispatchToProps = {
    }

    
    export default connect(mapStateToProps, mapDispatchToProps)(Profil);
