import Button from "../button.jsx";
const WorkCardsMini = (props) => {
    return (
        <div className="work-card-mini flex flex-col justify-center items-center text-center">
            <img className="h-40 aspect-3/2 object-cover rounded-3xl" src={`${props.image}`} alt="" />
            <h3 className="my-4">{props.title}</h3>
            <Button url={props.url} color={props.color} text="LEARN MORE" name="learn-more" />
        </div>
    )
}

export default WorkCardsMini;