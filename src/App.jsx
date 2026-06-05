import Header from './components/Header'
import Hero from './components/Hero'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Certificates />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
