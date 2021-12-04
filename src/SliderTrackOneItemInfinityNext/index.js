import React, { useEffect } from 'react'
import classes from './Slider.module.scss'
import { items } from '../SliderData/SliderData'
import { ArrowButton } from '../Components/ArrowButton'

const SliderTrackOneItemInfinityNext = () => {
  let slider = [] // future array of URLs
  const { length } = items
  const itemLength = 100 // item width + margin left & right

  // write urls from an array of items into an array of urls
  for (let i = 0; i < length; i++) {
    slider[i] = items[i].url
  }

  let step = 0
  let offset = 0

  const drawSlide = () => {
    let img = document.createElement('img')
    img.src = slider[step]
    img.classList.add(classes['Item'])
    img.style = `transform: translateX(${offset * itemLength}px)`
    img.width = itemLength
    let track = document.getElementById('track')
    track.appendChild(img)

    if (step + 1 === slider.length) {
      step = 0
    } else {
      step += 1
    }
    offset = 1
  }

  useEffect(() => {
    drawSlide()
    drawSlide()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const nextHandler = () => {
    let slidesVisible = document.querySelectorAll('img')

    let offset2 = 0
    for (let i = 0; i < slidesVisible.length; i++) {
      slidesVisible[i].style = `transform: translateX(${
        offset2 * itemLength - itemLength
      }px)`
      offset2 += 1
    }

    setTimeout(function () {
      slidesVisible[0].parentNode.removeChild(slidesVisible[0])
      drawSlide() // to add an image to the right
    }, 1100)
  }

  return (
    <div>
      <h3>Slider Track one item Infinity scrolling only next</h3>
      <div className={classes.Slider}>
        <div className={classes.Track} id="track" />
        <ArrowButton text=">" direction="Next" onClick={nextHandler} />
      </div>
    </div>
  )
}

export default SliderTrackOneItemInfinityNext
