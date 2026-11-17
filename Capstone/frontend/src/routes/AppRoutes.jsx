import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ApartmentsPage from '../pages/ApartmentsPage'
import ApartmentDetailsPage from '../pages/ApartmentDetailsPage'
import ReviewFormPage from '../pages/ReviewFormPage'
import PageNotFound from '../pages/PageNotFound'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/apartments" element={<ApartmentsPage />} />
      <Route path="/apartments/:id" element={<ApartmentDetailsPage />} />
      {/* same form page for add and edit. the keys make React start fresh when I switch between them */}
      <Route path="/write-review" element={<ReviewFormPage key="new" />} />
      <Route path="/reviews/:id/edit" element={<ReviewFormPage key="edit" />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default AppRoutes
