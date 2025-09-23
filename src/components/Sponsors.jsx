const Sponsors = () => {
    return(
        <section className="sponsers pt-10 pb-20">
            <div className="flex justify-center items-center mb-10">
              <h3 className="border-b-4 border-[#A7D06E] font-bold p-4">As Seen At</h3>
            </div>
            <div className="logos max-w-6xl flex justify-center items-center space-x-20 flex-wrap m-auto">
              <img className="grayscale my-5 max-h-15 mx-10 xl:m-auto" src="src/assets/art/spire_inc_logo.svg" alt="" />
              <img className="grayscale my-5 max-h-15 mx-10 xl:m-auto" src="src/assets/art/protective_life_logo.svg" alt="" />
              <img className="grayscale my-5 max-h-15 mx-10 xl:m-auto" src="src/assets/art/Gbcvb-logo.svg" alt="" />
              <img className="grayscale my-5 max-h-15 mx-10 xl:m-auto" src="src/assets/art/southern_company_logo_new.svg" alt="" />
              <img className="grayscale my-5 max-h-15 mx-10 xl:m-auto" src="src/assets/art/regions-financial-logo.svg" alt="" />
            </div>
          </section>
    )
}

export default Sponsors;