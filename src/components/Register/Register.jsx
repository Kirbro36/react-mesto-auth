import useFormValidation from "../../utils/useFormValidation";
import AuthPage from "../AuthPage/AuthPage";
import Input from "../Input/Input";
import React from "react";

export default function Register({ name, handleRegister }) {
  const { values, errors, isValid, isInputValid, handleChange } = useFormValidation()

  function onRegister(evt) {
    evt.preventDefault()
    handleRegister(values.password, values.email)
  }

  return (
    <div className="register">
      <AuthPage name={name} onSubmit={onRegister} isValid={isValid}>

        <Input
          name='email'
          type='email'
          placeholder={'Email'}
          value={values.email}
          onChange={handleChange}
          isInputValid={isInputValid.email}
          error={errors.email}
        />

        <Input
          name='password'
          type='password'
          placeholder={'Пароль'}
          minLength={3}
          value={values.password}
          onChange={handleChange}
          isInputValid={isInputValid.password}
          error={errors.password}
        />
      </AuthPage>

    </div>
  )
}