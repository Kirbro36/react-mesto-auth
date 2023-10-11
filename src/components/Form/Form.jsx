import { useContext } from "react";
import SendContext from '../../contexts/SendContext.js';
import React from "react";

export default function Form({ name, titleButton, children, isValid, onSubmit }) {
    const isSend = useContext(SendContext)
    return (
        <form noValidate className="form" name={name} onSubmit={onSubmit}>
            {children}
            {name === 'signin' || name === 'signup' ?
                <button className={`login__submit-button ${isValid ? '' : 'login__submit-button_disable'}`}>
                    {isSend ? '' : titleButton || 'Сохранить'}
                </button>
                :
                <button disabled={isSend} className={`form__save ${isValid ? '' : 'form__save_noactive'}`} type="submit">
                    {isSend ? 'Сохранение' : titleButton || 'Сохранить'}
                </button>}
        </form>
    )
}