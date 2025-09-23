import ExteriorServicesCards from "./ExteriorServicesCards";

const ExteriorServices = () => {
    return (
        <section className="details">
            <h2 className="text-center my-10">Standard Exterior Landscape Services</h2>
                {/*<div className="grid grid-cols-2 gap-10 mb-20" >
                        <ExteriorServicesCards flipped={false} img="src/assets/Art/IMG_0855-1536x934.jpeg" header="Seasonal Color Bed and Color Bowls" text="Our professional horticulturists create a custom seasonal plan and design custom plant beds and/or color bowls with careful consideration given to the light, soil and placement of each plant." />
                        <ExteriorServicesCards flipped={true} img="src/assets/Art/ross-bridge-fountain-e1679507266315.jpg" header="Seasonal Plant Bed and Color Bowl Maintenance" text="This includes watering, pest control, pruning, deadheading and fertilization. Our plant maintenance crew comes to your property twice per week during the spring and summer seasons, as needed in the fall and once during the winter. We make sure your color beds and bowls continue to look as stunning as the first day they were planted."/>
                        <ExteriorServicesCards flipped={false} img="src/assets/Art/AC314CC6-636E-4C92-9E8F-0932CBD2C4B7_1_201_a.jpeg" header="Turf Management and Tree / Shrub Care" text="Turf Management: This service includes mowing, edging, weed control and fertilization of grassy areas in your landscape. We want to keep your grass looking green and pristine all season.
                            Tree and Shrub Care: This service includes fertilization, pruning, shaping and pest. control. We make sure trees and shrubs are properly cared for according to their unique season cycles." />
                </div> */}
                <div className="flex flex-wrap gap-20 justify-center items-center mb-20 mx-10">
                    <div className=" bg-soft-green rounded-3xl p-10 max-w-3xl">
                        <img src="src/assets/Art/IMG_0855-1536x934.jpeg" alt="" className="rounded-3xl aspect-16/9 w-full m-auto object-cover" />
                        <h3 className="text-center mt-10">Seasonal Color Beds and Color Bowls</h3>
                        <p className="max-w-2xl text-center items-center justify-center m-auto">Our professional horticulturists create a custom seasonal plan and design custom plant beds and/or color bowls with careful consideration given to the light, soil and placement of each plant.</p>
                    </div>

                    <div className=" bg-walls rounded-3xl p-10 max-w-3xl">
                        <img src="src/assets/Art/ross-bridge-fountain-e1679507266315.jpg" alt="" className="rounded-3xl aspect-16/9 w-full m-auto object-cover" />
                        <h3 className="text-center mt-10">Seasonal Plant Bed and Color Bowl Maintenance</h3>
                        <p className="max-w-2xl text-center items-center justify-center m-auto">This includes watering, pest control, pruning, deadheading and fertilization. Our plant maintenance crew comes to your property twice per week during the spring and summer seasons, as needed in the fall and once during the winter. We make sure your color beds and bowls continue to look as stunning as the first day they were planted.</p>
                    </div>

                    <div className=" bg-holiday rounded-3xl p-10 max-w-3xl">
                        <img src="src/assets/Art/AC314CC6-636E-4C92-9E8F-0932CBD2C4B7_1_201_a.jpeg" alt="" className="rounded-3xl aspect-16/9 w-full m-auto object-cover" />
                        <h3 className="text-center mt-10">Turf Management and Tree / Shrub Care</h3>
                        <p className="max-w-2xl items-center justify-center m-auto text-left"><strong>Turf Management: </strong>This service includes mowing, edging, weed control and fertilization of grassy areas in your landscape. We want to keep your grass looking green and pristine all season. <br />
                            <strong>Tree and Shrub Care: </strong>This service includes fertilization, pruning, shaping and pest control. We make sure trees and shrubs are properly cared for according to their unique season cycles.</p>
                    </div>
                </div>


        </section>
    )
}

export default ExteriorServices;