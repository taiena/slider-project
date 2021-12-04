import React, { useRef, useState, useEffect } from 'react'
import classes from './Slider.module.scss'
import { items } from '../SliderData/SliderData'
import { ArrowButton } from '../Components/ArrowButton'

const SliderTrackOneItem = () => {
  const slider = useRef(null)
  const [position, setPosition] = useState(0)

  const itemLength = 200 // item width + margin left & right
  const { length } = items
  let shift = 1
  let visibleGroup = 1
  const itemsShift = itemLength * shift
  const lastPosition = -(length - visibleGroup) * itemLength

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
    setPosition(position + itemsShift)
  }

  const nextHandler = () => {
    if (position === lastPosition || position < lastPosition) {
      return
    }
    setPosition(position - itemsShift)
  }

  return (
    <div>
      <h3>Slider Track one item</h3>
      <div className={classes.Slider}>
        <div className={classes.Track} ref={slider}>
          {items.map((item, index) => {
            return (
              <div key={index} className={classes.Item}>
                <img src={item.url} alt={item.name} width="200" height="200" />
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
    </div>
  )
}

export default SliderTrackOneItem
