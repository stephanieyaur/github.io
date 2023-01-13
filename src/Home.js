import './Home.css';
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import NavBar from './NavBar';
import { Fragment } from 'react';

const Home = () => {
    return(
        <Fragment>
            <NavBar selected={""} />
            <div className="home page">
                <div className="textLeftAlign">
                    <h1 id="hiThere">hi there, I'm</h1>
                    <div id="name">
                    <Typewriter
                        id="name"
                        onInit={(typewriter)=> {
                        typewriter
                        .pauseFor(500)
                        .typeString("Stephanie")
                        .start();
                        }}
                        />
                    </div>
                </div>

                <div className="section textLeftAlign displayFlex">
                    <div className="floatLeft"><h3>I'm a...</h3></div>
                    <div className="floatRight alignItemsLeft">
                        <h3 className="margin0">...CS master's student at Northwestern University</h3>
                        <h3 className="margin0">...CS bachelor's and Segal Design Certificate recipient from Northwestern University</h3>
                        <h3 className="margin0">...five time intern</h3>
                    </div>
                </div>

                <div className="inlineFlex">
                    <Link className="circle" to={"projects"}>
                        <h2>Projects</h2>
                    </Link>
                    {/* <Link className="circle" to={"skills"}>
                        <h2>Skills</h2>
                    </Link> */}
                    <Link className="circle" to={"about"}>
                        <h2>About</h2>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Home;