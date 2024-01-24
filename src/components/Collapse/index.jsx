import { useEffect, useState } from 'react'
import arrow from './../../assets/ArrowVector.svg'

function Collapse({ title, caption, titleClassname, itemClassname }) {
  const [isOpen, setIsOpen] = useState(false)
  const [index, setIndex] = useState(1)
  useEffect(() => {}, [index])

  function handleClick(e) {
    setIsOpen(!isOpen)
    setIndex(index + 1)
    e.target.style.transform = `rotate(${index * 180}deg)`
  }
  return (
    <div className={`collapse ${isOpen ? 'open' : 'close'} ${itemClassname}`}>
      <div className="collapse_title">
        <h3>{title}</h3>
        <img
          className="arrow"
          id="arrow"
          src={arrow}
          alt="flèche"
          onClick={handleClick}
          role="button"
        />
      </div>
      <div className="collapse_background">{caption}</div>
    </div>
  )
}

export default Collapse
