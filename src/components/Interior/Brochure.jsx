import Button from "../Button";
const Brochure = () => {
    return (
        <section>
            <div className="flex flex-col justify-center h-auto  md:flex-row md:h-20 gap-5 items-center bg-[#D9EED9] mb-20 py-5 md:py-0">
                <img className=" w-30" src="src/assets/art/Brochure-Screenshot.png" alt="" />
                <h2 className="text-center md:my-10">For More Information on Interiorscapes Interiors</h2>
                <Button url="contact" color="bg-interior" text="CHECK OUT OUR BROCHURE" name="brochure" />
            </div>
        </section>
    )
}

export default Brochure;