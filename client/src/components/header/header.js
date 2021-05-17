import React, {useState, useEffect} from 'react';
import HeaderLogo from '../header-logo/header-logo';
import Guide from '../header-guide/header-guide';
import Modal from '../modal/modal';
import {Link} from 'react-router-dom';
import {useHttp} from '../../hooks/http.hooks';
import {useMessage} from '../../hooks/message.hook';
import {useAuth} from '../../hooks/auth.hook';
import {Snackbar, Button}  from '@material-ui/core';



import modalPizza from '../../assets/img/modal-pizza.svg';


const Header = ({authButton, positon}) => {
    const {request, loading, error, clearError} = useHttp()
    const {login} = useAuth()
    const message = useMessage();
    const [moadlInputActive, setMoadlInputActive] = useState(false);
    const [moadlRegistActive, setMoadlRegistActive] = useState(false);
    
    const [form, setForm] = useState({email:'', password:'', name:'', phone: '', bday: ''});
   
    const [user, setUser] = useState({auth: false, name: ''});


    
    
    

   
    

    useEffect(() => {
        
        const auth = JSON.parse(localStorage.getItem('userData'))
        if(auth != null && auth.auth) {
            
            setUser(auth)

        }
        
    }, [])

    useEffect(() => {
        message(error)
        clearError()
      }, [error, message, clearError])

    const changeInput = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

   

      
    const registerHendler = async () => {
        try {
          const data = await request('/api/auth/register', 'POST', {...form})
          message(data.message)
          window.location.reload();
        } catch (e) {}
      }

      const loginHendler = async () => {
        try {
            const  data = await request('/api/auth/login', 'POST', {...form})
            message(data.message)

            login(data.token, data.userId, data.userName);

            
            window.location.reload();
        } catch (e) {}
      }

    const buttons = user.auth ? <Link to ={'/profil'} className='button button_headerInput '>{user.userName}</Link> : <View Input={setMoadlInputActive} Regist={setMoadlRegistActive}/>
    const content = authButton ? buttons : <Guide positon={positon}/>;
    return (
        <>
            <div className="wrapper">
                <div className="header">
                    <div className = 'container'>
                        <div className='header__items'>
                            <HeaderLogo/>
                            {content}
                        </div>
                    </div>
                </div>
            </div>
            <Modal moadlActive={moadlInputActive} setMoadlActive={setMoadlInputActive}>
                <div className='modalInput'>
                    <div className='modalInput__left'>
                    <div className='modalInput__title'>Вход</div>
                        <form>
                            <div className='modalInput__inputs'>
                                <input placeholder='электронная почта' type="text" name="email" onChange={changeInput} ></input>
                                {/* <input placeholder='номер телефона' type="tel" pattern="\+7\-[0-9]{3}\-[0-9]{3}\-[0-9]{2}\-[0-9]{2}"></input> */}
                                <input placeholder='пароль' type="password" name="password" onChange={changeInput} ></input>
                            </div>
                            <div to={'/'} className='button button_modalInput' onClick={loginHendler} disabled={loading}>Вход</div>
                        </form>
                        <div className='modalInput__link'></div>
                    </div>
                    <div className='modalInput__right'>
                        <img src={modalPizza}></img>
                    </div>
                </div>
            </Modal>
            
            <Modal moadlActive={moadlRegistActive} setMoadlActive={setMoadlRegistActive}>
                <div className='modalRegist'>
                    <div className='modalInput__title'>Регистрация</div>
                    <form>
                        <div className='modalRegist__inputs'>
                            <input placeholder='электронная почта' type="email" name="email" onChange={changeInput} ></input>
                            <input placeholder='пароль' type="password" name="password" onChange={changeInput}></input>
                            <input placeholder='имя' type="text" name="name" onChange={changeInput}></input>
                            
                            <input placeholder='дата дня рождения' type="date" name="bday" min="1900-01-01" max="2099-12-31" onChange={changeInput}></input> 
                            <input placeholder='номер телефона' type="text" name="phone" onChange={changeInput}></input>    
                        </div> 
                        
                        <div className='button button_modalRegist' onClick={registerHendler} disabled={loading}>Регистрация</div>
                    </form>
                </div>   
            </Modal>
        </>
    )
}


const View = ({Input, Regist}) => {
    
    return (
        
        <div className='header__buttons'>

            <div onClick={() => {Regist(true)}} className='button button_headerRegist '>Регистрация</div>             
            <button onClick={() => {Input(true)}} className='button button_headerInput '>Вход</button>
                   
                               
        </div>
           
        
    )
}

export default Header;