import "./About.css";
import "./Animations.css";

function toGithub(){
    window.open("https://github.com/jasmine7310", "_blank");
};

export default function About() {
  return (
    <div className="about-container">
      <img src="./whoAmI.svg" alt="Who Am I SVG" id="whoAmI-svg" className="fade-in-on-load"/>
      <img src="./GitHub.svg" alt="GitHub SVG" id="GitHub-svg" className="fade-in-on-load" onClick={toGithub}/>
      <p className="fade-in-on-load sen-font">scroll down for more!!</p>
      <div id="about-sections-container">
        <div id="left-about-section" className="fade-in-on-load">
          <p className="sen-font"> 
            Engineer by day, illustrator by night. Between building things, breaking things, and learning why they broke,
            I love to envelope myself in software, art, and gadgets that bridge the gap between humanities and STEM. 
            <br/>
            <br/>
            I'm currently a senior at New York University majoring in Computer Science, minoring in Interactive Media Arts,
            Digial Art and Design, Web Programming and Applications, and Chinese.
            <br/>
            <br/>
            Outside of school and work, I love to swim, go birdwatching, travel, visit art museums, and build crafts!
            <br/>
            <br/>
            You might find me in California during some summers, New York during the school year, or in Shanghai.
            Hope to see you around! 
          </p>
          </div>
          <div id="right-about-section" className="fade-in-on-load">
            <img src="./IMG_8008.GIF" alt="me!"/>
            <p className="sen-font">Never expect your code to run smoothly the first run. Test, test, and test again. Then, revise. Rinse and repeat.</p>
          </div>
          
      </div>
      
      <p>Website's built with my own two hands using React and Material UI.</p>
    </div>
  );
}