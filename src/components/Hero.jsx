import Button from "./button";

const Hero = (props) => {
    return (
         <section className="w-full aspect-[4/3] bg-cover bg-center flex flex-col justify-center items-center text-white text-center p-4 mt-[77px] sm:aspect-[9/3]" style={{ backgroundImage: `url('${props.image}')` }}>
            <div className=" flex flex-col justify-center items-center sm:w-1/2 space-y-6 2xl:w-1/3  lg:w-1/3 ">
              <h1 className="text-4xl font-extrabold 2xl:text-6xl xl:text-5xl sm:text-4xl">{props.text}</h1>
              <Button color={props.color} text="Contact Us" name="contact"/>
            </div>
          </section>
    )
}

export default Hero;