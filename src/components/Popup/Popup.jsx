import React from "react";

export default function Popup({ name, children, isOpen, onClose }) {
    return (
        <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`} onMouseDown={onClose}>
            <div className={`${name === 'image' ? 'popup__case' : 'popup__container'} ${name === 'successful' || name === 'result' ? 'popup__container_registration' : ''} `}
            onMouseDown={(evt) => evt.stopPropagation()}>
                <button className="popup__close popup__close_profile popup__close_button_profile"
                    type="button" onClick={onClose} />
                {children}
            </div>
        </div>
    )
}