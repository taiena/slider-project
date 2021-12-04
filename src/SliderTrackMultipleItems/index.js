import React, { useRef, useState, useEffect } from 'react'
import classes from './Slider.module.scss'
import { itemsSimple } from '../SliderData/SliderData'
import WindowDimensions from '../utils/windowDimensions'
import { ArrowButton } from '../Components/ArrowButton'

// with extreme cases
// with adaptation

const SliderTrackMultipleItems = () => {
  const slider = useRef(null)
  let [position, setPosition] = useState(0)
  const windowWidth = WindowDimensions()

  const sliderMargins = 20 // margins slider left + right
  const itemLength = 100 // item width + margin left & right
  const maxVisibleGroup = 9
  const maxShift = 3
  const { length } = itemsSimple
  let shift = maxShift
  let visibleGroup = maxVisibleGroup

  if (windowWidth.width < 9 * itemLength + sliderMargins) {
    visibleGroup = 8
  }
  if (windowWidth.width < 8 * itemLength + sliderMargins) {
    visibleGroup = 7
  }
  if (windowWidth.width < 7 * itemLength + sliderMargins) {
    visibleGroup = 6
  }
  if (windowWidth.width < 6 * itemLength + sliderMargins) {
    visibleGroup = 5
  }
  if (windowWidth.width < 5 * itemLength + sliderMargins) {
    visibleGroup = 4
  }
  if (windowWidth.width < 4 * itemLength + sliderMargins) {
    visibleGroup = 3
  }
  if (windowWidth.width < 3 * itemLength + sliderMargins) {
    visibleGroup = 2
    shift = 2
  }
  if (windowWidth.width < 2 * itemLength + sliderMargins) {
    visibleGroup = 1
    shift = 1
  }

  const itemsShift = itemLength * shift
  const extremeItems = (length - visibleGroup) % shift
  // visibleGroup = 6: 1 2 3 4 5 6 7 8 9 [10] = 1
  // visibleGroup = 5: 1 2 3 4 5 6 7 8 [9 10] = 2
  const arrayWithoutExtreme = length - extremeItems
  const extremeShift = itemLength * extremeItems

  const lastPosition = -(length - visibleGroup) * itemLength
  // visibleGroup = 6: 1 2 3 4 [5 6 7 8 9 10] -400
  // visibleGroup = 5: 1 2 3 4 5 [6 7 8 9 10] -500

  const lastPosBeforeExtreme =
    -(arrayWithoutExtreme - visibleGroup) * itemLength
  // visibleGroup = 6: 1 2 3 [4 5 6 7 8 9] 10 -300
  // visibleGroup = 5: 1 2 3 [4 5 6 7 8] 9 10 -300

  const firstPosBeforeExtreme = -extremeItems * itemLength
  // visibleGroup = 6: 1 [2 3 4 5 6 7] 8 9 10 -100
  // visibleGroup = 5: 1 2 [3 4 5 6 7] 8 9 10 -200

  // position = 0:
  // visibleGroup = 6: [1 2 3 4 5 6] 7 8 9 10
  // visibleGroup = 5: [1 2 3 4 5] 6 7 8 9 10

  const translateSlides = () => {
    slider.current.childNodes.forEach((element) => {
      element.style = `transform: translateX(${position}px)`
    })
  }

  useEffect(() => {
    translateSlides()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position])

  const prevHandler = () => {
    if (position === 0 || position > 0) {
      return
    }
    if (position === firstPosBeforeExtreme) {
      setPosition(0)
    } else {
      setPosition(position + itemsShift)
    }
  }

  const nextHandler = () => {
    if (position === lastPosition || position < lastPosition) {
      return
    }
    if (position === lastPosBeforeExtreme) {
      setPosition(position - extremeShift)
    } else {
      setPosition(position - itemsShift)
    }
  }

  return (
    <div className={classes.Slider}>
      <div className={classes.Track} ref={slider}>
        {itemsSimple.map((item, index) => {
          return (
            <div className={classes.Item} key={index}>
              {item}
            </div>
          )
        })}
      </div>
      <ArrowButton
          text="<"
          direction="Prev"
          onClick={prevHandler}
          unvisible={position === 0 ? 'Unvisible' : null}
        />
        <ArrowButton
          text=">"
          direction="Next"
          onClick={nextHandler}
          unvisible={position === lastPosition ? 'Unvisible' : null}
        />
    </div>
  )
}

export default SliderTrackMultipleItems
