import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import BitcoinRatesPage from '../pages/BitcoinRatesPage'
import PageNotFound from '../pages/PageNotFound'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/bitcoin" element={<BitcoinRatesPage />} />
      {/* catches any URL that doesn't match above */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default AppRoutes