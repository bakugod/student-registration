import React from "react"
import * as jsPDF from 'jspdf'
import { createStore, createEvent } from 'effector'
import { useStore } from "effector-react"

import {
  Input,
} from "../../../ui"


const $email = createStore('hello@ww.ru')

const emailChanged = createEvent()

const trimEvent = (event) => event.target.value.trim()

$email.on(emailChanged.map(trimEvent), (_, email) => email)


// import {
//   formSubmitted,
//   loginFetching,
//   emailChanged,
//   passwordChanged,
// } from "../model/login.events"
// import {
//   $isFormDisabled,
//   $isSubmitEnabled,
//   $email,
//   $emailError,
//   $password,
//   $passwordError,
// } from "../model/login.store"

export const FirstScope = () => (
    <div>
        <SomeForm />
    </div>
)

const handleSubmit = (event) => {
  event.preventDefault()
  //formSubmitted()
}

const SomeForm = () => {
  //const formError = useStore(loginFetching.error)
  //const isSubmitEnabled = useStore($isSubmitEnabled)

  return (
    <form onSubmit={sub}>
      <div>
        <h2>Welcome to Hell</h2>
        <Email />
        {/* <Password /> */}
        <button type="submit">отправить</button>
      </div>
    </form>
  )
}

const sub = () =>{
  
  const doc = new jsPDF()

  doc.text($email.getState(), 100, 210)
  doc.save('a4.pdf')
}



const Email = () => {
   const email = useStore($email)
//   const isFormDisabled = useStore($isFormDisabled)
//   const emailError = useStore($emailError)
console.log($email.getState())

  return (
    <Input
      type="email"
      name="email"
      autoComplete="email"
      label="Email"
    //   disabled={isFormDisabled}
       onChange={emailChanged}
       value={email}
    //   error={email && emailError}
    />
  )
}

const Password = () => {
//   const password = useStore($password)
//   const isFormDisabled = useStore($isFormDisabled)
//   const passwordError = useStore($passwordError)

  return (
    <Input
      type="password"
      name="password"
      autoComplete="password"
      label="Password"
    //   disabled={isFormDisabled}
    //   onChange={passwordChanged}
    //   value={password}
    //   error={password && passwordError}
    />
  )
}
