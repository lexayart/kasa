import arrow from './../../assets/ArrowVectorAngular.svg'
import { useState, useEffect } from 'react'

function Slideshow(imgLogement) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lateralSlideshow = document.querySelector(
      '.slideshow_gallery_content',
    )
    lateralSlideshow.style.transform = `translateX(${index}00%)`
  }, [index])

  function nextImage() {
    if (index === imgLogement.imgLogement.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }
  function previousImage() {
    if (index === 0) {
      setIndex(imgLogement.imgLogement.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  return (
    <div className="slideshow">
      <img
        src={arrow}
        className="slideshow_arrow slideshow_arrow_left"
        alt="flèche précédent"
        onClick={previousImage}
        role="button"
      />
      <div className="slideshow_gallery">
        <div className="slideshow_gallery_content">
          {imgLogement.imgLogement.map((photo) => (
            <img
              src={photo}
              alt={`différentes vues de l'appartement` + photo.id}
              key={photo}
              className="slideshow_gallery_content_img"
            />
          ))}
        </div>
      </div>
      <img
        src={arrow}
        className="slideshow_arrow slideshow_arrow_right"
        alt="flèche suivant"
        onClick={nextImage}
        role="button"
      />
      <p className="slideshow_numbering">
        {index + 1}/{imgLogement.imgLogement.length}
      </p>
    </div>
  )
}

export default Slideshow
