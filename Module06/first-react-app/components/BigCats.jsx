import SingleCat from './SingleCat'

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
  return (
    <div className="big-cats">
      <h2>Big Cats</h2>
      <ul className="cat-list">
        {cats.map((cat) => (
          <SingleCat key={cat.id} cat={cat} />
        ))}
      </ul>
    </div>
  )
}

export default BigCats