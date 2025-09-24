import Button from "./Button";

const Bio = (props) => {


  if (props.id === "home" || props.id === "about") {
    return(
        <section className="bio bg-[#D9EED9]">
            <div className={`flex justify-center items-center mx-auto top-[-20px] h-[40px] w-[40px] relative ${props.iconColor} rounded-full md:top-[-25px] md:h-[50px] md:w-[50px]`}>
               <img className="h-9 w-9" src="src/assets/Interiorscapes%20Submark.svg" alt="" />  
            </div>
   
            <div className=" mx-10 xl:mx-auto pb-20 space-y-10 xl:max-w-6xl">
              <h2 className="text-center font-bold text-xl md:text-3xl xl:mx-40">{props.header}</h2>
              <div className="font-extralight space-y-10">
                <p>{props.text1}</p>
                <p>{props.text2}</p>
                <p>{props.text3}</p>
              </div>
              <div className="text-center">
                <Button color={props.color} text="Contact Us" name="contact"/>
              </div>
            </div>
          </section>
    )
  } else if (props.id === "interior" || props.id === "exterior" || props.id === "florals-events" || props.id === "living-walls" || props.id === "holiday") {
  return (
    <section className="bio bg-[#D9EED9]">
            <div className={`flex justify-center items-center mx-auto top-[-20px] h-[40px] w-[40px] relative ${props.iconColor} rounded-full md:top-[-25px] md:h-[50px] md:w-[50px]`}>
               <img className="h-9 w-9" src="src/assets/Interiorscapes%20Submark.svg" alt="" />  
            </div>
   
            <div className=" mx-10 xl:mx-auto pb-20 space-y-10 xl:max-w-6xl">
              <h2 className="text-center font-bold text-xl md:text-3xl xl:mx-40">{props.header}</h2>
              <div className="font-extralight text-base/7">
                <p>{props.text1}</p>
                </div>
              <div className="text-center">
                <Button url={`/${props.id}-gallery`} className="text-center" color={props.color} text={`View ${props.name} Gallery`} name="gallery"/>
              </div>
            </div>
          </section>
  )
  }
    
}

export default Bio;