import React, { useState } from 'react'
import classes from './Slider.module.scss'
import cn from 'classnames'
import { items } from '../SliderData/SliderData'
import { ArrowButton } from '../Components/ArrowButton'

// without refs

const SingleSlider = () => {
  const [current, setCurrent] = useState(0)
  const length = items.length

  if (!Array.isArray(items) || items.length <= 0) {
    return null
  }

  const prevHandler = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  const nextHandler = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const currentSlide = (index) => {
    setCurrent(index)
  }

  return (
    <div>
      <h3>Single Slider</h3>
      <div className={classes.Slider}>
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? cn(classes.Slide, classes.Active)
                  : classes.Slide
              }
            >
              {index === current && (
                <img src={item.url} alt={item.name} width="200" height="200" />
              )}
            </div>
          )
        })}

        <ArrowButton text="<" direction="Prev" onClick={prevHandler} />
        <ArrowButton text=">" direction="Next" onClick={nextHandler} />
      </div>
      <div className={classes.Dots}>
        {items.map((item, index) => {
          return (
            <div
              className={
                index === current
                  ? cn(classes.Dot, classes.ActiveDot)
                  : classes.Dot
              }
              key={index}
              onClick={() => currentSlide(index)}
            ></div>
          )
        })}
      </div>
    </div>
  )
}

export default SingleSlider
