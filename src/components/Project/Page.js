import projects from "../../assets/data/projects.json";
import React, {useEffect} from "react";
import Texte from "./Texte";
import Illustration from "./Illustration";
import '../../css/Project/Projects.scss';


function Page() {

    return (
        projects.map((project) => (
            <div className="projet element" style={{ backgroundImage: `url('${project.background}')` }}>
                <div className="projet-text">
                    <Texte titre={project.titre} description={project.description} tags={project.tags}/>
                </div>
                <div className="projet-image-call">
                    <Illustration image={project.image} url={project.url} />
                </div>
            </div>
        ))
    );
}

export default Page;