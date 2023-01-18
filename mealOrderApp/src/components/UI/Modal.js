import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
    return <div className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

const PORTAL_ELEMENT = document.getElementById('overlays');

export const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop />, PORTAL_ELEMENT)}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                PORTAL_ELEMENT
            )}
        </>
    );
};
