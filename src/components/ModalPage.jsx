import React from 'react';
import "./UI/ModalPage.css";

const ModalPage = ({active, setActive, children}) => {
    function buttonClicked(){
        setActive(false);
    }
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => buttonClicked()}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default ModalPage;