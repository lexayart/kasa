import arrow from './../../assets/ArrowVectorAngular.svg'
import { useState } from 'react'

function Slideshow(imgLogement) {
  const [index, setIndex] = useState(0)

  function nextImage() {
    const lateralSlideshow = document.querySelector(
      '.slideshow_gallery_content',
    )

    if (index === imgLogement.imgLogement.length - 1) {
      setIndex(0)
      console.log(index)
    } else {
      setIndex(index + 1)
      console.log(index)
    }
    lateralSlideshow.style.transform = `translateX(-${index}00%)`
  }

  function previousImage() {
    const lateralSlideshow = document.querySelector(
      '.slideshow_gallery_content',
    )

    if (index === 0) {
      console.log(imgLogement.imgLogement.length)
      setIndex(imgLogement.imgLogement.length - 1)
      console.log(index)
    } else {
      setIndex(index - 1)
      console.log(index)
    }
    lateralSlideshow.style.transform = `translateX(-${index}00%)`
  }

  return (
    <div className="slideshow">
      <img
        src={arrow}
        className="slideshow_arrow slideshow_arrow_left"
        alt="flèche précédent"
        onClick={previousImage}
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
      />
    </div>
  )
}

export default Slideshow
