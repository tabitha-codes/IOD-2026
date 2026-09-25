// ==============Exercise 05==============
import { useState } from 'react'
import SingleCat from './SingleCat'
import AddCatForm from './AddCatForm'

const cats = [
  { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: '/images/cheetah.jpg' },
  { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: '/images/cougar.jpg' },
  { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: '/images/jaguar.jpg' },
  { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: '/images/leopard.jpg' },
  { id: 5, name: 'Lion', latinName: 'Panthera leo', image: '/images/lion.jpg' },
  { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: '/images/snow-leopard.jpg' },
  { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: '/images/tiger.jpg' },
]

function BigCats() {
  const [currentCats, setCurrentCats] = useState(cats)

  const handleSortCats = () => {
    let newCats = [...currentCats] // clone first - state stays read-only
    newCats.sort((a, b) => a.name.localeCompare(b.name))
    setCurrentCats(newCats)
  }

  const handleReverseCats = () => {
    let newCats = [...currentCats]
    newCats.reverse()
    setCurrentCats(newCats)
  }

  const handleFilterPanthera = () => {
    let newCats = currentCats.filter(cat => cat.latinName.startsWith('Panthera'))
    setCurrentCats(newCats)
  }

  const handleResetCats = () => {
    setCurrentCats(cats)
  }

  const handleAddCat = (newCat) => {
    newCat.id = currentCats.length + 1 // unreliable but succinct
    setCurrentCats([...currentCats, newCat])
  }

  const handleDeleteCat = (idToDelete) => {
    let newCats = currentCats.filter(cat => cat.id !== idToDelete)
    setCurrentCats(newCats)
  }

  const catItems = currentCats.map(cat => (
    <SingleCat key={cat.id} {...cat} onDelete={handleDeleteCat} />
  ))

  return (
    <div className="BigCats componentBox">
      <h2>Big Cats</h2>
      <button onClick={handleSortCats}>Sort A-Z</button>
      <button onClick={handleReverseCats}>Reverse</button>
      <button onClick={handleFilterPanthera}>Panthera Only</button>
      <button onClick={handleResetCats}>Reset</button>
      <ul>{catItems}</ul>
      <AddCatForm onAddCat={handleAddCat} />
    </div>
  )
}

export default BigCats

// ==============Exercise 04==============
// import { useState } from 'react'
// import SingleCat from './SingleCat'

// const originalCats = [
//   { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: '/images/cheetah.jpg' },
//   { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: '/images/cougar.jpg' },
//   { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: '/images/jaguar.jpg' },
//   { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: '/images/leopard.jpg' },
//   { id: 5, name: 'Lion', latinName: 'Panthera leo', image: '/images/lion.jpg' },
//   { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: '/images/snow-leopard.jpg' },
//   { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: '/images/tiger.jpg' },
// ]

// function BigCats() {
//   const [cats, setCats] = useState(originalCats)

//   const sortAlphabetically = () => {
//     const sorted = [...cats].sort((a, b) => a.name.localeCompare(b.name))
//     setCats(sorted)
//   }

//   const reverseList = () => {
//     setCats([...cats].reverse())
//   }

//   const filterPanthera = () => {
//     setCats(originalCats.filter((cat) => cat.latinName.startsWith('Panthera')))
//   }

//   const resetList = () => {
//     setCats(originalCats)
//   }

//   return (
//     <div className="big-cats">
//       <h2>Big Cats</h2>
//       <div className="controls">
//         <button type="button" onClick={sortAlphabetically}>Sort A-Z</button>
//         <button type="button" onClick={reverseList}>Reverse</button>
//         <button type="button" onClick={filterPanthera}>Panthera only</button>
//         <button type="button" onClick={resetList}>Reset</button>
//       </div>
//       <ul className="cat-list">
//         {cats.map((cat) => (
//           <SingleCat key={cat.id} cat={cat} />
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default BigCats



// ==============Exercise 02==============

// import SingleCat from './SingleCat'

// const cats = [
//   { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: '/images/cheetah.jpg' },
//   { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: '/images/cougar.jpg' },
//   { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: '/images/jaguar.jpg' },
//   { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: '/images/leopard.jpg' },
//   { id: 5, name: 'Lion', latinName: 'Panthera leo', image: '/images/lion.jpg' },
//   { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: '/images/snow-leopard.jpg' },
//   { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: '/images/tiger.jpg' },
// ]

// function BigCats() {
//   return (
//     <div className="big-cats">
//       <h2>Big Cats</h2>
//       <ul className="cat-list">
//         {cats.map((cat) => (
//           <SingleCat key={cat.id} cat={cat} />
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default BigCats