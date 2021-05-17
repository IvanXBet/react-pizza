import React from 'react';

const Modal = ({moadlActive, setMoadlActive, children}) => {
    return (
        <div className={moadlActive ? 'modal active' : 'modal'} onClick={() => {setMoadlActive(false)}}>
            <div className={moadlActive ? 'modal__container modal__container_active' : 'modal__container'} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;