import bannerBackground from './../../assets/Home/Banner1.png'
import styled from 'styled-components'

const BannerWrap = styled.div`
  margin: 50px 100px 0 100px;
  height: 223px;
  position: relative;
  object-fit: cover;
  background: url(${bannerBackground}) no-repeat scroll center;
  background-size: cover;
  border-radius: 25px;

  img {
    width: 100%;
    height: auto;
  }
  div {
    position: absolute;
    background-color: black;
    opacity: 30%;
    width: 100%;
    height: 100%;
    top: 0;
    border-radius: 25px;
  }
  p {
    color: white;
    width: 100%;
    text-align: center;
    position: absolute;
    margin: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 48px;
  }
`

function Banner() {
  return (
    <BannerWrap>
      <div></div>
      <p>Chez vous, partout et ailleurs</p>
    </BannerWrap>
  )
}

export default Banner
