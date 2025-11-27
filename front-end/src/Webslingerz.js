import "./Webslingerz.css";

export default function Webslingerz() {
    return (
        <>
        <h1>Bird Collector</h1>
        <div id="details-container">
                <p class="details-item">... Project Details:</p>
                <p class="details-item">Category: Software Engineering</p>
                <p class="details-item">2025</p>
                <p class="details-item">Python, Digital Ocean, Github, Git, Docker, MongoDB</p>
        </div>
        <p>Do you like birds but you wish they wouldn't fly away the moment you got near them? Do you wonder if there is a way to interact with these silly goobers at comfort of your desk? Then this game is for you!</p>
        <p>Game developed with team using containters for web app and MongoDB. Copy the repository on Github onto your local machine and follow the instructions to run locally! Happy bird collecting!</p>
        <a href="https://github.com/jasmine7310/swe-webslingrz-bird-collector">Link to Github Repo here!</a>
        <h2>Preview</h2>
        <img alt="Bird Collecting Preview" src="./projects/webslingers.png" id="ws-img"></img>
        </>
    )
}