import styled from 'styled-components'

const CardItem = styled.div`
  width: 340px;
  height: 340px;
  position: relative;
  margin-bottom: 50px;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-radius: 10px;
  }
`
const TitleWrap = styled.div`
  height: 340px;
  width: 340px;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px;
  box-shadow: inset 0px -120px 60px -50px rgba(0, 0, 0, 0.5);
  h3 {
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 20px;
    font-weight: 500;
    color: white;
    font-size: 18px;
  }
`

function Card({ title, cover }) {
  return (
    <CardItem>
      <img src={cover} alt="logement" />
      <TitleWrap>
        <h3>{title}</h3>
      </TitleWrap>
    </CardItem>
  )
}

export default Card
