import { useEffect, useState } from "react";
import NavBar from "../NavBar";
import projectsData from "../projectsData";

import "./WeatherApp.css";

const findProject = () => {
    for (var i=0; i < projectsData.length; i++){
        if (projectsData[i].name === "Weather App"){
            return projectsData[i]
        }
    }
}

const WeatherApp = () => {

    const project = findProject();
    const [skills, setSkills] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

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
        <div className="weatherApp">
            <NavBar selected={"projects"} />
            <div className="projectTop" id="weatherAppTop">
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
                    <p>To showcase our knowledge of web development technologies - React, hosting through Heroku, and API usage - my team and I chose to create a weather web app. Our project choice is outlined in the “understanding the problem” section.</p>
                </div>
                <div className="textSection">
                    <h4>customer</h4>
                    <p>Evanston residents</p>
                </div>
                <div className="textSection">
                    <h4>understanding the problem</h4>
                    <p>Everytime I check the weather for my city - Evanston, Illinois, I...</p>
                    <ol>
                        <li>Go to weather.com</li>
                        <li>Type “Evanston, IL” in as the location</li>
                        <li>Scroll down until I see details</li>
                    </ol>
                    <br/>
                    <p>Although only about 30 seconds, this process is <b>unnecessarily complicated</b>. I should be able to see the weather in as few clicks and steps as possible.</p>
                    <br/>
                    <p>The Weather Channel also <b>buries useful weather data</b> among confusing measurements that are not used by most users (i.e. dew point, pressure, etc).</p>
                </div>
                <div className="textSection">
                    <h4>design process</h4>
                    <p>To account for simplicity and usefulness, the goal was to <b>reduce the 3 step process into 1</b> and <b>only show useful data</b> (in the case of the average Evanston resident). After surveying peers, we found that useful data included the current weather type, temperature, and high/low temperatures but that hourly or weekly forecasts were nice to have.</p>
                    <b/>
                    <p>We split the process into 3 stages:</p>
                    <ol>
                        <li>Basic interface</li>
                        <li>API call</li>
                        <li>Beautify</li>
                    </ol>
                    <h5>Stage 1: Basic interface</h5>
                    <p>First we created the React web app and a GitHub repository, Then we added the basic components: a header (title and date), a div for the daily forecast, and two side buttons for the hourly and weekly forecasts. When those side buttons are clicked, a modal is opened showing corresponding data. Styling was left for the third stage.</p>
                    <h5>Stage 2: API call</h5>
                    <p>While searching for a weather API to use, <b>price</b> and <b>delivery</b> were our main concerns. Funding was not provided for this project, so we wanted a free API. “Delivery” means that the API is fast but also can provide the necessary data. In the end, we chose ---- ‘s free daily weather API.</p>
                    <br/>
                    <p>Unfortunately we could not find a free API for the hourly or weekly forecasts, so that data is temporarily hard-coded.</p>
                    <br/>
                    <p>After reading the API documentation, we wrote a Javascript functions to call the “GET” API when the page is first rendered - this weather data object is parsed and populates the fields. Each weather type also has a particular image so the corresponding image is also retrieved from ----’s library.</p>
                    <h5>Stage 3: Beautify</h5>
                    <p>We added styling through CSS formatting, modal functionality, and a color palette.</p>
                </div>
                <div className="textSection">
                    <h4>the solution</h4>
                    <p>The result is a single-page web app showing the daily weather type (sunny, cloudy etc), current temperature, and high + low temperature.</p>
                    <p>The web app was created in  React and hosted on Heroku.</p>
                    <div className="imageContainer">
                        <div style={{display: "inline", textAlign: "center"}}>
                            <img src={project.mainImage} className="interface" alt=""></img>
                            <p>Evanston Weather App</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherApp;