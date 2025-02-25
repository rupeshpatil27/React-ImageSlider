import './App.css'

import image1 from "./assets/img1.jpg";
import image2 from "./assets//img2.jpg";
import image3 from "./assets/img3.jpg";

import ImageSlider from './component/ImageSlider/ImageSlider'

function App() {

  const sliderImageData = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
  ];

  return (
    <div className="slider-wrapper">
      <ImageSlider data={sliderImageData} />
    </div>
  )
}

export default App
