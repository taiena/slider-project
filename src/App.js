import './App.css'
import SliderTrackOneItem from './SliderTrackOneItem'
import SliderTrackMultipleItems from './SliderTrackMultipleItems'
import SliderTrackOneItemInfinityNext from './SliderTrackOneItemInfinityNext'
import SliderTrackOneItemInfinity from './SliderTrackOneItemInfinity'
import SliderTrack5ItemsInfinity from './SliderTrack5ItemsInfinity'
import DoubleSliderInfinity from './DoubleSliderInfinity'
import SingleSliderWithRefs from './SingleSliderWithRefs'
import SingleSlider from './SingleSlider'

// need to include one of them because of the same variable names

function App() {
  return (
    <div className="App">
      <SliderTrackOneItem />
      {/* <SliderTrackMultipleItems /> */}
      {/* <SliderTrackOneItemInfinityNext /> */}
      {/* <SliderTrackOneItemInfinity /> */}
      {/* <SliderTrack5ItemsInfinity /> */}
      {/* <DoubleSliderInfinity /> */}
      {/* <SingleSliderWithRefs /> */}
      {/* <SingleSlider /> */}
    </div>
  )
}

export default App
