import WorkCardsMini from "./WorkCardsMini";

const WorkMini = (props) => {

    switch (props.page) {

        case "interior":
            return(
                <section className="other-services max-w-6xl mx-auto mb-20">
                    <h2 className="text-center mb-2 ">Explore Our Other Services</h2>
                    <div className="border-t-interior border-t-3 w-20 mb-10 mx-auto"></div>
                    <div className="work-cards grid sm:grid-cols-2 lg:flex justify-center gap-5">
                        <WorkCardsMini title="Exteriors" url="/exterior" color="bg-exterior" image="src/assets/Art/50088409472_9a3261b9e8_b.jpeg"/>
                        <WorkCardsMini title="Florals / Events" url="/florals-events" color="bg-florals" image="src/assets/Art/3-1.jpeg" />
                        <WorkCardsMini title="Living Walls" url="/living-walls" color="bg-walls" image="src/assets/Art/51028044297_4d678cf954_b.jpeg" />
                        <WorkCardsMini title="Holiday" url="/holiday" color="bg-holiday" image="src/assets/Art/51020694836_897b8db88a_b.jpeg" />
                    </div>
                    
                </section>
            )

        case "exterior":
           return(
                <section className="other-services max-w-6xl mx-auto mb-20">
                    <h2 className="text-center mb-2 ">Explore Our Other Services</h2>
                    <div className="border-t-interior border-t-3 w-20 mb-10 mx-auto"></div>
                    <div className="work-cards grid sm:grid-cols-2 lg:flex justify-center gap-5">
                        <WorkCardsMini title="Interiors" url="/interior" color="bg-interior" image="src/assets/Art/51023885522_59099b31e0_b.jpeg"/>
                        <WorkCardsMini title="Florals / Events" url="/florals-events" color="bg-florals" image="src/assets/Art/3-1.jpeg" />
                        <WorkCardsMini title="Living Walls" url="/living-walls" color="bg-walls" image="src/assets/Art/51028044297_4d678cf954_b.jpeg" />
                        <WorkCardsMini title="Holiday" url="/holiday" color="bg-holiday" image="src/assets/Art/51020694836_897b8db88a_b.jpeg" />
                    </div>
                    
                </section>
            )
        case "florals-events":
            return(
                <section className="other-services max-w-6xl mx-auto mb-20">
                    <h2 className="text-center mb-2 ">Explore Our Other Services</h2>
                    <div className="border-t-interior border-t-3 w-20 mb-10 mx-auto"></div>
                    <div className="work-cards grid sm:grid-cols-2 lg:flex justify-center gap-5">
                        <WorkCardsMini title="Interiors" url="/interior" color="bg-interior" image="src/assets/Art/51023885522_59099b31e0_b.jpeg"/>
                        <WorkCardsMini title="Exteriors" url="/exterior" color="bg-exterior" image="src/assets/Art/50088409472_9a3261b9e8_b.jpeg"/>
                        <WorkCardsMini title="Living Walls" url="/living-walls" color="bg-walls" image="src/assets/Art/51028044297_4d678cf954_b.jpeg" />
                        <WorkCardsMini title="Holiday" url="/holiday" color="bg-holiday" image="src/assets/Art/51020694836_897b8db88a_b.jpeg" />
                    </div>
                    
                </section>
            )

        case "living-walls":
            return(
                <section className="other-services max-w-6xl mx-auto mb-20">
                    <h2 className="text-center mb-2 ">Explore Our Other Services</h2>
                    <div className="border-t-interior border-t-3 w-20 mb-10 mx-auto"></div>
                    <div className="work-cards grid sm:grid-cols-2 lg:flex justify-center gap-5">
                        <WorkCardsMini title="Interiors" url="/interior" color="bg-interior" image="src/assets/Art/51023885522_59099b31e0_b.jpeg"/>
                        <WorkCardsMini title="Exteriors" url="/exterior" color="bg-exterior" image="src/assets/Art/50088409472_9a3261b9e8_b.jpeg"/>
                        <WorkCardsMini title="Florals / Events" url="/florals-events" color="bg-florals" image="src/assets/Art/3-1.jpeg" />
                        <WorkCardsMini title="Holiday" url="/holiday" color="bg-holiday" image="src/assets/Art/51020694836_897b8db88a_b.jpeg" />
                    </div>
                    
                </section>
            )
        case "holiday":
            return(
                <section className="other-services max-w-6xl mx-auto mb-20">
                    <h2 className="text-center mb-2 ">Explore Our Other Services</h2>
                    <div className="border-t-interior border-t-3 w-20 mb-10 mx-auto"></div>
                    <div className="work-cards grid sm:grid-cols-2 lg:flex justify-center gap-5">
                        <WorkCardsMini title="Interiors" url="/interior" color="bg-interior" image="src/assets/Art/51023885522_59099b31e0_b.jpeg"/>
                        <WorkCardsMini title="Exteriors" url="/exterior" color="bg-exterior" image="src/assets/Art/50088409472_9a3261b9e8_b.jpeg"/>
                        <WorkCardsMini title="Florals / Events" url="/florals-events" color="bg-florals" image="src/assets/Art/3-1.jpeg" />
                        <WorkCardsMini title="Living Walls" url="/living-walls" color="bg-walls" image="src/assets/Art/51028044297_4d678cf954_b.jpeg" />
                    </div>
                    
                </section>
            )
    }

    
}

export default WorkMini;