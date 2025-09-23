import './App.css'
import Button from './components/button.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Testimonials from './components/Testimonials.jsx'
import Bio from './components/Bio.jsx'
import Sponsors from './components/Sponsors.jsx'
import Work from './components/Work/Work.jsx'
import Hero from './components/Hero.jsx'
import Timeline from './components/Timeline.jsx'
import "react-image-gallery/styles/css/image-gallery.css";

function App() {


  return (
    <>
      <div>
        <header>
          <Header />
        </header>

        <main >
          <Hero image="src/assets/Art/51023056273_b7feb719b6_b.jpeg" color="bg-florals" text="Ground breaking plant design." />

          <Bio
              id="home"
              name="home"
              color="bg-florals" 
              iconColor="bg-soft-green"
              header="Keeping your company green and beautiful has been our business and passion for more than 40 years"
              text1="Interiorscapes provides innovating plant design, installation and maintenance for companies throughout Alabama. We ensure your interior plantscaping, exterior landscaping and landscape color, project the best image for your business."
              text2="Green is not just a color anormore; it's a way of life. Living, green plants in your workplace is a simple and cost-effective way to improve indoor air quality, reduce stress, promote productivity, and contriubte to a host of other psychological benefits."
              text3="Exterior plants not only add beauty and curb appeal, but also project a positive first impression for you business. Let our professional and highly skilled team create your beautiful indoor, outdoor, and holiday corporate business spaces." 
              />

          <Sponsors />

          <Work />

          <Testimonials color="bg-[#ADD161]" />
          
          
          <Timeline />   
            
        </main>
      
        <footer>
          <Footer />
        </footer>
       
      </div>
    </>
  )
}

export default App

/*

        

             
            

            

            

 */