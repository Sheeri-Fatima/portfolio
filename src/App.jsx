import React from 'react'
import ProjectsSection from './component/ProjectsSection'
import ExperienceSection from './component/ExperienceSection'
import EducationSection from './component/ServicesSection'
import ContactSection from './component/ContactSection'
import Footer from './component/Footer'
import PortfolioNavbarHero from './component/Navbar'
import About from './component/About'
import ServicesSection from './component/ServicesSection'
import SkillsSection from './component/SkillsSection'

const App = () => {
  return (
    <>
     <PortfolioNavbarHero />
     {/* <HeroSection /> */}
     {/* <AboutSection /> */}
     <About />
     <ServicesSection />
     <ProjectsSection />
     {/* <ExperienceSection /> */}
     <SkillsSection />
     <ContactSection />
     <Footer />
    </>
  )
}

export default App
