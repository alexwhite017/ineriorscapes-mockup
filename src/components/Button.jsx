import { Link } from "react-router"

const Button = (props) => {
  if (props.name === "contact"){
    return ( 
      <a href="tel:205-972-7175" className={`px-4 py-2 rounded ${props.color} text-white text-transform: uppercase font-extrabold hover:scale-105 transition-transform duration-200 ease-in-out `}
        onClick={() => {
          window.scroll(0, 0);
        }}>
        {props.text} <i className="fa-solid fa-phone-flip opacity-50 "></i> </a>

    )
  } else if (props.name === "learn-more"){
    return (
      <Link to={props.url} className={`px-4 py-2 rounded ${props.color} text-white text-transform: uppercase font-extrabold hover:scale-105 transition-transform duration-200 ease-in-out  `}
        onClick={() => {
          window.scroll(0, 0);
        }}>
        {props.text} 
        <i className="fa-solid fa-circle-right opacity-50"></i>
        </Link>
    )
  } else if (props.name === "brochure"){
    return (
      <Link to={props.url} className={`px-2 py-1 text-sm md:test-base md:px-4 md:py-2 rounded ${props.color} text-white text-transform: uppercase font-extrabold hover:scale-105 transition-transform duration-200 ease-in-out `} 
        onClick={() => {
          window.scroll(0, 0);
        }}>
        {props.text} 
        <i className="fa-solid fa-arrow-up-right-from-square opacity-50"></i>
      </Link>
    )
  }

  else if (props.name === "footer") {
    return (
      <Link to={props.url} className={`px-3 py-2 rounded ${props.color} text-white text-sm text-transform: uppercase font-extrabold hover:scale-105 transition-transform duration-200 ease-in-out `}
        onClick={() => {
          window.scroll(0, 0);
        }}>
        {props.text} <i className="fa-solid fa-phone-flip opacity-50"></i></Link>
    )
  }

  return (
    <Link to={props.url} className={`px-4 py-2 rounded ${props.color} text-white text-transform: uppercase font-extrabold hover:scale-105 transition-transform duration-200 ease-in-out `}
      onClick={() => {
      window.scroll(0, 0);
      }}>
    {props.text} <i className="fa-regular fa-images opacity-50"></i></Link>
  )

  
}

export default Button
