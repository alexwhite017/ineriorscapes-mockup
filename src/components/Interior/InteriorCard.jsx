const InteriorCard = (props) => {
    return (
        <div className="flex flex-col justify-center items-center mx-5 md:mx-10 my-15 md:my-0">
            <img className="rounded-3xl max-h-[300px] aspect-3/2 object-cover" src={props.image} alt="" />
            <h3 className="font-bold text-lg md:text-xl mt-4 mb-2 text-center">{props.title}</h3>
            <p className="text-sm md:text-base text-center md:text-left">{props.description}</p>
        </div>
    )
}

export default InteriorCard;