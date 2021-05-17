import {useStatr} from 'react';



const InputProfil = ({label, input}) => {


    return(
        <div className='inputProfil'> 
            <label>{label}</label>
            <div className='inputProfil__input'>
                <input readonly value={input}></input> 
                <div className='inputProfil__change'>Изменить</div>
            </div>
        </div>
    )
}

export default InputProfil;