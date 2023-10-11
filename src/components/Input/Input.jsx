import { useContext } from 'react'
import SendContext from '../../contexts/SendContext'

export default function Input({ name, type, placeholder, minLength, maxLength, isInputValid, value, onChange, error }) {
    const isSend = useContext(SendContext)

    return (
        <>
            {name === 'password' || name === 'email' ?
                <>
                    <input
                        name={name}
                        type={type}
                        placeholder={placeholder}
                        minLength={minLength ? minLength : ''}
                        maxLength={maxLength ? maxLength : ''}
                        required
                        className={`login__input ${isInputValid === undefined || isInputValid ? '' : 'login__input_invalid'}`}
                        value={value ? value : ''}
                        onChange={onChange}
                        disabled={isSend}
                    />
                    <span className={'login__error'}>{error}</span>
                </>
                :
                <>
                    <input
                        name={name}
                        type={type}
                        placeholder={placeholder}
                        minLength={minLength ? minLength : ''}
                        maxLength={maxLength ? maxLength : ''}
                        required
                        className={`form__box ${isInputValid === undefined || isInputValid ? '' : 'form__box_invalid'}`}
                        value={value ? value : ''}
                        onChange={onChange}
                        disabled={isSend}
                    />
                    <span className={'form__error'}>{error}</span>
                </>

            }

        </>
    )
}