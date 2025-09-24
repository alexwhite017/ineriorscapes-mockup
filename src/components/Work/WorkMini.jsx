import WorkCardsMini from "./WorkCardsMini";
import ExteriorImg from "../../assets/Art/50088409472_9a3261b9e8_b.jpeg";
import InteriorImg from "../../assets/Art/51023885522_59099b31e0_b.jpeg";
import FloralsImg from "../../assets/Art/3-1.jpeg";
import WallsImg from "../../assets/Art/51028044297_4d678cf954_b.jpeg";
import HolidayImg from "../../assets/Art/51020694836_897b8db88a_b.jpeg";

const WorkMini = (props) => {

    switch (props.page) {

        case "interior":
            return(
                <section className="other-services max-w-6xl mx-auto mb-20">
                    <h2 className="text-center mb-2 ">Explore Our Other Services</h2>
                    <div className="border-t-interior border-t-3 w-20 mb-10 mx-auto"></div>
                    <div className="work-cards grid sm:grid-cols-2 lg:flex justify-center gap-5">
                        <WorkCardsMini title="Exteriors" url="/exterior" color="bg-exterior" image={ExteriorImg}/>
                        <WorkCardsMini title="Florals / Events" url="/florals-events" color="bg-florals" image={FloralsImg} />
                        <WorkCardsMini title="Living Walls" url="/living-walls" color="bg-walls" image={WallsImg} />
                        <WorkCardsMini title="Holiday" url="/holiday" color="bg-holiday" image={HolidayImg} />
                    </div>
                    
                </section>
            )

        case "exterior":
           return(
                <section className="other-services max-w-6xl mx-auto mb-20">
                    <h2 className="text-center mb-2 ">Explore Our Other Services</h2>
                    <div className="border-t-interior border-t-3 w-20 mb-10 mx-auto"></div>
                    <div className="work-cards grid sm:grid-cols-2 lg:flex justify-center gap-5">
                        <WorkCardsMini title="Interiors" url="/interior" color="bg-interior" image={InteriorImg}/>
                        <WorkCardsMini title="Florals / Events" url="/florals-events" color="bg-florals" image={FloralsImg} />
                        <WorkCardsMini title="Living Walls" url="/living-walls" color="bg-walls" image={WallsImg} />
                        <WorkCardsMini title="Holiday" url="/holiday" color="bg-holiday" image={HolidayImg} />
                    </div>
                    
                </section>
            )
        case "florals-events":
            return(
                <section className="other-services max-w-6xl mx-auto mb-20">
                    <h2 className="text-center mb-2 ">Explore Our Other Services</h2>
                    <div className="border-t-interior border-t-3 w-20 mb-10 mx-auto"></div>
                    <div className="work-cards grid sm:grid-cols-2 lg:flex justify-center gap-5">
                        <WorkCardsMini title="Interiors" url="/interior" color="bg-interior" image={InteriorImg}/>
                        <WorkCardsMini title="Exteriors" url="/exterior" color="bg-exterior" image={ExteriorImg}/>
                        <WorkCardsMini title="Living Walls" url="/living-walls" color="bg-walls" image={WallsImg} />
                        <WorkCardsMini title="Holiday" url="/holiday" color="bg-holiday" image={HolidayImg} />
                    </div>
                    
                </section>
            )

        case "living-walls":
            return(
                <section className="other-services max-w-6xl mx-auto mb-20">
                    <h2 className="text-center mb-2 ">Explore Our Other Services</h2>
                    <div className="border-t-interior border-t-3 w-20 mb-10 mx-auto"></div>
                    <div className="work-cards grid sm:grid-cols-2 lg:flex justify-center gap-5">
                        <WorkCardsMini title="Interiors" url="/interior" color="bg-interior" image={InteriorImg}/>
                        <WorkCardsMini title="Exteriors" url="/exterior" color="bg-exterior" image={ExteriorImg}/>
                        <WorkCardsMini title="Florals / Events" url="/florals-events" color="bg-florals" image={FloralsImg} />
                        <WorkCardsMini title="Holiday" url="/holiday" color="bg-holiday" image={HolidayImg} />
                    </div>
                    
                </section>
            )
        case "holiday":
            return(
                <section className="other-services max-w-6xl mx-auto mb-20">
                    <h2 className="text-center mb-2 ">Explore Our Other Services</h2>
                    <div className="border-t-interior border-t-3 w-20 mb-10 mx-auto"></div>
                    <div className="work-cards grid sm:grid-cols-2 lg:flex justify-center gap-5">
                        <WorkCardsMini title="Interiors" url="/interior" color="bg-interior" image={InteriorImg}/>
                        <WorkCardsMini title="Exteriors" url="/exterior" color="bg-exterior" image={ExteriorImg}/>
                        <WorkCardsMini title="Florals / Events" url="/florals-events" color="bg-florals" image={FloralsImg} />
                        <WorkCardsMini title="Living Walls" url="/living-walls" color="bg-walls" image={WallsImg} />
                    </div>
                    
                </section>
            )
    }

    
}

export default WorkMini;