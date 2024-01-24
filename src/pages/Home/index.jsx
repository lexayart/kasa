import annonces from './../../data/annonces.json'
import Card from '../../components/Card'
import Banner from '../../components/Banner'
import { Link } from 'react-router-dom'

function Home(title, cover) {
  return (
    <div className="App">
      <Banner />
      <div className="cards-wrapper">
        {annonces.map(({ id, title, cover }) => (
          <Link className="card" to={`/FicheLogement/${id}`} key={id}>
            <Card title={title} cover={cover} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
