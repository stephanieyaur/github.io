import './Projects.css';
import React, { useEffect, useState } from 'react';
import projectsData from './projectsData';
import NavBar from './NavBar';
import { Fragment } from 'react';
import { Link } from "react-router-dom";

const Projects = () => {

    const [modal, setModal] = useState(false);
    const [clickedProject, setClickedProject] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const skillsString = (arr) => {
        let string = "";
        for (var i = 0; i < arr.length; i++) {
            if (i === 0){
                string += arr[i]
            }
            else{
                string += ", " + arr[i]
            }
        }
        return string;
    }

    const projectsDataArr = projectsData.map((project) => {
        return(
            <div key={project.name} className="projectItem" onClick={() => {setClickedProject(project); setModal(true)}}>
                <img src={project.backgroundImage} className="backgroundImage" alt=""></img>
                <div className="hoverLayer">
                    <div>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                    </div>
                </div>
            </div>
        )    
    })

    return (
        <Fragment>
            <NavBar selected={"projects"}/>
            <div className="page">
                <h1>Projects</h1>
                <div className="inlineFlex">
                    {projectsDataArr}
                </div>

                { modal ? 
                    <div className="modal">
                        <div className="x" onClick={() => setModal(false)}><p>X</p></div>
                        <div className="inlineFlex">
                            <div style={{marginRight: "30px", maxWidth: "50%"}}>
                                <p className="title">{clickedProject.name}</p>
                                <p className="description">{clickedProject.description}</p>
                                <br/>
                                <b>Position: </b>
                                <p>{clickedProject.position}</p>
                                <b>Skills: </b>
                                <p>{skillsString(clickedProject.skills)}</p>
                                <br />
                                {/* <Button variant="contained" style={{backgroundColor: '#FF9B8E', color: 'rbg(0,0,0)', }}>read more</Button> */}
                                <Link to={clickedProject.url}><div className="button primary"><p>read more</p></div></Link>
                            </div>
                            <img className="mainImage" src={clickedProject.mainImage} alt=""></img>
                        </div>
                    </div>
                : null}
            </div>
        </Fragment>
    )
}

export default Projects;