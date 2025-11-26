import "./Shuwa.css";

export default function Shuwa() {
    return (
        <>
            <h1>Shuwa: Sign Language to Text Meeting App</h1>
            <div id="details-container">
                <p class="details-item">... Project Details:</p>
                <p class="details-item">Category: Full Stack Development</p>
                <p class="details-item">2025, Current Project</p>
                <p class="details-item">MERN, React.js, Express.js, MongoDB Atlas, Machine Learning</p>
        </div>
            <p>Shuwa is a live video conference app designed to translate sign language into summarized text during a meeting, recognizing short and simple signs through a web cam and display translated short summary captions.</p>
            <p>Will be deployed in the future! Stay tuned for updates!</p>
            <a href="https://github.com/agile-students-fall2025/4-final-gesturetalk">For now, see the Github Repository here!</a>
            <h2>Documentation</h2>
            <div class="shuwa-container">
                <img alt="Shuwa" src="/projects/shuwa_1.png" class="shuwa-img"/>
                <img alt="Shuwa" src="/projects/shuwa_2.png" class="shuwa-img"/>
            </div>
            <img alt="Shuwa" src="/projects/shuwa_3.png" class="shuwa-ex"/>
            
        </>
    )
}