import './App.css'
import Home from './components/homePage/Home'
import Grid from './components/imageGrid/Grid'
import ImageSlider from './components/imageSlider/ImageSlider'
import Navbar from './components/navbar/Navbar'
import Testimonial from './components/testimonial/Testimonial'
import Slider from './components/swiper/Slider'
import Section from './components/section2/Section'

function App() {

  return (
    <>
    <Navbar/>
    <Home/>
    <Section/>
    <Grid/>
    <Testimonial/>
    <Slider/>
    <ImageSlider/>
    </>
  )
}

export default App
