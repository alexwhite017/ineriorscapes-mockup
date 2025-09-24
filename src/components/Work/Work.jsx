import WorkCards from "./WorkCards";
import Image1 from "../../assets/Art/51023885522_59099b31e0_b.jpeg";
import Image2 from "../../assets/Art/50088409472_9a3261b9e8_b.jpeg";
import Image3 from "../../assets/Art/3-1.jpeg";
import Image4 from "../../assets/Art/51028044297_4d678cf954_b.jpeg";
import Image5 from "../../assets/Art/51020694836_897b8db88a_b.jpeg";

const Work = () => {
    return(
        <section className="work mb-30">
            <WorkCards reverse={false} url="interior" title="Interiors" description="High caliber maintenance service and a professional staff delivers consistent results to our clients." color="bg-interior" image={Image1} />
            <WorkCards reverse={true} url="exterior" title="Exteriors" description="Our superior maintenance services is a result of our partnership with the facilities we service" color="bg-exterior" image={Image2} />
            <WorkCards reverse={false} url="florals-events" title="Florals / Events" description="Our passion for the craft of floral design translates into flowers that feature current industry trends and reflect our clients' vision for their events." color="bg-florals" image={Image3} />
            <WorkCards reverse={true} url="living-walls" title="Living Walls" description="Interiorscapes can create a living work of art for you! We design, install, and maintain beautiful and striking living walls." color="bg-walls" image={Image4} />
            <WorkCards reverse={false} url="holiday" title="Holiday " description="Our staff takes care of all the details, from installation, takedown and storage, which means you have nothing to do but watch our holiday eleves work their magic. Merry Christmas indeed." color="bg-holiday" image={Image5} />

          </section>
    )
}

export default Work;

/*

            
*/