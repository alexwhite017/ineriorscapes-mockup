import Bio from "./components/Bio";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Timeline from "./components/Timeline";
import WorkMini from "./components/Work/WorkMini";
import Image from"./assets/Art/51020694836_897b8db88a_b.jpeg";
import Image2 from "./assets/Art/00007375-5502-4ACD-9327-C15446A7CAEC_1_105_c.jpeg";
import Image3 from "./assets/Art/261886CE-EA27-416C-BF05-6D5FFB118FE7-1-782x1024.jpeg";
import Image4 from "./assets/Art/F0DD6E80-4439-4BC8-B232-9B56347C4460_1_105_c.jpeg";

const Holiday = () => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <Hero image={Image} color="bg-holiday" text="Holidays"/>

                <Bio 
                    id="home"
                    name="holiday"
                    color="bg-holiday"
                    iconColor="bg-holiday"
                    header="Celebrate the Season with Stunning Holiday Decor"
                    text1="Holidays hold a special place in our hearts, filled with cherished memories. At Interiorscapes, we excel in capturing the enchantment of the season and bringing it to life within your business or corporate environment. With our expertise, we can transform your space into a joyful holiday wonderland, setting your property and facility apart from the rest. Let us create a festive ambiance that leaves a lasting impression on your visitors and brings joy to all who enter."
                    text2="Our holiday design and installation team is ready to bring your vision to life. From small business offices to neighborhood entrances and expansive retail properties, we have the experience and expertise to create the perfect holiday transformation. Let us work our magic and turn your space into a festive and enchanting destination that captures the spirit of the season."
                    />


                <section className="details">
                    <h2 className="text-center my-10">Holiday Decor Services</h2>
                    <div className="flex flex-wrap gap-20 justify-center items-center mb-20 mx-10">
                    <div className=" bg-soft-green rounded-3xl p-10 max-w-3xl">
                        <img src={Image2} alt="" className="rounded-3xl aspect-16/9 w-full m-auto object-cover" />
                        <h3 className="text-center mt-10">Custom Design</h3>
                        <p className="max-w-2xl text-center items-center justify-center m-auto">Just like our plant services, our holiday designs are fully customized to meet the unique needs and preferences of our clients. Our designers prioritize budget, taste, and functionality to create a unique look for each space. We use only the highest quality decorations, plants, flowers, and trees to ensure exceptional results.</p>
                    </div>

                    <div className=" bg-walls rounded-3xl p-10 max-w-3xl">
                        <img src={Image3} alt="" className="rounded-3xl aspect-16/9 w-full m-auto object-cover" />
                        <h3 className="text-center mt-10">On-site Professional Installation and Takedown</h3>
                        <p className="max-w-2xl text-center items-center justify-center m-auto">Our professional installation team, donned in Interiorscapes apparel, respects the rules of the facility and ensures a clean environment by vacuuming and sweeping after completing the installation.</p>
                    </div>

                    <div className=" bg-holiday rounded-3xl p-10 max-w-3xl">
                        <img src={Image4} alt="" className="rounded-3xl aspect-16/9 w-full m-auto object-cover" />
                        <h3 className="text-center mt-10">Secure, Off-site Holiday Decoration Storage</h3>
                        <p className="max-w-2xl items-center justify-center m-auto text-left">At the end of each season, our dedicated staff carefully removes and stores the holiday decor in our secure facility. Whether you wish to recreate the same look or desire something new for the following year, we have everything readily available, ensuring a seamless transition when the season comes around again. Your holiday decorations will be in safe hands, ready to be brought back to life when the next holiday season rolls around.</p>
                    </div>
                    </div>
                </section>    

                <WorkMini page="holiday"/>

                <Testimonials color="bg-holiday" />

                <Timeline />

            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Holiday;