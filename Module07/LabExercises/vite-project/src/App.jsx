import { MoodProvider } from './context/MoodContext'
import Emoji from './components/Emoji'
import BitcoinRates from './components/BitcoinRates'
import './App.css'

function App() {
  return (
    <MoodProvider>
      <Emoji />
      <BitcoinRates />
    </MoodProvider>
  )
}

export default App