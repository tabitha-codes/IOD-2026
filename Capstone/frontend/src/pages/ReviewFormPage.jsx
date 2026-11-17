import { useState, useEffect } from 'react'
import { useParams, useNavigate, useSearchParams } from 'react-router-dom'
import { useData } from '../hooks/useData'

// starting values for a new review
const emptyForm = {
  apartment_id: '',
  name: '',
  review_type: 'tour',
  rating: '5',
  pros: '',
  cons: '',
  agent_name: '',
  agent_notes: '',
  photo_url: '',
}

// This page does two things:
// /write-review = add a new review
// /reviews/:id/edit = edit a review that's already there
function ReviewFormPage() {
  const { id } = useParams()
  const isEditing = Boolean(id)
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const [form, setForm] = useState({ ...emptyForm, apartment_id: searchParams.get('apartment') || '' })
  const [message, setMessage] = useState('')

  // apartments for the dropdown
  const { data: apartments } = useData('/api/apartments')

  // EDIT MODE: load the review and fill in the form
  useEffect(() => {
    if (!isEditing) return

    fetch(`/api/reviews/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error('Could not find that review')
        return response.json()
      })
      .then((review) => {
        setForm({
          apartment_id: review.apartment_id,
          name: review.name,
          review_type: review.review_type,
          rating: String(review.rating),
          pros: review.pros || '',
          cons: review.cons || '',
          agent_name: review.agent_name || '',
          agent_notes: review.agent_notes || '',
          photo_url: review.photo_url || '',
        })
      })
      .catch((err) => setMessage(err.message))
  }, [id, isEditing])

  // one change handler for every input, using the input's name
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // SAVE (POST for new, PUT for edit)
  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage('')

    const url = isEditing ? `/api/reviews/${id}` : '/api/reviews'
    const method = isEditing ? 'PUT' : 'POST'

    fetch(url, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, rating: Number(form.rating) }),
    })
      .then(async (response) => {
        // if the server is down there's no JSON, so fall back to an empty object
        const data = await response.json().catch(() => ({}))
        if (!response.ok) throw new Error(data.error || 'Something went wrong. Is the server running?')
        // go see the review on the apartment page
        navigate(`/apartments/${data.apartment_id}`)
      })
      .catch((err) => setMessage(err.message))
  }

  return (
    <section className="page form-page">
      <h1>{isEditing ? 'Edit Your Review' : 'Write a Review'}</h1>
      <p className="muted">Fields with a * are required.</p>

      <form className="review-form" onSubmit={handleSubmit}>
        <label>
          Apartment *
          <select name="apartment_id" value={form.apartment_id} onChange={handleChange} required disabled={isEditing}>
            <option value="">Pick an apartment</option>
            {(apartments || []).map((apt) => (
              <option key={apt._id} value={apt._id}>{apt.name} ({apt.city})</option>
            ))}
          </select>
        </label>

        <label>
          Your name *
          <input type="text" name="name" value={form.name} onChange={handleChange} maxLength="50" required />
        </label>

        <fieldset>
          <legend>I have... *</legend>
          <label className="radio">
            <input type="radio" name="review_type" value="tour"
              checked={form.review_type === 'tour'} onChange={handleChange} />
            toured this place
          </label>
          <label className="radio">
            <input type="radio" name="review_type" value="resident"
              checked={form.review_type === 'resident'} onChange={handleChange} />
            lived here
          </label>
        </fieldset>

        <label>
          Rating *
          <select name="rating" value={form.rating} onChange={handleChange} required>
            <option value="5">5 - Loved it</option>
            <option value="4">4 - Pretty good</option>
            <option value="3">3 - It's okay</option>
            <option value="2">2 - Not great</option>
            <option value="1">1 - Stay away</option>
          </select>
        </label>

        <label>
          Pros
          <textarea name="pros" rows="3" value={form.pros} onChange={handleChange} maxLength="1000" />
        </label>

        <label>
          Cons
          <textarea name="cons" rows="3" value={form.cons} onChange={handleChange} maxLength="1000" />
        </label>

        <label>
          Leasing agent's name
          <input type="text" name="agent_name" value={form.agent_name} onChange={handleChange} maxLength="50" />
        </label>

        <label>
          How was the leasing agent?
          <textarea name="agent_notes" rows="3" value={form.agent_notes} onChange={handleChange} maxLength="1000" />
        </label>

        <label>
          Tour photo link
          <input type="url" name="photo_url" value={form.photo_url} onChange={handleChange}
            placeholder="https://..." />
        </label>

        {message && <p className="error" role="alert">{message}</p>}

        <div className="form-buttons">
          <button type="submit" className="btn">{isEditing ? 'Save Changes' : 'Post Review'}</button>
          <button type="button" className="btn btn-plain" onClick={() => navigate(-1)}>Cancel</button>
        </div>
      </form>
    </section>
  )
}

export default ReviewFormPage
