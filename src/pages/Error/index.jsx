import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/assets/color'

const ErrorWrapper = styled.div`
  color: ${colors.primary};
  text-align: center;
  margin: 139px 0 139px 0;
  h2 {
    font-size: 288px;
    font-weight: 700;
    margin: 0 0 0 0;
  }
  p {
    margin: 139px 0 139px 0;
    font-size: 36px;
  }
`
const ErrorLink = styled(Link)`
  color: ${colors.primary};
  font-size: 18px;
`

function Error() {
  return (
    <ErrorWrapper>
      <h2>404</h2>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <ErrorLink to="/">Retourner sur la page d'accueil</ErrorLink>
    </ErrorWrapper>
  )
}

export default Error
