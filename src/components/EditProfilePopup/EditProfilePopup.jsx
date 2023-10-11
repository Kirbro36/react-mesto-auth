import { memo, useContext, useEffect } from "react";
import React from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import useFormValidation from "../../utils/useFormValidation.js";
import PopupWithForm from "../PopupWithForm/PopupWithForm.jsx";
import Input from "../Input/Input.jsx";

const EditProfilePopup = memo(({ isOpen, onClose, onUpdateUser }) => {
    const currentUser = useContext(CurrentUserContext);
    const { values, errors, isValid, isInputValid, handleChange, reset } = useFormValidation()

    useEffect(() => {
        if (isOpen) {
            reset({ username: currentUser.name, about: currentUser.about })
        }
    },[currentUser, isOpen, reset])

    function handleSubmit(evt) {
        evt.preventDefault()
        onUpdateUser({ username: values.username, about: values.about })
    }

    return (
        <PopupWithForm
            name={'edit-profile'}
            title={'Редактировать профиль'}
            isOpen={isOpen}
            onClose={onClose}
            isValid={isValid}
            onSubmit={handleSubmit}
        >
            <Input
                name="username"
                type="text"
                placeholder="Имя"
                minLength={2}
                maxLength={40}
                value={values.username}
                onChange={handleChange}
                isInputValid={isInputValid.username}
                error={errors.username}
            />
            <Input
                name="about"
                type="text"
                placeholder="О себе"
                minLength={2}
                maxLength={30}
                value={values.about}
                onChange={handleChange}
                isInputValid={isInputValid.about}
                error={errors.about}
            />
        </PopupWithForm>
    )
})

export default EditProfilePopup;