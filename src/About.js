import { Fragment } from "react";
import NavBar from "./NavBar";
import "./About.css";
import Stephanie from "./stephanie.jpg";

const About = () => {
    return (
        <Fragment>
            <NavBar selected={"about"} />
            <div className="page">
                <div className="aboutHeader">
                    <div className="textLeftAlign">
                        <h1>a bit about me ...</h1>
                        <div>
                            <h1 className="name">Stephanie Yaur</h1>
                        </div>
                    </div>
                    <div className="center">
                        <img src={Stephanie} id="Stephanie" alt=""></img>
                    </div>
                </div>
                <div className="textLeftAlign aboutme">
                    <p>I’m a <b>master's</b> student studying <b>computer science</b> at <b>Northwestern University</b>, expected to finish in March 2023. I also received my <b>BS</b> in Computer Science and the <b>Segal Design Certicate</b> from Northwestern in March 2022. With 5 internships to date, I have a lot of experience with <b>full stack development</b>, user research, and the design process. I value <b>empathy</b> and <b>hardwork</b> in the workplace, but also love to spend time laughing, watching kdramas, baking and (one day) spending time with my Chow Chow.</p>
                </div>
                <div className="textLeftAlign aboutme">
                    <p>Seeking software engineer new grad positions in New York City or remote beginning July/August 2023.</p>
                </div>
            </div>
        </Fragment>
    )
}

export default About;