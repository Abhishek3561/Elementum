import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Progress from './components/Progress/Progress'
import Services from './components/Services/Services'
import Testimonials from './components/Testimonials/Testimonials'
import Newsletter from './components/Newsletter/Newsletter'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Progress />
        <Services />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App