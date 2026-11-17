import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReviewCard from '../components/ReviewCard'
import Stars from '../components/Stars'

function ApartmentDetailsPage() {
  const { id } = useParams()
  const [apartment, setApartment] = useState(null)
  const [reviews, setReviews] = useState([])
  const [error, setError] = useState('')

  // GET THE APARTMENT AND ITS REVIEWS
  useEffect(() => {
    fetch(`/api/apartments/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error(`Request failed (${response.status})`)
        return response.json()
      })
      .then((data) => {
        setApartment(data)
        setReviews(data.reviews)
      })
      .catch((err) => setError(err.message))
  }, [id])

  // DELETE A REVIEW
  const handleDelete = (reviewId) => {
    if (!window.confirm('Delete this review?')) return

    fetch(`/api/reviews/${reviewId}`, { method: 'DELETE' })
      .then((response) => {
        if (!response.ok) throw new Error('Could not delete the review')
        // take it off the page without reloading
        setReviews(reviews.filter((review) => review._id !== reviewId))
      })
      .catch((err) => setError(err.message))
  }

  if (error && !apartment) {
    return (
      <section className="page">
        <p className="error">Couldn't load this apartment. ({error})</p>
        <Link to="/apartments">Back to apartments</Link>
      </section>
    )
  }

  if (!apartment) return <section className="page"><p>Loading...</p></section>

  // average of all the ratings
  const total = reviews.reduce((sum, review) => sum + review.rating, 0)
  const average = reviews.length ? total / reviews.length : 0

  return (
    <section className="page">
      <Link to="/apartments">&larr; Back to apartments</Link>

      <div className="details-header">
        <div>
          <h1>{apartment.name}</h1>
          <p className="muted">{apartment.neighborhood}, {apartment.city}, {apartment.state}</p>
          <p>
            <span className="price">${apartment.price.toLocaleString()}/mo</span> &nbsp;|&nbsp;
            {apartment.beds} bed / {apartment.baths} bath
          </p>
          {apartment.description && <p>{apartment.description}</p>}
        </div>
        <div className="rating-box">
          {reviews.length > 0 ? (
            <>
              <p className="big-number">{average.toFixed(1)}</p>
              <Stars rating={average} />
              <p className="muted">{reviews.length} {reviews.length === 1 ? 'review' : 'reviews'}</p>
            </>
          ) : (
            <p className="muted">No reviews yet</p>
          )}
        </div>
      </div>

      <div className="reviews-heading">
        <h2>Reviews</h2>
        <Link to={`/write-review?apartment=${apartment._id}`} className="btn">Write a Review</Link>
      </div>

      {error && <p className="error">{error}</p>}
      {reviews.length === 0 && <p>Be the first to review this place.</p>}

      {reviews.map((review) => (
        <ReviewCard key={review._id} review={review} onDelete={handleDelete} />
      ))}
    </section>
  )
}

export default ApartmentDetailsPage
