import "./style.css";
import ModelImpl from "../modelCard/ModelImpl";

const Project = (props) => {
    return (
        <li className="project">
            <ModelImpl className={props.title} model={props.img}><canvas style={{borderRadius: "10px"}} className={props.title}></canvas></ModelImpl>
            <a href="./project-page.html">
                {/* <img src={props.img} alt={props.title} className="project__img"/> */}
                <h3 className="project__title">{props.title}</h3>
            </a>
        </li>
    );
}

export default Project;