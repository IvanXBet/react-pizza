import {useState, useEffect} from 'react';


const InputProfil = ({label, input, setInput}) => {

    
    

    return(
        <div className='inputProfil'> 
            <label>{label}</label>
            <div className='inputProfil__input'>
                <input onChange={e => setInput(e.target.value)} value={input}></input> 
            </div>

        </div>
    )
}

export default InputProfil;