import { Link } from 'react-router-dom'
import logo from './../../assets/LOGO.svg'
import styled from 'styled-components'
import Colors from '../../utils/assets/color'

const HeaderWrap = styled.div`
  margin: 45px 0 0 0;
  padding: 0 100px 0 100px;
  display: flex;
  height: 68px;
  align-items: center;
  justify-content: space-between;
  nav {
    font-size: 24px;
  }
`
const StyledLink = styled(Link)`
  margin-left: 57px;
  color: ${Colors.primary};
  text-decoration: none;
  ${(props) => props.$active && `text-decoration: underline;`}
`

function Header() {
  return (
    <HeaderWrap>
      <img src={logo} alt="Logo de Kasa" />
      <nav>
        <StyledLink to="/" $active>
          Accueil
        </StyledLink>
        <StyledLink to="/APropos">A Propos</StyledLink>
      </nav>
    </HeaderWrap>
  )
}

export default Header
