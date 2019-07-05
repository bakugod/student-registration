import React from "react"
import { useStore } from "effector-react"

import {
  Input,
} from "../../../ui"

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
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Welcome to Hell</h2>
        <Email />
        <Password />
      </div>
    </form>
  )
}

const Email = () => {
//   const email = useStore($email)
//   const isFormDisabled = useStore($isFormDisabled)
//   const emailError = useStore($emailError)

  return (
    <Input
      type="email"
      name="email"
      autoComplete="email"
      label="Email"
    //   disabled={isFormDisabled}
    //   onChange={emailChanged}
    //   value={email}
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
