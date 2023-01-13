import { useEffect } from "react";
import NavBar from "../NavBar";
import projectsData from "../projectsData";

import "./Amex.css";

const findProject = () => {
    for (var i=0; i < projectsData.length; i++){
        if (projectsData[i].name === "American Express"){
            return projectsData[i];
        }
    }
}

const Amex = () => {

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
        <div className="amex">
            <NavBar selected={"projects"} />
            <div className="projectTop" id="amexTop">
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
            <div className="content">
            <div className="textSection">
                <h4>internship overview</h4>
                <p>I was a frontend software engineer intern for American Express from June-August 2021. I received the highest ratings possible in each evaluation category: leadership and programming skill. Throughout the internship, I worked on 2 main projects:</p>
                <ol>
                    <li><b>Customer 360 Onboarding Portal</b> - internal single-source codification of customer activity details.</li>
                    <li><b>Chatbot</b> - helps customers with questions or redirects</li>
                </ol>
            </div>
            <div className="textSection">
                <h4>NDA</h4>
                <p>Although my internship work best showcases my frontend skills, I cannot share images or give more than a general idea of my projects due to an NDA. Please reference other projects for more detailed examples of my work.</p>
            </div>            
            </div>
        </div>
    )
}

export default Amex;