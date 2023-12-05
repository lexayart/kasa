import photo from './../../assets/Home/Banner1.png'
import arrow from './../../assets/ArrowVector.svg'
import styled from 'styled-components'
import colors from '../../utils/assets/color'
import Rating from '../../components/Rating'

const FicheLogementWrapper = styled.div`
  margin: 50px 100px 50px 100px;
  color: ${colors.primary};
`
const ImgWrapper = styled.div`
  width: 100%;
  height: 415px;
  object-fit: cover;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px;
  }
`
const TitleWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  h2 {
    font-weight: 500;
    font-size: 36px;
    margin: 0;
  }
  p {
    margin: 0;
    font-weight: 500;
    font-size: 18px;
  }
`

const UserWrapper = styled.div`
  display: flex;
  align-content: center;
  p {
    font-weight: 500;
    font-size: 18px;
  }
`

const ProfilePicture = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 32px;
    object-fit: cover;
  }
`

const TagsWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;

  li {
    margin-right: 10px;
    background-color: ${colors.primary};
    color: white;
    font-size: 14px;
    font-weight: 500;
    border-radius: 10px;
    min-width: 115px;
    height: 25px;
    padding: 0 10px 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const TagsRatingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 24px 0;
  align-items: center;
`
const CollapseBothWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  .Collapse {
    width: calc(50% - 38px);
    background-color: ${colors.secondary};
    border-radius: 5px;
    p {
      font-weight: 400;
      font-size: 18px;
      margin: 0;
      padding: 25px 20px 20px 20px;
    }
  }
`

const CollapseTitleWrapper = styled.div`
  background-color: ${colors.primary};
  color: white;
  display: flex;
  justify-content: space-between;
  aligh-items: center;
  padding: 10px 24px 10px 10px;
  border-radius: 5px;
  h3 {
    margin: 0;
    font-weight: 500;
    font-size: 18px;
  }
  img {
    width: 24px;
    height: auto;
  }
`

function FicheLogement() {
  return (
    <FicheLogementWrapper>
      <ImgWrapper>
        <img src={photo} alt="Intérieur du logement" />
      </ImgWrapper>
      <TitleWrapper>
        <div>
          <h2>Cozy loft on the Canal Saint-Martin</h2>
          <p>Paris, Île-de-France</p>
        </div>
        <UserWrapper>
          <p>Alexandre Dumas</p>
          <ProfilePicture>
            <img src={photo} alt="Profil de l'hôte" />
          </ProfilePicture>
        </UserWrapper>
      </TitleWrapper>
      <div>
        <TagsRatingWrapper>
          <TagsWrapper>
            <li>Cozy</li>
            <li>Canal</li>
            <li>Paris 10</li>
          </TagsWrapper>
          <Rating />
        </TagsRatingWrapper>
        <CollapseBothWrapper>
          <div className="Collapse">
            <CollapseTitleWrapper>
              <h3>Description</h3>
              <img src={arrow} alt="flèche" />
            </CollapseTitleWrapper>
            <p>Caption</p>
          </div>
          <div className="Collapse">
            <CollapseTitleWrapper>
              <h3>Équipements</h3>
              <img src={arrow} alt="flèche" />
            </CollapseTitleWrapper>
            <p>Caption</p>
          </div>
        </CollapseBothWrapper>
      </div>
    </FicheLogementWrapper>
  )
}

export default FicheLogement
