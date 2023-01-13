import { Fragment } from "react";
import NavBar from "./NavBar";

const Skills = () => {
    return (
        <Fragment>
            <NavBar selected={"skills"} />
            <div className="page">
                <h1>Skills</h1>
            </div>
        </Fragment>
    )
}

export default Skills;