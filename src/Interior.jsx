import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Timeline from "./components/Timeline";
import Bio from "./components/Bio";
import InteriorDisplay from "./components/Interior/InteriorDisplay";
import WorkMini from "./components/Work/WorkMini";
import Brochure from "./components/Interior/Brochure";
const Interior = () => {
    return (
        <>
            <div>
                <header>
                    <Header />
                </header>
                <main>
                    <Hero image="src/assets/Art/51023885522_59099b31e0_b.jpeg" color="bg-interior" text="Interiors"/>

                    <Bio
                      id="interior"
                      name="interior"
                      color="bg-interior"
                      iconColor="bg-interior"
                      header="Interior plants create a more calming and creative work environment while improving interior office air quality."
                      text1="At Interiorscapes, we have provided consistent, quality interior plantscape design, installation and maintenance for nearly 40 years. Every interior plant design is customized to fit
                            the needs of our clients. We take into consideration the requirements of each facility as well as its architectural style, traffic patterns and light sources. Our designers provide the right
                            combination of plant types, colors, sizes and textures in the latest traditional or contemporary containers to complement and enhance your workplace. Once planted, our uniformed
                            interior plant maintenance technicians care for each plant, ensuring they stay healthy and beautiful."
                    />

                   <InteriorDisplay />

                   <Brochure />

                   <WorkMini page="interior" />

                   


                    <Testimonials color="bg-interior" />

                    <Timeline />
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>

        </>
        
    )
}

export default Interior;

/*


                   
*/