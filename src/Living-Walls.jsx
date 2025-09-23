import Bio from "./components/Bio";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Timeline from "./components/Timeline";
import WorkMini from "./components/Work/WorkMini";
import ReactImageGallery from "react-image-gallery";

const Walls = () => {

    const images = [];
    for (let i = 1; i <= 30; i++) {
        images.push({
            original: `https://picsum.photos/id/${i}/1000/600/`,
            thumbnail: `https://picsum.photos/id/${i}/250/150/`
        });
    }
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <Hero image="src/assets/Art/48284911096_59424a7ee0_b.jpeg" color="bg-walls" text="Living Walls"/>

                <Bio 
                    id="living-walls"
                    name="living walls"
                    color="bg-walls"
                    iconColor="bg-walls"
                    header="A living wall (or green wall) is a vertical planting that can exist either inside or out. Interiorscapes is delighted to have the experience and expertise to offer living wall consultation, design, installation and maintenance. These are some of our favorite living wall creations:"
                    text1="" 
                    />

                <section className="gallery">

                    <h2 className="text-center my-10">Living Wall Gallery</h2>
                    <div className=" max-w-6xl mx-auto my-20">
                        <ReactImageGallery items={images} />
                    </div>
                </section>

                    

                

                <WorkMini page="living-walls"/>

                <Testimonials color="bg-walls" />

                <Timeline />

            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Walls;

/**
 * 
 *  <section className="gallery">
                    <div className="image-container grid grid-cols-6 gap-4 mx-20 my-20">{
                        Array.from({ length: 30 }).map((_, index) => (
                            <img key={index} src="src/assets/Art/idtPtCDXoP-WgAAAAAAAKx4Q_w1024h768_c0.jpeg" alt="" className="rounded-3xl aspect-16/9 w-full m-auto object-cover col-span-6 md:col-span-3 lg:col-span-1"/>
                        ))
                    }
                    </div>
                </section>
 */