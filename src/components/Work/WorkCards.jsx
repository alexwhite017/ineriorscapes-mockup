import Button from "../button"

const WorkCards = (props) => {
    if (props.reverse) {
        return (
            <div className="relative mx-2 my-4 md:m-0 md:grid md:grid-cols-2 md:gap-20 md:mb-20">
              <div className="flex flex-col justify-center items-center text-center text-xs bg-gray-100/80 space-y-2 md:space-y-6 p-5 rounded-3xl max-h-2/3 max-w-2/3 inset-0 m-auto md:text-base md:p-0 md:bg-white md:m-auto md:max-w-100 absolute  md:relative md:top-0 ">
                <h3 className="font-bold text-m md:text-xl  ">{props.title}</h3>
                <p>{props.description}</p>
                <Button url={`/${props.url}`} color={`${props.color}`} text="Learn More" name="learn-more" />
              </div>
              <img className="max-h-100 min-h-70 rounded object-cover w-full md:rounded-l-2xl" src={`${props.image}`} alt="" />
            </div>
        )
    }


    return (
       <div className="relative mx-2 my-4 md:m-0 md:grid md:grid-cols-2 md:gap-20 md:mb-20">
              <img className="max-h-100 min-h-70 rounded object-cover w-full md:rounded-r-2xl " src={`${props.image}`} alt="" />
              <div className="flex flex-col justify-center items-center text-center text-xs bg-gray-100/80 space-y-2 md:space-y-6 p-5 rounded-3xl max-h-2/3 max-w-2/3 inset-0 m-auto md:text-base md:p-0 md:bg-white md:m-auto md:max-w-100 absolute  md:relative md:top-0 ">
                <h3 className="font-bold text-m md:text-xl ">{props.title}</h3>
                <p>{props.description}</p>
                <Button url={`/${props.url}`} color={`${props.color}`} text="Learn More" name="learn-more" />
              </div>
            </div>
    )
}

export default WorkCards