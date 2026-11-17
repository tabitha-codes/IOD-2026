import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HomePage() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  // sends the search over to the Apartments page
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/apartments?search=${encodeURIComponent(search)}`)
  }

  return (
    <>
      <section className="hero">
        <h1>Read reviews from real renters before you sign a lease.</h1>
        <p>
          Lease Lens is a place for renters to help each other. Read what people saw on their tours,
          how the leasing agent treated them, and what it's like to actually live there.
        </p>

        <form className="search-form" role="search" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="City, neighborhood or apartment name"
            aria-label="Search apartments"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="btn">Search</button>
        </form>
      </section>

      <section className="how-it-works">
        <h2>What you can do here</h2>
        <div className="steps">
          <div className="card">
            <h3>Share your tour</h3>
            <p>Toured a place? Post the pros, the cons and a photo of what you saw.</p>
          </div>
          <div className="card">
            <h3>Rate the leasing agent</h3>
            <p>Were they helpful or did they rush you? Let other renters know.</p>
          </div>
          <div className="card">
            <h3>Hear from residents</h3>
            <p>People who already live there can share what it's like after move-in.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
