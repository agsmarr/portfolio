import './aboutMe.css'
import udip from './assets/UDIP-logo.jpg'
import dapper from './assets/dapper.jpg'
import henhacks from './assets/HH-logo.jpg'

function AboutMe() {
    return (<>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    </style>
    <div className = 'aboutMe'>
        <h1>About Me</h1>
        <p>Hello! My name is Amanda Smarr. I am currently a senior computer science 
        student at the University of Delaware with a concentration in Cybersecurity. On campus, I have participated
        in research through the physics department, serving on two teams that develop small-scale space technology to
        better understand our atmosphere, University of Delaware Ionospheric Probe (UDIP) and 
        Delaware's Atmospheric Plasma Probe Experiment (DAPPEr, a.k.a. Delaware's first orbital satellite). Outside of
        academics, I have also been apart of the HenHacks organizer team for 3 years, which plans the 
        University of Delaware's annual hackathon each year. 
        </p>
        <p>Click on an image below to learn more about the program!</p>
        <div className = 'photos'>
            <a href = "https://www.udel.edu/udaily/2023/august/physics-ionosphere-bennett-maruca-langmuir-probe-plasma-wallops-nasa/">
                <img src = {udip} id = 'udip'></img>
            </a>
            <a href = "https://www.udel.edu/udaily/2024/april/nasa-cubesat-bennett-maruca-plasma-astrophysics-launch/">
                <img src = {dapper} id = 'dapper'></img>
            </a>
            <a href = "https://www.henhackshackathon.com/">
                <img src = {henhacks} id = 'henhacks'></img>
            </a>
        </div>
    </div>
    </>)
}

export default AboutMe;