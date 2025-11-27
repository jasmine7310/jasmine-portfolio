import "./Mand.css";

export default function Mand() {
    return (
        <>
        <h1>MAND: An Interactive Thriller Game</h1>
        <div id="details-container">
            <p class="details-item">... Project Details:</p>
            <p class="details-item">Category: Human Computer Interaction</p>
            <p class="details-item">2023</p>
            <p class="details-item">Arduino, JavaScript, p5js, Unity, C#</p>
        </div>
        <p>Games are intuitive to a certain extent.
         We know the classic controller style: D pad to the left, ABXY to the right, and some thumbsticks to go with them. 
         Why not use something inconvenient or unusual? 
         This project challenges the classic gamepad interface and the companies who use it to bring on the discussion of developing controllers for games that want to bring a different kind of play.</p>
        <p> MAND is a game that I developed first using p5js and Arduino, then decided that it would be more effective to rebuild the game in Unity in combination with Arduino in the final version. The user goes around the map, collecting notes around the home while avoiding enemies by covering the light sensor, slowly piecing together the story of our main character. 
            The main idea behind the use of the light sensor is that the user would need to lift their hands off of their keyboards and mouse, forcing them to cover their eyes to hide, rendering them immobile for the time being.
        </p>
        <a href="https://www.notion.so/MAND-An-Interactive-Thriller-Game-2b7efb32fe5280cc9217ecfdd5f26e9c?source=copy_link">I recommend to see the full documentation here!</a>
        <h2>Playthrough</h2>
        <iframe title="MAND playthough" src="https://drive.google.com/file/d/1X8B5DPg79rslXLz5L3klebUMx0ApmVzb/preview" width="800" height="480" allow="autoplay"></iframe>
        <h2>Ideal Arduino Setup</h2>
        <p>- Current development only needs light sensor</p>
        <img class="mand-img" alt="Arduino Setup" src="./projects/mand_controller.png"/>
        <img class="mand-img" alt="Light Setup" src="./projects/mand_doc.png"/>
        <h2>Proof of Arduino Setup: Light Sensor</h2>
        <p>Using the light sensor, when an enemy comes near, the player can use their hands to cover the light sensor to hide from the enemies. The light sensor would be placed near the player's eyes for a full immersive effect. Please see the future development section in the documentation section for more context.</p>
        <iframe title="Arduino Setup" src="https://drive.google.com/file/d/13wauvjAjJoRBvmaW3lB-kndclQBY5B5u/preview" width="800" height="480" allow="autoplay"/>
        <div class="mand-container">
            <img alt="mand_dev" src="./projects/mand-1.png" class="mand-item"/>
            <img alt="mand_dev" src="./projects/mand-2.png" class="mand-item"/>
            <img alt="mand_dev" src="./projects/mand-3.jpeg" class="mand-item"/>
            <img alt="mand_dev" src="./projects/mand-4.jpeg" class="mand-item"/>
        </div>
        <h1>Documentation</h1>
        <iframe
            title="MAND Documentation"
            src="./projects/MAND_ Interactive Thriller Documentation.pdf"
            width="100%"
            height="600px"
            style={{ border: "none" }}
        ></iframe>
        <h2>User Flowchart</h2>
        <iframe
            title="MAND Documentation"
            src="./projects/MAND FINAL Flowchart.drawio (1).png"
            width="100%"
            height="600px"
            style={{ border: "none" }}
        ></iframe>
        <h2>Prototype</h2>
        <p>Originally, this was a game to be played with potentiometers and an Arduino setup in order to control the player. The player is located in a maze and must find their way out by finding a key.</p>
        <div class="mand-container">
            <img alt="mand_prototype" src="./projects/mand-proto-1.png" class="mand-item"/>
            <img alt="mand_prototype" src="./projects/mand-proto-2.png" class="mand-item"/>
            <img alt="mand_prototype" src="./projects/mand-proto-3.png" class="mand-item"/>
            <img alt="mand_prototype" src="./projects/mand-proto-4.png" class="mand-item"/>
        </div>
        <h2>Playable Inital Prototype: mouse compatible, only lose state</h2>
        <iframe title="Prototype" src="https://editor.p5js.org/jf4654/sketches/Q7BzRZBh_9" width="100%" height="800"></iframe>
        </>
    )
}