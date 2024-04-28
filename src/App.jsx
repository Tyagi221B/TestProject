import './App.css'
import Home from './components/homePage/Home'
import Grid from './components/imageGrid/Grid'
import ImageSlider from './components/imageSlider/ImageSlider'
import Navbar from './components/navbar/Navbar'
import Testimonial from './components/testimonial/Testimonial'
import Slider from './components/swiper/Slider'
import Section from './components/section2/Section'
import Quote from './components/quote/Quote'

function App() {

  return (
    <>
    <Navbar/>
    <Home/>
    <Section/>
    <Grid/>
    <Quote
        quote={`The greatest glory in living lies not in never falling, but in rising every time we fall.`}
        author={`Nelson Mandela`}
        backgroundImage={`"https://images.pexels.com/photos/3007208/pexels-photo-3007208.jpeg"`}
      />
    <Testimonial/>
    <Slider/>
    <ImageSlider/>
    
    </>
  )
}

export default App
