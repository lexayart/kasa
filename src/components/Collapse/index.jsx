import { useState } from 'react'
import arrow from './../../assets/ArrowVector.svg'

function Collapse({ title, caption, titleClassname, itemClassname }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={`${isOpen ? 'open' : 'close'} ${itemClassname}`}>
      <div className={titleClassname}>
        <h3>{title}</h3>
        <img
          id="arrow"
          src={arrow}
          alt="flèche"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <div className="background"></div>
      <p>{caption}</p>
    </div>
  )
}

export default Collapse
