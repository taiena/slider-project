import React, { useState } from 'react'
import cn from 'classnames'
import classes from './Slider.module.scss'
import { img } from '../SliderData/SliderData'
import { ArrowButton } from '../Components/ArrowButton'

const SliderTrackOneItemInfinity = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animation, setAnimation] = useState(0)

  const setAnimationTimeout = () => {
    setTimeout(() => {
      setAnimation(0)
    }, 1000) // equal to animation speed
  }

  const nextHandler = () => {
    setAnimation(1)
    setActiveIndex((current) => {
      const res = current === img.length - 1 ? 0 : current + 1
      return res
    })
    setAnimationTimeout()
  }

  const prevHandler = () => {
    setAnimation(1)
    setActiveIndex((current) => {
      const res = current === 0 ? img.length - 1 : current - 1
      return res
    })
    setAnimationTimeout()
  }

  const prevImgIndex = activeIndex === 0 ? img.length - 1 : activeIndex - 1
  const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1

  return (
    <div>
      <h3>Slider Track one item Infinity</h3>
      <div className={classes.SliderContainer}>
        <div className={classes.Slider}>
          <div className={cn(classes.Img, classes.ImgPrev)} key={prevImgIndex}>
            {img[prevImgIndex]}
          </div>
          <div className={classes.Img} key={activeIndex}>
            {img[activeIndex]}
          </div>
          <div className={cn(classes.Img, classes.ImgNext)} key={nextImgIndex}>
            {img[nextImgIndex]}
          </div>
        </div>
        <ArrowButton
          text="<"
          direction="Prev"
          onClick={prevHandler}
          disabled={animation}
        />
        <ArrowButton
          text=">"
          direction="Next"
          onClick={nextHandler}
          disabled={animation}
        />
      </div>
    </div>
  )
}

export default SliderTrackOneItemInfinity
