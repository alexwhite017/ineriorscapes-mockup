import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Image from "./assets/Art/51023056273_b7feb719b6_b.jpeg";

const Timeline = () => {
    return (
        <div>
            <header>
                <Header />
            </header>

            <main>
                <Hero image={Image} color="bg-florals" text="Our Timeline"/>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Timeline;