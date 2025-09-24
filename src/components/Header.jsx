import { Link } from "react-router";
import Button from "./Button";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu.jsx";
import logo from "../assets/logo.svg";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



    return (
        <div className=" flex justify-between items-center px-4 fixed top-0 left-0 right-0 bg-white z-100 shadow-md h-[77px]">
            <Link to="/" className="" onClick={() => {window.scroll(0, 0);}}><img  className="w-7/10 md:w-full" src={logo} alt="" /></Link>
            <nav className="block lg:hidden" >
            <a onClick={toggleMenu} className="lg:hidden block w-10 h-10">
              {isOpen ? <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M504.6 148.5C515.9 134.9 514.1 114.7 500.5 103.4C486.9 92.1 466.7 93.9 455.4 107.5L320 270L184.6 107.5C173.3 93.9 153.1 92.1 139.5 103.4C125.9 114.7 124.1 134.9 135.4 148.5L278.3 320L135.4 491.5C124.1 505.1 125.9 525.3 139.5 536.6C153.1 547.9 173.3 546.1 184.6 532.5L320 370L455.4 532.5C466.7 546.1 486.9 547.9 500.5 536.6C514.1 525.3 515.9 505.1 504.6 491.5L361.7 320L504.6 148.5z"/></svg> : <svg className="h-8 w-8 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/></svg>}
            </a>
            {isOpen &&  <DropdownMenu name="mobile" />}
            </nav>
            <nav className="lg:block hidden">
              <ul className="flex items-center gap-10">
                <li><Link to="/" className="hover:text-gray-500" onClick={() => {window.scroll(0, 0);}}>Home</Link></li>
                <li onMouseEnter={toggleMenu} onMouseLeave={() => setTimeout(toggleMenu, 100)} className="h-16 hover:text-gray-500 flex justify-center items-center"><a className="cursor-pointer">Services</a>   {isOpen && <DropdownMenu name="desktop" />}</li>
                <li><Link to="/about-us" className="hover:text-gray-500" onClick={() => {window.scroll(0, 0);}}>About Us</Link></li>
                <li>
                    <Button color="bg-florals" text="Contact Us" name="contact" />
                </li>
              </ul>

            </nav>
          </div>

    )
}

export default Header;