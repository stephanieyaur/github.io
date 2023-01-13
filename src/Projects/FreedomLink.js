import { useEffect } from "react";
import projectsData from "../projectsData";
import iteration1 from "../project_images/freedom_link/iteration1.png";
import beforebegin from "../project_images/freedom_link/beforebegin.png";
import example from "../project_images/freedom_link/example.png";
import step1 from "../project_images/freedom_link/step1.png";
import faq from "../project_images/freedom_link/faqs.png";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import step2 from "../project_images/freedom_link/step2.png";
import step3 from "../project_images/freedom_link/step3.png";
import emaildraft from "../project_images/freedom_link/emaildraft.png";

import "./FreedomLink.css";
import NavBar from "../NavBar";

const findProject = () => {
    for (var i=0; i < projectsData.length; i++){
        if (projectsData[i].name === "Freedom Link"){
            return projectsData[i];
        };
    };
    return null;
}

const FreedomLink = () => {

    var project = findProject();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
        <div className="freedomLink">
            <NavBar selected={"projects"} />
            <div className="projectTop freedomlinktop">
                <div style={{marginRight: "30px", maxWidth: "50%", textAlign: "left"}}>
                    <p className="title">{project.name}</p>
                    <p className="description">{project.description}</p>
                    <br/>
                    <div className="textInline"><p>position: </p><div className="button white">{project.position}</div></div>
                    <br/>
                    <div className="textInline"><p>skills: </p>{populateSkills()}</div>
                    <br />
                </div>
                <img className="mainImage" src={project.mainImage} alt=""></img>
            </div>
            <div className="content">

                <div className="textSection">
                    <h4>background</h4>
                    <p>Northwestern law professor Sheila Beidl noticed that many clients of hers would petition for the early release of a prisoner - but the process of petitioning is tedious. Sheila Beidl and fellow law professor Daniel Lina approached us to streamline the process.</p>
                </div>

                <div className="textSection">
                    <h4>customer</h4>
                    <p>Loved ones of prisoners of the Illinois Department of Corrections</p>
                </div>

                <div className="textSection">
                    <h4>understanding the petitioning process</h4>
                    <p>First we conducted client interviews and research on the Illinois Department of Corrections to understand the process of petitioning. The process is as follows:</p>
                <br/>
                <b>1. Determine  eligibility criteria</b>
                <p>To petition, a lawyer needs a just cause for filing. My team and I put together a list of the most commonly used Illinois state laws used for early release. Those laws stated that a prisoner could be eligible due to medical reasons, age, changes in laws and more.</p>
                {/* <br/> */}
                <b>2. Determine if prisoner fits eligibility criteria</b>
                <p>The Illinois Department of Corrections or IDOC assigns each prisoner a unique IDOC number. This number can be used to search through the IDOC database to display name, age, reason for imprisonment, sentence length, etc. This database is what would be used to examine whether a prisoner might have a medical reason to be released from prison earlier, for example.</p>
                {/* <br /> */}
                <b>3. Contact the Illinois Department of Corrections</b>
                <p>Before filing the actual petition, a declaration of intent is necessary. An email must be sent to the respective county judge including the eligibility criteria and corresponding laws.  Sheila Beidl provided us with an email template.</p>
                {/* <br/> */}
                <b>4. Petition for early release</b>
                <p>Lastly, the petition must be filed. If the judge approves the intent to petition, then the actual petition is a much more detailed version. Much of the petition refers to laws, the prisoner’s history, and the prisoner’s past good deeds. Essentially the petition is a long document justifying the prisoner’s “goodness” and necessary reasons for early release.</p>
                </div>

                <div className="textSection">
                    <h4>scope of solution</h4>
                    <p>Writing a 20 page petition without having any law training felt out of scope. Streamlining the process until the petition, however, was very much feasible. The four part plan above thus became a three part plan. Instead of writing the petition, instead we would help users write the intent to petition.</p>
                </div>

                <h4>design process</h4>
                <div className="textAndImageContainer">
                    <div className="textSection">
                        <p>Knowing the basic steps to the solution as outlined above (determine eligibility criteria, determine if person fits criteria, write email), first we tackled the research portion. After talks with Sheila and Daniel, we gathered the most commonly used laws and put together the list of eligibility criteria. We chose to create a React web app that sends an email to a county judge. Because this step likely requires references to multiple tabs or windows,  we chose a web app  instead of a mobile app.</p>
                        <br/>
                        <p>The first single-page iteration of our web app, “Freedom Generator,” aimed to test eligibility based on the criteria we gathered. After typing in an IDOC number (ex: A00367), our backend calls the IDOC API to retrieve that prisoner’s information. Then this information is checked against the eligibility criteria and a corresponding
                        “check” or “x” is displayed. Although aesthetically unpleasing, the first iteration was
                        functional.</p>
                        <br/>
                        <p>Next we tackled the email. We decided on a form: since most words in the email can be reused, we just had a “fill-in-the-blank” form for the prisoner’s name, age, etc. The previous step saved the eligibility criteria and populated the form.</p>
                        <br />
                        <p>After talking with our clients, we realized that although users might end up with the product they need, they might not understand it. To address this gap, we created a FAQs page and an example email page. First, the FAQs page explains the process we use to create the email and anything else users might be wondering. The example email page is the exact email template used to convert the form into an email — this way users do not necessarily have to follow the flow of searching an IDOC number and filling out the form before seeing the email. </p>
                    </div>
                    <div className="imageContainer">
                        <div style={{display: "inline", textAlign: "center"}}>
                            <img src={iteration1} className="interface" alt=""></img>
                            <p>Iteration 1</p>
                        </div>
                    </div>
                </div>

                <div className="textSection">
                    <h4>the solution</h4>
                    <p>In the end, we decided to make Freedom Link a step-by-step guided process. Step 1 is to search an IDOC number to pull up prisoner info. Step 2 is to choose which eligibility criteria to be used. Step 3 is to fill out the form with other information necessary to generate the email. Last but not least, the submission of the form will send the email through a google mail API.</p>
                </div>
            </div>
            <div className="contentSection" id="step1">
                <div className="numberAndTitle">
                    <h1 className="stepNumber">0</h1>
                    <h1>Get Started</h1>
                </div>
                <div className="imageContainer">
                    <div style={{display: "inline", textAlign: "center"}}>
                        <img src={beforebegin} className="interface" alt=""></img>
                    </div>
                </div>
            </div>
            <div className="contentSection" id="step1">
                <div className="numberAndTitle">
                    <h1 className="stepNumber">1</h1>
                    <h1>Type in IDOC number</h1>
                </div>
                <div className="imageContainer">
                    <div style={{display: "inline", textAlign: "center"}}>
                        <img src={step1} className="interface" alt=""></img>
                    </div>
                </div>
            </div>
            <div className="contentSection" id="step1">
                <div className="numberAndTitle">
                    <h1 className="stepNumber">2</h1>
                    <h1>Select all relevant criteria</h1>
                </div>
                <div className="imageContainer">
                    <div style={{display: "inline", textAlign: "center"}}>
                        <img src={step2} className="interface" alt=""></img>
                    </div>
                </div>
            </div>
            <div className="contentSection" id="step1">
                <div className="numberAndTitle">
                    <h1 className="stepNumber">3</h1>
                    <h1>Fill out form with prisoner details</h1>
                </div>
                <div className="imageContainer">
                    <div style={{display: "inline", textAlign: "center"}}>
                        <img src={step3} className="interface" alt=""></img>
                    </div>
                </div>
            </div>
            <div className="contentSection" id="step1">
                <div className="numberAndTitle">
                    <h1 className="stepNumber">4</h1>
                    <h1>Generate email</h1>
                </div>
                <div className="imageContainer">
                    <div style={{display: "inline", textAlign: "center"}}>
                        <img src={emaildraft} className="interface" alt=""></img>
                    </div>
                </div>
            </div>
            <div className="contentSection" id="step1">
                <div className="numberAndTitle">
                    <h1 className="stepNumber">?</h1>
                    <h1>FAQs</h1>
                </div>
                <div className="imageContainer">
                    <div style={{display: "inline", textAlign: "center"}}>
                        <img src={faq} className="interface" alt=""></img>
                    </div>
                </div>
            </div>
            <div className="contentSection" id="step1">
                <div className="numberAndTitle">
                    <h1 className="stepNumber"><MailOutlineIcon fontSize="xx-large" /></h1>
                    <h1>Sample Email</h1>   
                </div>
                <div className="imageContainer">
                    <div style={{display: "inline", textAlign: "center"}}>
                        <img src={example} className="interface" alt=""></img>
                    </div>
                </div>
            </div>

            <div className="content">

                <div className="textSection">
                    <h4>reflection</h4>
                    <p>Especially in 2020 with COVID-19 outbreaks, I was really glad to be working on this product to help those medically at risk to be put on early release. It was also very rewarding to work on this project especially because it was my first project with a client where I was finally working as a frontend developer. This project really helped me grow as a React.js developer and designer and I credit this project as the reason why I decided to become a frontend developer.</p>
                </div>
            </div>
        </div>
    )
}

export default FreedomLink;