import React, { useRef, useEffect } from 'react'
import classes from './Slider.module.scss'
import cn from 'classnames'
import { items } from '../SliderData/SliderData'
import { ArrowButton } from '../Components/ArrowButton'

const SingleSliderWithRefs = () => {
  const slider = useRef(null)
  const dots = useRef(null)
  let slideIndex = 1

  useEffect(() => {
    let slides = slider.current.childNodes
    displaySlides(slides)
  })

  const nextHandler = () => {
    slideIndex += 1
    let slides = slider.current.childNodes
    if (slideIndex > slides.length) {
      slideIndex = 1
    }
    displaySlides(slides)
  }

  const prevHandler = () => {
    slideIndex -= 1
    let slides = slider.current.childNodes
    if (slideIndex < 1) {
      slideIndex = slides.length
    }
    displaySlides(slides)
  }

  const displaySlides = (slides) => {
    slides.forEach((element) => {
      element.style = `display: none`
    })
    slides[slideIndex - 1].style.display = 'block'
    let dot = dots.current.childNodes
    dot.forEach((element) => {
      element.style = `background-color: #bbb`
    })
    dot[slideIndex - 1].style = `background-color: #717171`
  }

  const currentSlide = (index) => {
    slideIndex = index + 1
    let slides = slider.current.childNodes
    displaySlides(slides)
  }

  return (
    <div className={classes.SliderContainer}>
      <h3>Single Slider With Refs</h3>
      <div className={classes.Slider} ref={slider}>
        {items.map((item, index) => {
          return (
            <div key={index}>
              <img
                src={item.url}
                alt={item.name}
                className={cn(classes.Item, classes.Fade)}
                width="200"
                height="200"
              />
            </div>
          )
        })}
      </div>

      <ArrowButton
          text="<"
          direction="Prev"
          onClick={prevHandler}
        />
        <ArrowButton
          text=">"
          direction="Next"
          onClick={nextHandler}
        />

      <div className={classes.Dots} ref={dots}>
        {items.map((item, index) => {
          return (
            <div
              className={classes.Dot}
              key={index}
              onClick={() => currentSlide(index)}
            ></div>
          )
        })}
      </div>
    </div>
  )
}

export default SingleSliderWithRefs
