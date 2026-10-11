import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../context/UserContext'

function LoginForm() {
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [submitResult, setSubmitResult] = useState('')
  const { currentUser, handleUpdateUser } = useUserContext()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (userPassword.length < 5) {
      setSubmitResult('Password must be at least 5 characters long')
    } else if (userPassword === userEmail) {
      setSubmitResult('Password must not match email address')
    } else {
      handleUpdateUser({ email: userEmail })
      setUserPassword('')   // don't keep the password in memory
      navigate('/')         // send the user home after logging in
    }
  }

  // already logged in: show a welcome message instead of the form
  if (currentUser.email) {
    return (
      <div className="componentBox">
        <p>Logged in as {currentUser.email}</p>
        <button type="button" onClick={() => handleUpdateUser({})}>Log Out</button>
      </div>
    )
  }

  return (
    <form className="componentBox" onSubmit={handleSubmit}>
      <label>
        Email
        <input type="email" value={userEmail} required
          onChange={e => setUserEmail(e.target.value)} />
      </label>
      <label>
        Password
        <input type="password" value={userPassword} required
          onChange={e => setUserPassword(e.target.value)} />
      </label>
      <button type="submit">Log In</button>
      <p role="status">{submitResult}</p>
    </form>
  )
}

export default LoginForm