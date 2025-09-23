const ExteriorServicesCards = (props) => {
    if (!props.flipped)
    {
        return (
            <>
                <img className="rounded-r-3xl aspect-16/9 w-full m-auto object-cover" src={`${props.img}`} alt="" />
                    <div className="mx-10 my-auto text-base/7">
                        <h3>{props.header}</h3>
                        <p>{props.text}</p>
                    </div>
            </>
        ) 
    }
    return (
        <>
            <div className="mx-10 my-auto text-base/7">
                <h3>{props.header}</h3>
                <p>{props.text}</p>
            </div>
            <img className="rounded-l-3xl aspect-16/9 w-full m-auto object-cover" src={`${props.img}`} alt="" />
        </>
    )
}

export default ExteriorServicesCards;