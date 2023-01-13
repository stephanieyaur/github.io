import FreedomLinkSquare from "./project_images/freedom_link/square.png";
import FreedomLinkMain from "./project_images/freedom_link/main.png";
import NewsSearchEngineSquare from "./project_images/news_search_engine/square.png";
import NewsSearchEngineMain from "./project_images/news_search_engine/main.jpg";
import WeatherAppSquare from "./project_images/weather_app/square.png";
import AmexSquare from "./project_images/amex/square.png";
// import SiemensSquare from "./project_images/siemens/square.png";
// import PhilipsSquare from "./project_images/philips/square.png";
// import FarFromHomeSquare from "./project_images/far_from_home/square.png";
// import FarFromHomeMain from "./project_images/far_from_home/main.png";
// import DistributedMetronomeSquare from "./project_images/distributed_metronome/square.png";
// import DistributedMetronomeMain from "./project_images/distributed_metronome/main.png";
import WeatherAppMain from "./project_images/weather_app/main.png";


let projectsData = [
    {
        name: "Freedom Link",
        description: "Web app resulting in email request to petition for the early release of a prisoner from the Illinois Department of Corrections.",
        backgroundImage: FreedomLinkSquare,
        mainImage: FreedomLinkMain,
        position: "Front End Developer",
        skills: ["React", "node.js"],
        url: "freedom-link"
    },
    {
        name: "News Search Engine",
        description: "Full stack news article search engine",
        backgroundImage: NewsSearchEngineSquare,
        mainImage: NewsSearchEngineMain,
        position: "Full Stack Developer",
        skills: ["Java", "AWS", "React", "Github"],
        url: "news-search-engine"
    },
    {
        name: "Weather App",
        description: "Weather for Evanston, Illinois",
        backgroundImage: WeatherAppSquare,
        mainImage: WeatherAppMain,
        position: "Full Stack Developer",
        skills: ["React", "Heroku", "Github"],
        url: "weather-app"
    },
    {
        name: "American Express",
        description: "Summer 2021 front end intern projects",
        backgroundImage: AmexSquare,
        mainImage: AmexSquare,
        position: "Frontend Software Engineer Intern",
        skills: ["React", "Redux", "Github", "Postman"],
        url: "american-express"
    },
    // {
    //     name: "Siemens Healthineers",
    //     description: "Summer 2020 front end intern project",
    //     backgroundImage: SiemensSquare,
    //     mainImage: SiemensSquare,
    //     position: "Full Stack Developer",
    //     skills: ["Java", "AWS", "React", "Github"],
    //     url: "siemens-healthineers"
    // },
    // {
    //     name: "Distributed Metronome",
    //     description: "Remote synchronization of acapella groups",
    //     backgroundImage: DistributedMetronomeSquare,
    //     mainImage: DistributedMetronomeMain,
    //     position: "Developer",
    //     skills: ["Java", "AWS", "React", "Github"],
    //     url: "distributed-metronome"
    // },
    // {
    //     name: "Far From Home",
    //     description: "Web app designed to help college students with homesickness",
    //     backgroundImage: FarFromHomeSquare,
    //     mainImage: FarFromHomeMain,
    //     position: "Developer",
    //     skills: ["Java", "AWS", "React", "Github"],
    //     url: "far-from-home"
    // },
    // {
    //     name: "Philips",
    //     description: "Summer 2019 UI intern project",
    //     backgroundImage: PhilipsSquare,
    //     mainImage: PhilipsSquare,
    //     position: "Full Stack Developer",
    //     skills: ["Java", "AWS", "React", "Github"],
    //     url: "philips"
    // },
];

export default projectsData;