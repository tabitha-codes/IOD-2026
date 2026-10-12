import { Box, Button, Typography } from '@mui/material'
import { useMoodContext } from '../context/MoodContext'

function Emoji() {
  const { emoji, moodLabel, toggleMood } = useMoodContext()

  return (
    <Box sx={{ mt: 2 }}>
      <Typography sx={{ fontSize: '3rem' }}>
        <span role="img" aria-label={moodLabel}>{emoji}</span>
      </Typography>
      <Button variant="contained" onClick={toggleMood}>Change Mood</Button>
    </Box>
  )
}

export default Emoji