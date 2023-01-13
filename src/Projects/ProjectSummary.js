import { useEffect, useState } from "react";
import projectsData from "../projectsData";

import "./FreedomLink.css";

const findProject = () => {
    for (var i=0; i < projectsData.length; i++){
        if (projectsData[i].name == "Freedom Link"){
            return projectsData[i]
        }
    }
}

const FreedomLink = () => {

    const [project, setProject] = useState(findProject());
    const [skills, setSkills] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        if (project && project.skills){
            setSkills(project.skills.map((skill) => {
                return(
                    <div className="button white">{skill}</div>
                    )
            }))
        }
    }, project)

    return(
        <div>
            <div className="projectTop">
                <div style={{marginRight: "30px", maxWidth: "50%", textAlign: "left"}}>
                    <p className="title">{project.name}</p>
                    <p className="description">{project.description}</p>
                    <br/>
                    <div className="textInline"><p>position: </p><div className="button white">{project.position}</div></div>
                    <br/>
                    <div className="textInline"><p>skills: </p>{skills}</div>
                    <br />
                </div>
                <img className="mainImage" src={project.mainImage} alt="project image"></img>
            </div>
        </div>
    )
}

export default FreedomLink;