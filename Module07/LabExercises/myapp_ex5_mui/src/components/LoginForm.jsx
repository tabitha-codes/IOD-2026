import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, TextField, Button, Alert, Typography } from '@mui/material'
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
      setUserPassword('')
      navigate('/')
    }
  }

  if (currentUser.email) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
        <Typography>Logged in as {currentUser.email}</Typography>
        <Button variant="outlined" onClick={() => handleUpdateUser({})}>
          Log Out
        </Button>
      </Box>
    )
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2, maxWidth: 400 }}
    >
      <TextField
        label="Email" type="email" required autoComplete="email"
        value={userEmail} onChange={e => setUserEmail(e.target.value)}
      />
      <TextField
        label="Password" type="password" required autoComplete="current-password"
        value={userPassword} onChange={e => setUserPassword(e.target.value)}
      />
      <Button type="submit" variant="contained">Log In</Button>
      {submitResult && <Alert severity="error">{submitResult}</Alert>}
    </Box>
  )
}

export default LoginForm