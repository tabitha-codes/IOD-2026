import { useSearchParams } from 'react-router-dom'
import { useData } from '../hooks/useData'
import ApartmentCard from '../components/ApartmentCard'

function ApartmentsPage() {
  const { loading, data, error } = useData('/api/apartments')

  // the search lives in the URL (?search=dallas) so it works from the Home page too
  const [searchParams, setSearchParams] = useSearchParams()
  const search = searchParams.get('search') || ''

  const handleSearch = (e) => {
    setSearchParams(e.target.value ? { search: e.target.value } : {}, { replace: true })
  }

  // filter by name, neighborhood or city
  const apartments = (data || []).filter((apt) => {
    const text = search.toLowerCase()
    return (
      apt.name.toLowerCase().includes(text) ||
      apt.neighborhood.toLowerCase().includes(text) ||
      apt.city.toLowerCase().includes(text)
    )
  })

  return (
    <section className="page">
      <h1>Apartments</h1>

      <input
        type="text"
        className="filter-input"
        placeholder="City, neighborhood or apartment name"
        aria-label="Search apartments"
        value={search}
        onChange={handleSearch}
      />

      {loading && <p>Loading apartments...</p>}
      {error && <p className="error">Couldn't load apartments. Is the server running? ({error})</p>}

      {!loading && !error && apartments.length === 0 && (
        <p>No apartments match "{search}".</p>
      )}

      <div className="apartment-grid">
        {apartments.map((apt) => (
          <ApartmentCard key={apt._id} apartment={apt} />
        ))}
      </div>
    </section>
  )
}

export default ApartmentsPage
