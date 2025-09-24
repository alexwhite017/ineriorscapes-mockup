import { Page } from "react-facebook";
import Button from "./Button";

const Timeline = () => {

    return (
        <div className="flex flex-col md:grid grid-cols-3">
            <div className="contact-us p-5 bg-gray-200 flex justify-center items-center text-left flex-col font-extralight">
                <div className="max-w-[400px] px-3">
                    <img className="w-3/4 m-auto sm:w-full md:w-3/4 lg:w-full" src="src/assets/logo.svg" alt="" />
                    <p className="pb-6 text-sm sm:text-base md:text-sm lg:text-base">Keeping your company green and beautiful has been our business and passion for more than 40 years.</p>
                    <span className="italic text-sm sm:text-base md:text-sm lg:text-base"><i className="fa-solid fa-phone"></i> (205) 942-7175</span>
                    <br />
                    <span className="italic text-sm sm:text-base md:text-sm lg:text-base"><i className="fa-solid fa-envelope"></i> interiorscapes@interiorscapesinc.com</span>
                    <br />
                    <span className="italic text-sm sm:text-base md:text-sm lg:text-base"><i className="fa-solid fa-location-dot"></i> 115-E Walter Davis Drive</span>
                    <br />
                    <span className="italic text-sm sm:text-base md:text-sm lg:text-base">Birmingham, AL 35209</span>
                    <div className="socials flex space-x-3 pt-3">
                        <a className="flex h-6 w-6  sm:h-8 sm:w-8  md:h-6 md:w-6 lg:h-8 lg:w-8 rounded-full bg-[#ADD161]" href="#"><i className="fa-brands fa-facebook-f m-auto text-white hover:text-gray-500"></i></a>
                        <a className="flex h-6 w-6  sm:h-8 sm:w-8  md:h-6 md:w-6 lg:h-8 lg:w-8 rounded-full bg-[#ADD161]" href="#"><i className="fa-brands fa-twitter m-auto text-white hover:text-gray-500"></i></a>
                        <a className="flex h-6 w-6  sm:h-8 sm:w-8  md:h-6 md:w-6 lg:h-8 lg:w-8 rounded-full bg-[#ADD161]" href="#"><i className="fa-brands fa-pinterest-p m-auto text-white hover:text-gray-500"></i></a>
                        <a className="flex h-6 w-6  sm:h-8 sm:w-8  md:h-6 md:w-6 lg:h-8 lg:w-8 rounded-full bg-[#ADD161]" href="#"><i className="fa-brands fa-linkedin-in m-auto text-white hover:text-gray-500"></i></a>
                        <a className="flex h-6 w-6  sm:h-8 sm:w-8  md:h-6 md:w-6 lg:h-8 lg:w-8 rounded-full bg-[#ADD161]" href="#"><i className="fa-brands fa-youtube m-auto text-white hover:text-gray-500"></i></a>
                        <a className="flex h-6 w-6  sm:h-8 sm:w-8  md:h-6 md:w-6 lg:h-8 lg:w-8 rounded-full bg-[#ADD161]" href="#"><i className="fa-brands fa-instagram m-auto text-white hover:text-gray-500"></i></a>
                    </div>
                </div>
            </div>
            <div className="relative timeline h-100 md:h-auto " >
                <div className="absolute inset-0 z-0 opacity-30" style={{backgroundImage: "url('src/assets/Art/topograph.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
                </div>
                <div className="bg-[#D9EED9] h-full w-full">
                </div>
                <div className="absolute inset-0 z-30 flex justify-center items-center">
                    <Button text="VIEW OUR TIMELINE" color="bg-exterior" url="/timeline" /> 
                </div>
                <div className="absolute inset-0 z-10 grid grid-cols-2">
                    <div className="border-r-2 border-exterior h-full"></div>
                    <div className="border-l-2 border-exterior h-full"></div>
                </div>
                <div className="absolute inset-0 z-20 grid grid-rows-2">
                    <div className=" flex justify-center z-20 items-center">
                        <div className="bg-white border-2 h-5 w-5 rounded-full border-exterior"></div>
                    </div>
                    <div className=" flex justify-center z-20 items-center">
                        <div className="bg-white border-2 h-5 w-5 rounded-full border-exterior"></div>
                    </div>
                </div>

                <div className="absolute inset-0 z-20 grid grid-cols-2">
                    <div className="flex justify-center items-center">
                        <p className="text-florals font-semibold">Past</p>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                    <div className="flex justify-center items-center">
                        <p className="text-florals font-semibold">Present</p>
                    </div>
                </div>

                <div className="absolute inset-0 z-20 grid grid-cols-2">
                    <div className="grid grid-cols-2 gap-x-14 mr-2">
                        <div className=""></div>
                        <div className="border-b-2 border-exterior"></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div></div>
                    <div></div>
                    <div className="grid grid-cols-2 gap-x-20 ml-2">
                        <div className="border-b-2 border-exterior"></div>
                        <div className=""></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                

            </div>

            <div className="facebook w-full flex flex-col ">
                <div className="bg-[#64B0B6] py-5 px-10 w-full text-center ">
                    <h3 className="text-white font-bold">Find Us On Facebook</h3>
                </div>
                <div className="comments flex justify-center ">
                    <Page 
                        href="https://www.facebook.com/Interiorscapes"
                        tabs="timeline"
                        width={256}
                        height="400"
                        smallHeader={true}
                        hideCover={false}
                        showFacepile={false}
                    />

                </div>
                
                
            </div>

        </div>
    )
}

export default Timeline;

/* 

*/