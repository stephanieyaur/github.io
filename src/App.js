// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home.js';
import About from './About.js';
import Projects from './Projects.js';
import FreedomLink from './Projects/FreedomLink';
import Skills from './Skills.js';
import NewsSearchEngine from './Projects/NewsSearchEngine';
import WeatherApp from './Projects/WeatherApp';
import Philips from './Projects/Philips';
import Siemens from './Projects/Siemens';
import DistributedMetronome from './Projects/DistributedMetronome';
import Amex from './Projects/Amex';
import FarFromHome from './Projects/FarFromHome';
import Niantic from './Projects/Niantic';

const App = () => {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="App">
      <div id="fillerNavBar"></div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/projects/freedom-link" element={<FreedomLink/>} />
          <Route path="/projects/news-search-engine" element={<NewsSearchEngine/>} />
          <Route path="/projects/weather-app" element={<WeatherApp/>} />
          <Route path="/projects/american-express" element={<Amex/>} />
          <Route path="/projects/distributed-metronome" element={<DistributedMetronome/>} />
          <Route path="/projects/siemens-healthineers" element={<Siemens/>} />
          <Route path="/projects/far-from-home" element={<FarFromHome/>} />
          <Route path="/projects/philips" element={<Philips/>} />
          <Route path="/projects/niantic" element={<Niantic/>} />
          <Route path="/skills" element={<Skills/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/*
Links:
https://www.geeksforgeeks.org/how-to-create-typewriter-effect-in-reactjs/
https://www.geeksforgeeks.org/html-marquee-loop-attribute/
https://www.w3schools.com/howto/howto_css_circles.asp
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_display_element_hover
https://www.javatpoint.com/react-map
https://reactjs.org/docs/components-and-props.html
https://reactjs.org/docs/hooks-effect.html
https://stackoverflow.com/questions/39963565/react-passing-down-props-to-functional-components
https://www.w3schools.com/cssref/tryit.asp?filename=trycss_cursor
https://www.codegrepper.com/code-examples/javascript/material+ui+change+button+to+custom+color

*/
