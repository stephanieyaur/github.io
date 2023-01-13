import { useEffect } from "react";
import NavBar from "../NavBar";
import projectsData from "../projectsData";

import "./FreedomLink.css";

const findProject = () => {
    for (var i=0; i < projectsData.length; i++){
        if (projectsData[i].name === "Philips"){
            return projectsData[i]
        }
    }
}

const Philips = () => {

    const project = findProject();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const populateSkills = () => {
        var skills = null;
        if (project && project.skills){
            skills = (project.skills.map((skill) => (
                    <div key={skill} className="button white">{skill}</div>
                    )));
        }
        return skills;
    }

    return(
        <div>
            <NavBar selected={"projects"} />
            <div className="projectTop">
                <div style={{marginRight: "30px", maxWidth: "50%", textAlign: "left"}}>
                    <p className="title">{project.name}</p>
                    <p className="description">{project.description}</p>
                    <br/>
                    <div className="textInline"><p>position: </p><div className="button white">{project.position}</div></div>
                    <br/>
                    <div className="textInline"><p>skills: </p>{populateSkills()}</div>
                    <br />
                </div>
                <img className="mainImageSquare" src={project.mainImage} alt=""></img>
            </div>
        </div>
    )
}

export default Philips;