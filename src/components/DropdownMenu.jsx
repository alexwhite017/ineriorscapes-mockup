import { Link } from "react-router";

const DropdownMenu = (props) => {

    if (props.name==="desktop") {
        return (
        <div className="absolute bg-[#435125] w-48 rounded-b-md top-[51px]">
            <ul className="">
                <li className="h-[26px] bg-white"></li>
                <Link to="/interior" className={` py-2 rounded  text-white font-semibold `}
                    onClick={() => {
                    window.scroll(0, 0);
                    }}><li className="px-4 py-2 hover:bg-[#567635]">Interior</li></Link>
                <Link to="/exterior" className={` py-2 rounded  text-white font-semibold `}
                    onClick={() => {
                    window.scroll(0, 0);
                    }}><li className="px-4 py-2 hover:bg-[#567635]">Exterior</li></Link>
                <Link to="/florals-events" className={` py-2 rounded text-white font-semibold `}
                    onClick={() => {
                    window.scroll(0, 0);
                    }}><li className="px-4 py-2 hover:bg-[#567635]">Florals / Events</li></Link>
                <Link to="/living-walls" className={` py-2 rounded text-white font-semibold `}
                    onClick={() => {
                    window.scroll(0, 0);
                    }}><li className="px-4 py-2 hover:bg-[#567635]">Living Walls</li></Link>
                <Link to="/holiday" className={` py-2 rounded text-white font-semibold `}
                    onClick={() => {
                    window.scroll(0, 0);
                    }}><li className="px-4 rounded-b-md py-2 hover:bg-[#567635]">Holiday</li></Link>
            </ul>
        </div>
        )
    } else {
        return (
        <div className="absolute bg-[#435125] w-full left-0 rounded-b-md top-[77px]">
            <ul className="">
               
                <Link to="/Home" className={` py-4 rounded  text-white font-semibold `}
                    onClick={() => {
                    window.scroll(0, 0);
                    }}><li className="text-center mx-4 py-2 border-b hover:bg-[#567635]">Home</li></Link>
                

                <Link to="/interior" className={` py-4 rounded  text-white font-semibold `}
                    onClick={() => {
                    window.scroll(0, 0);
                    }}><li className="text-center mx-4 py-2 border-b hover:bg-[#567635]">Interior</li></Link>
                <Link to="/exterior" className={` py-4 rounded  text-white font-semibold `}
                    onClick={() => {
                    window.scroll(0, 0);
                    }}><li className="text-center mx-4 py-2 border-b hover:bg-[#567635]">Exterior</li></Link>
                <Link to="/florals-events" className={` py-4 rounded text-white font-semibold `}
                    onClick={() => {
                    window.scroll(0, 0);
                    }}><li className="text-center mx-4 py-2 border-b hover:bg-[#567635]">Florals / Events</li></Link>
                <Link to="/living-walls" className={` py-4 rounded text-white font-semibold `}
                    onClick={() => {
                    window.scroll(0, 0);
                    }}><li className="text-center mx-4 py-2 border-b hover:bg-[#567635]">Living Walls</li></Link>
                <Link to="/holiday" className={` py-4 rounded text-white font-semibold `}
                    onClick={() => {
                    window.scroll(0, 0);
                    }}><li className="text-center mx-4 py-2 border-b hover:bg-[#567635]">Holiday</li></Link>
                <Link to="/about" className={` py-4 rounded  text-white font-semibold `}
                    onClick={() => {
                    window.scroll(0, 0);
                    }}><li className="text-center mx-4 py-2 hover:bg-[#567635]">About Us</li></Link>
                
            </ul>
        </div>
        )
    }
    
}

export default DropdownMenu;

