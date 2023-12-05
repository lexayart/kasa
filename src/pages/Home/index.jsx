import annonces from './../../data/annonces.json'
import Card from '../../components/Card'
import Banner from '../../components/Banner'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CardsWrapper = styled.div`
  height: auto;
  border-radius: 25px;
  display: flex;
  flex-wrap: wrap;
  background-color: #f6f6f6;
  padding: 56px 50px 43px 50px;
  margin: 43px 100px 50px 100px;
  justify-content: space-between;
`

function Home(title, cover) {
  return (
    <div className="App">
      <Banner />
      <CardsWrapper>
        {annonces.map(({ id, title, cover }) => (
          <Link to="/FicheLogement">
            <Card key={id} title={title} cover={cover} />
          </Link>
        ))}
      </CardsWrapper>
    </div>
  )
}

export default Home
