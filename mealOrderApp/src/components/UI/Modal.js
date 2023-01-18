import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = ({ closeCart }) => {
    return <div className={classes.backdrop} onClick={closeCart} />;
};

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

const PORTAL_ELEMENT = document.getElementById('overlays');

export const Modal = ({ closeCart, ...props }) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop closeCart={closeCart} />,
                PORTAL_ELEMENT
            )}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                PORTAL_ELEMENT
            )}
        </>
    );
};
