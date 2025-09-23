import Bio from "./components/Bio";
import ExteriorServices from "./components/Exterior/ExteriorServices";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Timeline from "./components/Timeline";
import WorkMini from "./components/Work/WorkMini";

const Exterior = () => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <Hero image="src/assets/Art/48284911096_59424a7ee0_b.jpeg" color="bg-exterior" text="Exteriors"/>

                <Bio 
                    id="exterior"
                    name="exterior"
                    color="bg-exterior"
                    iconColor="bg-exterior"
                    header="Exterior plants not only add beauty and curb appeal, but also project a positive first impression for your business."
                    text1="At Interiorscapes, we understand the importance of making a memorable first impression, and that begins even before your clients step through the door. With our
                        expertise in quality exterior landscaping, we can help you create a stunning outdoor environment that not only impresses your clients but also enhances the value of your property."
                />

                <ExteriorServices />
                

                <WorkMini page="exterior"/>

                <Testimonials color="bg-exterior" />

                <Timeline />

            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Exterior;