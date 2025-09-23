import Bio from "./components/Bio";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Timeline from "./components/Timeline";
import WorkMini from "./components/Work/WorkMini";

const AboutUs = () => {
    return (
        <div>
            <header>
                <Header />
            </header>

            <main>
                <Hero image="src/assets/Art/51023056273_b7feb719b6_b.jpeg" color="bg-florals" text="About Interiorscapes Inc."/>


                <Bio 
                    id="about"
                    name="about"
                    color="bg-florals"
                    iconColor="bg-soft-green"
                    header="Since 1978, Interiorscapes has delivered superior plant services to companies throughout Alabama."
                    text1="Our talented team of designers, landscapers, and technicians customizes each project to your unique needs." 
                    text2="As your one-stop shop for enhancing interior and exterior work environments, we offer a wide range of beautiful living plants. From permanent installations to events or the holiday season, our expertise and vast inventory make it happen."
                />

                <div className="max-w-6xl mx-auto my-20">
                    <div className="flex flex-col justify-center items-center gap-5">
                        <h2 className="text-center text-xl md:text-3xl">Services</h2>
                        <p>We are passionate about using the beauty of nature to enhance indoor and outdoor spaces.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-10">
                        <div className="service-card flex flex-col  items-center gap-2">
                            <h3 className="text-xl" >Interior Plants</h3>
                            <p>Interiorscapes specializes in enhancing your interior business setting with vibrant greenery and floral installations. From custom interior plantscape design and maintenance to convenient weekly fresh cut flower arrangement delivery, we offer a comprehensive range of services to transform your space into a captivating oasis.</p>
                        </div>
                        <div className="service-card flex flex-col items-center gap-2">
                            <h3 className="text-xl" >Exterior Maintenance</h3>
                            <p>We guarantee that your outdoor landscaping and green spaces maintain their vibrant colors and impressive allure all year round.</p>
                        </div>
                        <div className="service-card flex flex-col items-center gap-2">
                            <h3 className="text-xl" >Exterior Maintenance</h3>
                            <p>We guarantee that your outdoor landscaping and green spaces maintain their vibrant colors and impressive allure all year round.</p>
                        </div>
                        <div className="service-card flex flex-col items-center gap-2">
                            <h3 className="text-xl" >Exterior Maintenance</h3>
                            <p>We guarantee that your outdoor landscaping and green spaces maintain their vibrant colors and impressive allure all year round.</p>
                        </div>
                    </div>
                        

                </div>
                
                <div>
                    <img src="src/assets/Art/51023056273_b7feb719b6_b.jpeg" alt="" />
                    <p>Though founded in Birmingham in 1978, thanks to our loyal customers, Interiorscapes has grown to reach clients all over the state of Alabama. From Muscle Shoals to Montgomery, we provide exceptional plant care, floral design and holiday decore. Check the map above to see if we service plants in your area!</p>
                </div>

                <WorkMini page="living-walls" /> 

                <Testimonials color="bg-florals" />
                <Timeline />
            </main>

            <footer>
                <Footer />
            </footer>

        </div>
    )
}

export default AboutUs;