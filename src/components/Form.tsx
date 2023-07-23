import React, { useState } from 'react'
import styles from '../scss/blocks/form.module.scss'
import { useDispatch } from 'react-redux'
import { addUser } from '../redux/slices/userSlice'

const Form = () => {
  const dispatch = useDispatch()

  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
  }

  const [state, setState] = useState(initialState)

  const [firstNameIsValid, setFirstNameIsValid] = useState(true)
  const [lastNameIsValid, setLastNameIsValid] = useState(true)
  const [emailIsValid, setEmailIsValid] = useState(true)
  const [formIsValid, setFormIsValid] = useState(false)
  const [result, setResult] = useState('')

  const { firstName, lastName, email } = state

  const onChangeField = (e:any) => {
    setState({ ...state, [e.target.name]: e.target.value })
    validateFields(e)
    setFormIsValid(firstNameIsValid && lastNameIsValid && emailIsValid)
  }

  const addUserHandler = (e:any) => {
    e.preventDefault()
    dispatch(addUser(state))
    setResult('Сохранено')
    setTimeout(() => {
      setState(initialState)
      setResult('')
    }, 1000)
  }

  const validateFields = (e:React.ChangeEvent<HTMLInputElement>) => {
    const regExp = new RegExp(/^[A-ZА-ЯЁ]+$/i)
    const regExpEmail = new RegExp(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{1,6}$/)
    console.log(e.target.name)
    switch(e.target.name) { 
      case 'firstName': 
        setFirstNameIsValid(firstName.length > 1 && regExp.test(firstName))
        break
      case 'lastName':
        setLastNameIsValid(lastName.length > 1 && regExp.test(lastName))
        break
      case 'email':
        setEmailIsValid(email.length > 5 && regExpEmail.test(email))
        break
    }
  }

  return (
    <form action="#" className={styles.form}>
        <h2 className={styles.form_title}>Форма добавления пользователей</h2>
        <div className={styles.input_block}>
            <label htmlFor="" className={styles.label}>Имя</label>
            <input type="text" className={styles.input} name='firstName' value={firstName} onChange={onChangeField} onBlur={validateFields} />
            { firstNameIsValid === false && <div className={styles.error_message}>Имя должно содержать не менее 2 символов кириллицы или латиницы.</div> }
        </div>
        <div className={styles.input_block}>
            <label htmlFor="" className={styles.label}>Фамилия</label>
            <input type="text" className={styles.input} name='lastName' value={lastName} onChange={onChangeField} onBlur={validateFields} />
            { lastNameIsValid === false && <div className={styles.error_message}>Фамилия должна содержать не менее 2 символов кириллицы или латиницы.</div> }
        </div>
        <div className={styles.input_block}>
            <label htmlFor="" className={styles.label}>E-mail</label>
            <input type="email" className={styles.input} name='email' value={email} onChange={onChangeField} onBlur={validateFields} />
            { emailIsValid === false && <div className={styles.error_message}>Email должен содержать не менее 5 символов, включая "@".</div> }
        </div>
        <button className={styles.primary_button} onClick={addUserHandler}>Добавить</button>
        <div className={styles.result}>{ result }</div>
    </form>
  )
}

export default Form