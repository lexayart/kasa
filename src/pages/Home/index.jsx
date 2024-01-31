import annonces from './../../data/annonces.json'
import Card from '../../components/Card'
import Banner from '../../components/Banner'

function Home(title, cover) {
  return (
    <div className="App">
      <Banner />
      <div className="cards-wrapper">
        {annonces.map(({ id, title, cover }) => (
          <Card title={title} cover={cover} id={id} key={id} />
        ))}
      </div>
    </div>
  )
}

export default Home
