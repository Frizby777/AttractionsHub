
import project02 from "./../img/projects/02.jpg"
import project03 from "./../img/projects/03.jpg"
import project04 from "./../img/projects/04.jpg"
import project05 from "./../img/projects/05.jpg"
import project06 from "./../img/projects/06.jpg"
import ModelImpl from "./../components/modelCard/ModelImpl";
import Project from "../components/project/Project";
import {projects} from "../helpers/projectsList";

const Projects = () => {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1"></h2>
                <ul className="projects">
                    {projects.map((project, index) => {
                        return (
                            <Project key={index} title={project.title} img={project.img}/>
                        );
                    })}

                    
                    {/* <li className="project">
                        <a href="./project-page.html">
                            <img src={project02} alt="Project img" className="project__img" />
                            <h3 className="project__title">Video service</h3>
                        </a>
                    </li>
                    <li className="project">
                        <a href="./project-page.html">
                            <img src={project03} alt="Project img" className="project__img" />
                            <h3 className="project__title">Video portal</h3>
                        </a>
                    </li>

                    <li className="project">
                        <img src={project04} alt="Project img" className="project__img" />
                        <h3 className="project__title">Dating app</h3>
                    </li>
                    <li className="project">
                        <img src={project05} alt="Project img" className="project__img" />
                        <h3 className="project__title">Landing</h3>
                    </li>
                    <li className="project">
                        <img src={project06} alt="Project img" className="project__img" />
                        <h3 className="project__title">Gaming community</h3>
                    </li> */}

                </ul>
            </div>
        </main>
    );
}

export default Projects;