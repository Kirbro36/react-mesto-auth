import { memo, useEffect } from "react"
import useFormValidation from "../../utils/useFormValidation.js"
import PopupWithForm from "../PopupWithForm/PopupWithForm.jsx"
import Input from "../Input/Input.jsx";
import React from "react";

const EditAvatarPopup = memo(({ isOpen, onClose, onUpdateAvatar }) => {
    const { values, errors, isValid, isInputValid, handleChange, reset } = useFormValidation()

    useEffect(() => {
        if (isOpen) {
            reset()
        }
    }, [isOpen, reset])

    function handleSubmit(evt) {
        evt.preventDefault()
        onUpdateAvatar({avatar: values.avatar })
    }

    return (
        <PopupWithForm
            name='edit-avatar'
            title='Обновить аватар'
            isOpen={isOpen}
            isValid={isValid}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <Input
                name="avatar"
                type="url"
                placeholder="Ссылка на аватарку"
                value={values.avatar}
                onChange={handleChange}
                isInputValid={isInputValid.avatar}
                error={errors.avatar}
            />
        </PopupWithForm>
    )
})

export default EditAvatarPopup;