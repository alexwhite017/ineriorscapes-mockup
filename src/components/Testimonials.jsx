import { useState } from 'react';

const Testimonials = (props) => {

  const data = [
    {
        header: "I give the Interiorscapes team my highest recommendation.",
        body: "There is probably no one in our great city of Birmingham that can do a better job for us here at The John Hand Club and Hotel! During the many years that INTERIORSCPAES has worded with us, they are creative, execute fast and the knowledge of design is a valuable asset to me and our JHC Membership. The Members love our understated holiday/corporate look that they have created for years.",
        author: "-- Charbett Cauthen",
        position: "Club Manager, John Hand Club"
    },
    {
        header: "After almost 30 years of working with the Interiorscapes team, my opinion remains the same. Outstanding! They continue to impress me.",
        body: "The entire team is incredibly talented, knowledgeable, dependable, and consistent. I especially enjoy working with them on new installations, as they listen to their customers and exceed expectations by mixing up plants and flowers and the result is a true work of art!",
        author: "-- Kathy Huckabay CPM, RPA",
        position: "Senior Director, Colliers"
    },
    {
       header: "I have always been happy with the Interiorscapes' services!",
        body: "Their designers and installers always listen to me and do their best to find the unusual plants and aesthetics that I am searching for. Being an architect and interior designer; I am very picky and always want plants out of the ordinary.",
        author: "-- Tammy Cohen",
        position: "President, CCR Architecture & Interiors"
    },
    {
        header: "Interiorscapes people, product, and service are all gamechangers for our resort.",
        body: "Their beautiful plants/arrangements/flowers greet our guests at every turn and enhance their experience of our resort. Interiorscapes has helped us elevate our service to our guests and create an unforgettable experience in the process.",
        author: "-- Jonathan C. McKinney, CMP",
        position: "Director of Sales & Marketing, Renaissance Ross Bridge Golf Resort & Spa"
    },
    {
        header: "I wouldn't use any other service!",
        body: "Interiorscapes always goes above and beyond with starting with the smallest details to make the biggest difference improvements! Their staff is always so personable and willing to give it 110%. The ownership takes so much pleasure and pride to ensure satisfaction.",
        author: "-- Star Jennings",
        position: "Regional Manager, Farris Properties"
    }
];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextIndex = () => {
    if (currentIndex === data.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  }

  const prevIndex = () => {
    if (currentIndex === 0) {
      return setCurrentIndex(data.length - 1);
    }
    return setCurrentIndex(currentIndex - 1);
  }

  /* const infityScroll = () => {
    if (currentIndex === data.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);

  } */

  /* useEffect(() => {
    const interval = setInterval(() => {
      infityScroll();
    }, 8000);
    return () => clearInterval(interval);
  }) */


    return (
        <section className="testimonials bg-[#EEEEEE]">
            <div className={`flex mx-auto top-[-20px] h-[40px] w-[40px] md:top-[-25px] md:h-[50px] md:w-[50px] relative ${props.color} rounded-full `}>
              <svg className="m-auto h-[30px] w-[30px] xl:h-[40px] xl:w-[40px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M96 280C96 213.7 149.7 160 216 160L224 160C241.7 160 256 174.3 256 192C256 209.7 241.7 224 224 224L216 224C185.1 224 160 249.1 160 280L160 288L224 288C259.3 288 288 316.7 288 352L288 416C288 451.3 259.3 480 224 480L160 480C124.7 480 96 451.3 96 416L96 280zM352 280C352 213.7 405.7 160 472 160L480 160C497.7 160 512 174.3 512 192C512 209.7 497.7 224 480 224L472 224C441.1 224 416 249.1 416 280L416 288L480 288C515.3 288 544 316.7 544 352L544 416C544 451.3 515.3 480 480 480L416 480C380.7 480 352 451.3 352 416L352 280z"/></svg>
            </div>
            <div className="flex gap-6 pb-10">
              <div className="ml-2 md:flex-1 flex justify-end items-center"><svg onClick={prevIndex} className="cursor-pointer h-5 w-5 md:h-8 md:w-8 xl:h-10 xl:w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M73.4 297.4C60.9 309.9 60.9 330.2 73.4 342.7L233.4 502.7C245.9 515.2 266.2 515.2 278.7 502.7C291.2 490.2 291.2 469.9 278.7 457.4L173.3 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L173.3 288L278.7 182.6C291.2 170.1 291.2 149.8 278.7 137.3C266.2 124.8 245.9 124.8 233.4 137.3L73.4 297.3z"/></svg></div>
              
              
              
              <div className="md:flex-4 xl:flex-3 relative overflow-hidden text-center xl:max-w-5xl items-center  xl:mx-auto space-y-4">
                <div className="text-carousel w-full overflow-hidden relative">
                  <div className="carousel-track flex w-100/10 overflow-hidden">
                    {data.map((item, index) => (
                      <div className="carousel-slide w-1/10 flex flex-col flex-shrink-0 justify-between xl:px-6 xl:space-y-4" key={index} style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 0.5s ease-in-out' }} >
                        <h3 className="font-bold text-xs sm:text-base md:text-lg xl:text-xl">{item.header}</h3>
                        <div className="font-extralight text-xs sm:text-sm md:text-base xl:text-base">
                          <p>{item.body}</p>
                        </div>
                        <div className="text-center">
                          <h4 className="font-bold text-xs sm:text-sm md:text-base xl:text-base text-[#627C47]">{item.author}</h4>
                          <p className="font-extralight italic text-xs sm:text-sm md:text-base xl:text-base">{item.position}</p>
                        </div>
                      </div>
                    ))}
                   
                  </div>
                   
                </div>
                <div className="dots flex justify-between w-40 mx-auto pt-4">
                      {data.map((data, index) => (
                        <button
                          key={index}
                          className={`dot cursor-pointer h-3 w-3 rounded-full  ${currentIndex === index ? 'bg-gray-300' : 'bg-gray-500'}`}
                          onClick={() => setCurrentIndex(index)}
                        />
                      ))}
                    </div>
              </div>


            <div className="mr-2 md:flex-1 flex items-center "><svg onClick={nextIndex} className="cursor-pointer h-5 w-5  md:h-8 md:w-8 xl:h-10 xl:w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"/></svg></div>            
            </div>
            
            
          </section>
    )
}

export default Testimonials;