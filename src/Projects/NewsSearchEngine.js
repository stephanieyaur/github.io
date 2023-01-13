import { useEffect, useState } from "react";
import projectsData from "../projectsData";
import NavBar from "../NavBar";
import Backend from "../project_images/news_search_engine/backend.jpg";
import Bash from "../project_images/news_search_engine/bash.jpg";
import EC2 from "../project_images/news_search_engine/ec2.jpg";

import "./NewsSearchEngine.css";

const findProject = () => {
    for (var i=0; i < projectsData.length; i++){
        if (projectsData[i].name === "News Search Engine"){
            return projectsData[i]
        }
    }
}

const NewsSearchEngine = () => {

    const project = findProject();
    const [skills, setSkills] = useState(null);

    useEffect(() => {
        if (project && project.skills){
            setSkills(project.skills.map((skill) => {
                return(
                    <div key={skill} className="button white">{skill}</div>
                    )
            }))
        }
    }, [project])


    return(
        <div className="newsSearchEngine">
            <NavBar selected={"projects"}/>
            <div className="projectTop" id="newsSearchEngineTop">
                <div style={{marginRight: "30px", maxWidth: "50%", textAlign: "left"}}>
                    <p className="title">{project.name}</p>
                    <p className="description">{project.description}</p>
                    <br/>
                    <div className="textInline"><p>position: </p><div className="button white">{project.position}</div></div>
                    <br/>
                    <div className="textInline"><p>skills: </p>{skills}</div>
                    <br />
                </div>
                <img className="mainImage" src={project.mainImage} alt=""></img>
            </div>
            <div className="content">
                <div className="textSection">
                    <h4>background</h4>
                    <p>As part of the Scalable Software Architectures class, we were tasked with creating a news search engine from scratch including retrieval of news articles, hosting the search engine, and creating the frontend.</p>
                </div>
                <div className="textSection">
                    <h4>customers</h4>
                    <p>News readers</p>
                </div>
                <div className="textSection">
                    <h4>the search engine</h4>
                    <p>The news search engine has three main components:</p>
                    <ol>
                        <li>News Article ETL</li>
                        <li>Backend Service</li>
                        <li>Search frontend</li>
                    </ol>
                    <p>Below is a video explaining the search engine. Enjoy!</p>
                </div>
                <div>
                    <div className="textAndImageContainer">
                        <div className="textSection leftPadding textVertical">
                            <h5>1. Search Frontend</h5>
                            <h6>tools: React.js, HTML, CSS, JavaScript</h6>
                            <p>The search frontend is the user interface that presents news article search results. It was created using React.js: HTML, CSS, and JavaScript, and hosted through AWS.</p>
                            <br/>
                            <p>Letters, numbers, and other symbols can be typed into the search bar and corresponding news article results come up. Each result includes a url, title, and description with search keywords bolded — when clicked, the result redirects you to the article.</p>
                            <br/>
                            <p>Each page shows up to 10 search results. </p>
                        </div>
                        <div className="imageContainer">
                            <div style={{display: "inline", textAlign: "center"}}>
                                <img src={project.mainImage} className="interface" alt=""></img>
                                <p>News Search ETL</p>
                            </div>
                        </div>
                    </div>
                    <div className="textAndImageContainer">
                        <div className="textSection leftPadding textVertical">
                            <h5>2. Backend Service</h5>
                            <h6>tools: Java</h6>
                            <p>The backend searches through a database of news articles and finds the relevant articles. We created a REST API to provide search functionality using Java.</p>
                            <br/>
                            <p>The backend API server is deployed to a Tomcat environment managed by AWS Elastic Beanstalk.</p>
                        </div>
                        <div className="imageContainer">
                            <div style={{display: "inline", textAlign: "center"}}>
                                <img src={Backend} className="interface" alt=""></img>
                                <p>Backend API server deployed to Tomcat environment</p>
                            </div>
                        </div>
                    </div>
                    <div className="textAndImageContainer">
                        <div className="textSection leftPadding textVertical">
                        <h5>3. News Article ETL</h5>
                        <h6>tools: Java, AWS Elasticsearch</h6>
                            <p>The ETL populates the database of news articles for the backend service to search through. </p>
                            <br/>
                            <p>The database  is intially a WARC file taken from a Common Crawl bucket. Every 2 hours, this ETL program downloads and posts the latest WARC file to an AWS Elastic Search database.</p>
                            <br/>
                            <p>The ETL program has 4 main steps: </p>
                            <ul>
                                <li>Download the WARC file</li>
                                <li>Post the WARC</li>
                                <li>Parse the HTML</li>
                                <li>Post each article as an object containing the url, title, description, and language to the  ElasticSearch database.</li>
                            </ul>
                            <br/>
                            <p>The ETL is deployed to an AWS EC2 Instance and run every 2 hours with a cron job, which was created with a bash script.</p>
                        </div>
                        <div className="imageContainer">
                            <div style={{display: "inline", textAlign: "center"}}>
                                <img src={EC2} className="interface" alt=""></img>
                                <p>Cron job runs the ETL every 2 hours</p>
                                <br />
                                <img src={Bash} className="interface" alt=""></img>
                                <p>Cron job's bash script</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsSearchEngine;