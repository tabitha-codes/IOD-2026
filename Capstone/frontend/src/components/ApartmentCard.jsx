import { Link } from 'react-router-dom'

function ApartmentCard({ apartment }) {
  return (
    <Link to={`/apartments/${apartment._id}`} className="card apartment-card">
      <h3>{apartment.name}</h3>
      <p className="muted">{apartment.neighborhood}, {apartment.city}, {apartment.state}</p>
      <p className="price">${apartment.price.toLocaleString()}/mo</p>
      <p>{apartment.beds} bed / {apartment.baths} bath</p>
      <p className="review-count">
        {apartment.review_count} {apartment.review_count === 1 ? 'review' : 'reviews'}
      </p>
    </Link>
  )
}

export default ApartmentCard
