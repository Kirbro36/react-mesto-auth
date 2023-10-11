import { memo, useEffect } from "react";
import useFormValidation from "../../utils/useFormValidation.js";
import Input from "../Input/Input.jsx";
import PopupWithForm from "../PopupWithForm/PopupWithForm.jsx";
import React from "react";

const AddPlacePopup = memo(({ isOpen, onClose, onAddPlace }) => {
    const { values, errors, isValid, isInputValid, handleChange, reset } = useFormValidation()

    useEffect(() => {
        if (isOpen) {
            reset()
        }
    }, [isOpen, reset])


function handleSubmit(evt) {
    evt.preventDefault()
    onAddPlace({ title: values.title, link: values.link })
}

return (
    <PopupWithForm
        name='add-card'
        title='Новое место'
        titleButton='Создать'
        isOpen={isOpen}
        isValid={isValid}
        onClose={onClose}
        onSubmit={handleSubmit}
    >
        <Input
            name="title"
            type="text"
            id="title"
            placeholder="Название"
            minLength={2}
            maxLength={30}
            required=""
            value={values.title}
            onChange={handleChange}
            isInputValid={isInputValid.title}
            error={errors.title}
        />
        <Input
            name="link"
            type="url"
            id="link"
            placeholder="Ссылка на картинку"
            value={values.link}
            onChange={handleChange}
            isInputValid={isInputValid.link}
            error={errors.link}
        />
    </PopupWithForm>
)
})

export default AddPlacePopup;