import spire from "../assets/Art/Spire_Inc_logo.svg";
import protective from "../assets/Art/Protective_Life_logo.svg";
import gbcvb from "../assets/Art/gbcvb-logo.svg";
import southern from "../assets/Art/Southern_Company_logo_new.svg";
import regions from "../assets/Art/Regions-Financial-Logo.svg";


const Sponsors = () => {
    return(
        <section className="sponsers pt-10 pb-20">
            <div className="flex justify-center items-center mb-10">
              <h3 className="border-b-4 border-[#A7D06E] font-bold p-4">As Seen At</h3>
            </div>
            <div className="logos max-w-6xl flex justify-center items-center space-x-20 flex-wrap m-auto">
              <img className="grayscale my-5 max-h-15 mx-10 xl:m-auto" src={spire} alt="" />
              <img className="grayscale my-5 max-h-15 mx-10 xl:m-auto" src={protective} alt="" />
              <img className="grayscale my-5 max-h-15 mx-10 xl:m-auto" src={gbcvb} alt="" />
              <img className="grayscale my-5 max-h-15 mx-10 xl:m-auto" src={southern} alt="" />
              <img className="grayscale my-5 max-h-15 mx-10 xl:m-auto" src={regions} alt="" />
            </div>
          </section>
    )
}

export default Sponsors;