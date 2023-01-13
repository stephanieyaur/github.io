import { useEffect } from "react";
import NavBar from "../NavBar";
import projectsData from "../projectsData";

import "./Niantic.css";

const findProject = () => {
    for (var i=0; i < projectsData.length; i++){
        if (projectsData[i].name === "Niantic"){
            return projectsData[i];
        }
    }
}

const Niantic = () => {

    var project = findProject();

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
        <div className="projectApp">
            <NavBar selected={"projects"} />
            <div className="projectTop" id="nianticTop">
                <div style={{marginRight: "30px", maxWidth: "50%", textAlign: "left"}}>
                    <p className="title">{project.name}</p>
                    <p className="description">{project.description}</p>
                    <br/>
                    <div className="textInline"><p>position: </p><div className="button white">{project.position}</div></div>
                    <br/>
                    <div className="textInline"><p>skills: </p>{populateSkills()}</div>
                    <br />
                </div>
                <img className="mainImageSquare" id="nianticimage" src={project.mainImage} alt=""></img>
            </div>
            <div className="content">
            <div className="textSection">
                <h4>internship overview</h4>
                <p>I was a <b>full stack</b> software engineer intern for Niantic from June-September 2022 working on the <b>Pokemon Go</b> team. Throughout the internship, I worked on 2 main projects:</p>
                <ol>
                    <li><b>Ready to Raid button</b> - skip button that allows players to skip the two-minute countdown in raid lobbies.</li>
                    <li><b>Pokedex Search feature</b> - allows players to search for pokemon in pokedex by pokemon number</li>
                </ol>
            </div>
            <div className="textSection">
                <h4>NDA</h4>
                <p>Although my internship work best showcases my software skills, I cannot share images or give more than a general idea of my projects due to an NDA. Please reference other projects for more detailed examples of my work.</p>
            </div>            
            </div>
        </div>
    )
}

export default Niantic;