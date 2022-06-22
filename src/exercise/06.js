// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  const usernameInputRef = React.useRef()
  // const [error, setError] = React.useState(null)
  const [myInputValue, setMyInputValue] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    // const value = event.target[0].value // not the best option to target by the position
    // const userNameValue = event.target.elements.usernameInput.value
    const userNameValueByRef = usernameInputRef.current.value
    onSubmitUsername(userNameValueByRef)
  }

  // function handleChange() {
  //   const userInputValue = usernameInputRef.current.value
  //   const isLowerCase = userInputValue === userInputValue.toLowerCase()
  //   setError(isLowerCase ? null : 'Username must be lower case')
  // }
  function handleChange() {
    const userInputValue = usernameInputRef.current.value
    setMyInputValue(userInputValue.toLowerCase())
  }
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          type="text"
          id="usernameInput"
          ref={usernameInputRef}
          onChange={handleChange}
          value={myInputValue}
        />
      </div>
      {/* <div style={{color: 'red'}}>{error}</div> */}
      <button type="submit" /*disabled={Boolean(error)} */>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
