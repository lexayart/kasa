import Rating from '../../components/Rating'
import Slideshow from '../../components/Slideshow'
import annonces from './../../data/annonces.json'
import { useParams } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Error from './../Error'

function FicheLogement() {
  const idLogement = useParams()
  try {
    const infosLogement = annonces.find(
      (element) => element.id === idLogement.idLogement,
    )
    const ratingNote = infosLogement.rating
    return (
      <div className="logement">
        <Slideshow imgLogement={infosLogement.pictures} />
        <div className="logement_infos">
          <div className="logement_infos_primary">
            <div className="logement_infos_primary_title">
              <div>
                <h2>{infosLogement.title}</h2>
                <p>{infosLogement.location}</p>
              </div>
            </div>
            <ul className="logement_infos_primary_tags">
              {infosLogement.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
          <div className="logement_infos_secondary">
            <div className="logement_infos_secondary_user">
              <p>{infosLogement.host.name}</p>
              <div className="logement_infos_secondary_user_picture">
                <img src={infosLogement.host.picture} alt="Profil de l'hôte" />
              </div>
            </div>
            <Rating ratingNote={ratingNote} />
          </div>
        </div>
        <div>
          <div className="logement_collapse">
            <Collapse
              title="Description"
              caption={<p>{infosLogement.description}</p>}
              itemClassname="logement_collapse_element"
            />
            <Collapse
              title="Équipements"
              caption={
                <ul>
                  {infosLogement.equipments.map((equipment) => (
                    <li key={equipment}>{equipment}</li>
                  ))}
                </ul>
              }
              itemClassname="logement_collapse_element"
            />
          </div>
        </div>
      </div>
    )
  } catch (error) {
    return <Error />
  }
}

export default FicheLogement
