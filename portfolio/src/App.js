
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from 'react-particles-js';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Particles
        params={{
          "particles": {
            "number": {
              "value": 50
            },
            "size": {
              "value": 3
            },
            // "shape": {
            //   "type": "circle",
            //   "stroke": {
            //     "width": 2,
            //     "color": "#e76f51"
            //   }
            // },
          },
            "interactivity": {
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "repulse"
                }
              }
            }
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
      <Skills />

    </div>
  );
}

export default App;
