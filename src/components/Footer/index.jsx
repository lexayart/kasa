import logoBlanc from './../../assets/LOGO-white.svg'
import styled from 'styled-components'

const FooterWrap = styled.div`
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 209px;
  margin-top: auto;
  font-size: 24px;
  img {
    height: 40px;
    width: auto;
    margin-top: 66px;
    margin-bottom: auto;
  }
  p {
    margin-bottom: 29px;
  }
`

function Footer() {
  return (
    <FooterWrap>
      <img src={logoBlanc} alt="Logo de Kasa en blanc" />
      <p>© 2020 Kasa. All rights reserved</p>
    </FooterWrap>
  )
}

export default Footer
