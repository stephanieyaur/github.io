import { Link } from "react-router-dom";

const NavBar = ({selected}) => {
    return (
        <div className="NavBar page">
            <Link to={"/"} ><div className="homeLogo"><h2>stephanie yaur</h2></div></Link>
            <div className="navLinkGroup">
                <Link to={"/projects"}><div className={`allnavlink navlinkbutend ${selected === "projects" ? `selectedClass` : null}`}><h2>projects</h2></div></Link>
                {/* <Link to={"/skills"}><div className={`allnavlink navlinkbutend ${selected === "skills" ? `selectedClass` : null}`}><h2>skills</h2></div></Link> */}
                <Link to={"/about"}><div className={`allnavlink ${selected === "about" ? `selectedClass` : null}`}><h2>about</h2></div></Link>
            </div>
        </div>
    )
}

export default NavBar;