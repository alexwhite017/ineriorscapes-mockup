import Bio from "./components/Bio";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Timeline from "./components/Timeline";
import WorkMini from "./components/Work/WorkMini";

const Florals = () => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <Hero image="src/assets/Art/50088409472_9a3261b9e8_b.jpeg" color="bg-florals" text="Florals / Events"/>

                <Bio 
                    id="florals-events"
                    name="florals /events"
                    color="bg-florals"
                    iconColor="bg-florals"
                    header="Our passion for the craft of floral design translates into flowers that feature current industry trends and reflect our clients' vision for their events."
                    text1="Interiorscapes' event team specializes in creating captivating corporate event decor that leaves a lasting impression. We transform spaces to reflect the event's theme, ambiance, and desired tone, ensuring an unforgettable experience for all attendees." 
                    />

                <section className="details">
                     <h2 className="text-center my-10">Corporate Event Decor Services</h2>
                    <div className="flex flex-wrap gap-20 justify-center items-center mb-20 mx-10">
                    <div className=" bg-soft-green rounded-3xl p-10 max-w-3xl">
                        <img src="src/assets/Art/E77B09F1-442F-45F3-8501-75AD1C3002D9-1024x768.jpeg" alt="" className="rounded-3xl aspect-16/9 w-full m-auto object-cover" />
                        <h3 className="text-center mt-10">Custom Floral Arrangement Design</h3>
                        <p className="max-w-2xl text-center items-center justify-center m-auto">Our fresh cut floral arrangements, artful tablescapes, adn custom plant designs are meticulously tailored to each event, reflecting its unique theme, missions, and purpose.</p>
                    </div>

                    <div className=" bg-walls rounded-3xl p-10 max-w-3xl">
                        <img src="src/assets/Art/912E3A3F-1CA3-4D08-BA7B-A5267C3DCFE6_1_105_c.jpeg" alt="" className="rounded-3xl aspect-16/9 w-full m-auto object-cover" />
                        <h3 className="text-center mt-10">Custom Floral On-site Installation and Takedown</h3>
                        <p className="max-w-2xl text-center items-center justify-center m-auto">Our dedicated installation team, donned in Interiorscapes attire, arrives at your venue, adhering to facility regulations and guidelines. After the event concludes, our team returns to efficiently collect the plants. Our primary objective is to alleviate your worries and ensure a stress-free experience, allowing you to fully enjoy your event.</p>
                    </div>

                    <div className=" bg-holiday rounded-3xl p-10 max-w-3xl">
                        <img src="src/assets/Art/IMG_0941-1024x764.jpeg" alt="" className="rounded-3xl aspect-16/9 w-full m-auto object-cover" />
                        <h3 className="text-center mt-10">Plant Rentals</h3>
                        <p className="max-w-2xl items-center justify-center m-auto text-left">With a wide selection of decorative pots, containers, large plants, lighted trees, palms, and other eye-catching elements, we offer endless possibilites to enhance the design of any event space. Our impressive portfolio includes notable events such as the Birmingham Boat Show, SEC Baseball Tournament, corporate parties, and many more. You've likely seen our remarkable work in action, creating memorable and visually stunning experiences.</p>
                    </div>
                    </div>
                </section>

                <WorkMini page="florals-events"/>

                <Testimonials color="bg-florals" />

                <Timeline />

            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Florals;