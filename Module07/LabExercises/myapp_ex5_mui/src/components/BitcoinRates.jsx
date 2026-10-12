import { useState } from 'react'
import { Box, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { useData } from '../hooks/useData'
import { useMoodContext } from '../context/MoodContext'

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD']

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0])
  const { emoji, moodLabel } = useMoodContext()

  const { data, loading, error } = useData(
    `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
  )
  const price = data?.bitcoin?.[currency.toLowerCase()]

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Bitcoin Exchange Rate <span role="img" aria-label={moodLabel}>{emoji}</span>
      </Typography>

      <FormControl sx={{ minWidth: 160, my: 2 }}>
        <InputLabel id="currency-label">Currency</InputLabel>
        <Select
          labelId="currency-label"   // connects the label to the dropdown for screen readers
          label="Currency"
          value={currency}
          onChange={e => setCurrency(e.target.value)}
        >
          {currencies.map(curr => (
            <MenuItem key={curr} value={curr}>{curr}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <Typography>
        {loading ? 'Loading...'
          : error ? `Error: ${error}`
          : price !== undefined
            ? `1 BTC = ${price.toLocaleString(undefined, { style: 'currency', currency })}`
            : 'Price not available'}
      </Typography>
    </Box>
  )
}

export default BitcoinRates