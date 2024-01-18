import Banner from '../../components/Banner'
import values from './../../data/values.json'
import Collapse from '../../components/Collapse'

function APropos() {
  return (
    <div>
      <Banner />
      <div className="values">
        {values.map(({ id, title, caption }) => (
          <Collapse
            title={title}
            caption={<p>{caption}</p>}
            itemClassname="values_collapse_element"
            key={id}
          />
        ))}
      </div>
    </div>
  )
}

export default APropos
