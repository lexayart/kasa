import Banner from '../../components/Banner'
import values from './../../data/values.json'
import styled from 'styled-components'
import colors from '../../utils/assets/color'
import arrow from './../../assets/ArrowVector.svg'

const ValuesWrapper = styled.div`
  margin: 38px 208px 8px 208px;

  h2 {
    font-weight: 500;
    margin: 0;
  }
  p {
    color: ${colors.primary};
    margin: 0;
    padding: 20px;
    font-size: 18px;
    font-weight: 400;
  }
`
const TitleWrapper = styled.div`
  padding: 10px 20px 10px 15px;
  color: white;
  background-color: ${colors.primary};
  margin: 0;
  paddin: 10px 15px 10px 15px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
`

const ValueItem = styled.div`
  margin-bottom: 30px;
  background-color: ${colors.secondary};
  border-radius: 5px;
`

function APropos() {
  return (
    <div>
      <Banner />
      <ValuesWrapper>
        {values.map(({ key, title, caption }) => (
          <ValueItem key={key}>
            <TitleWrapper>
              <h2>{title}</h2>
              <img src={arrow} alt="flèche" />
            </TitleWrapper>
            <p>{caption}</p>
          </ValueItem>
        ))}
      </ValuesWrapper>
    </div>
  )
}

export default APropos
