import { useLocation } from 'react-router-dom'
import bannerHome from './../../assets/Home/BannerHome.png'
import bannerPropos from './../../assets/APropos/BannerPropos.png'

function Banner() {
  const urlLocation = useLocation()

  return (
    <div className="banner-wrap">
      <img
        src={`${urlLocation.pathname === '/' ? bannerHome : bannerPropos}`}
        alt=""
      />
      <div></div>
      {urlLocation.pathname === '/' && (
        <p>
          Chez vous, <br className="line-break" />
          partout et ailleurs
        </p>
      )}
    </div>
  )
}

export default Banner
