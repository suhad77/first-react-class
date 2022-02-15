import './Style.css';
const Accordion = (props) =>{
    return(
        <div className="container">
            <h1>{props.heading}</h1>
        <p>{props.text}</p>
        </div>
    )
}


{/* <div className="container">
            <h1>{props.heading}</h1>
        <p>{props.text}</p>
        </div> */}




export default Accordion;