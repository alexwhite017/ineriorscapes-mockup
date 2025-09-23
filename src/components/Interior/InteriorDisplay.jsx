import InteriorCard from "./InteriorCard";
const InteriorDisplay = () => { 
    return (
         <section className="interiorDisplay max-w-6xl mx-auto my-20">
                        <h2 className="font-bold text-2xl text-center">Standard Interior Plant Services</h2>
                        <div className=" md:grid md:grid-cols-2 md:gap-20 mt-10">
                            <InteriorCard 
                                image="src/assets/Art/2-1.jpeg"
                                title="Plantscape Design, Delivery & Installation"
                                description="Everything we do is completely tailored to your unique space and desires"
                            /> 

                            <InteriorCard
                                image="src/assets/Art/51027730571_37be3837e3_b.jpeg"
                                title="Plant Replacement Guarantee"
                                description="We guarantee your plants will look their best, and will replace ones that fall short at no charge to you"
                            />

                            <InteriorCard
                                image="src/assets/Art/idtPtCDXoP-WgAAAAAAAKzRQ_w1024h768_c0.jpeg"
                                title="Interior Plant Maintenance"
                                description="This includes but is not limited to watering, pruning, fertilization, pest control and cleaning of plants and planters. our maintenance crew comes to your space either weekly or bi-weekly.
                                            We want your plants to always look their best."
                            />

                            <InteriorCard
                                image="src/assets/Art/color%20rotation.jpg"
                                title="Color Rotation"
                                description="In addition to regular plant maintenance, we can design, deliver and install a rotation of seasonal blooming plants and unique botanicals six times per year. This keeps your interior spaces looking new and different for each season."
                            />
                        </div>
                        <h2 className="font-bold text-2xl text-center my-10">Additional Interior Plant Services</h2>
                        <div className="mx-5 md:mx-10">
                            <img className="rounded-3xl aspect-16/9 m-auto" src="src/assets/Art/46782710775_f5b3f685a1_b.jpeg" alt="" />
                            <div className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-20 mt-10 mx-2 text-center text-sm md:text-base">
                                <p><strong>Living Walls:</strong> A living wall (or green wall) is a vertical planting that can exist either inside or outdoors. Interiorscapes is delighted to have the experience and expertise to offer living wall
                                    consultation, design, installation and maintenance. View some of our favorite living walls.</p>
                                <p><strong>Replica Plants:</strong> For clients who have environments where living plants can't thrive, we offer life-like replica plants to bring a touch of nature into an otherwise barren place.
                                    We make sure the replica plants we use are so natural and tasteful that it is difficult to tell the difference.</p>
                                <p><strong>Weekly or Bi-Weekly Floral Arrangements:</strong> We routinely deliver fresh cut live or dried floral arrangements to many of our clients. From large buffet arrangements and centerpieces to small bud vases or tables
                                    , we create a different floral design for each delivery. We utilize our large selection of vases, decorative rocks, beads and floating elements to incorporate into our designs. Each week is a completely fresh look.
                                    View some of our favorite floral arrangements.</p>
                                <p><strong>Plantscape Leasing:</strong> For clients who are not able or do not want to purchase plants up front, we offer a leasing program. All of our lease contracts include the custom design, delivery, installation and regular interior plant maintenance program as well.</p>
                            </div>
                        </div>
                        

                    </section>
    )
}

export default InteriorDisplay;