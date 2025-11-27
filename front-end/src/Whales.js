import "./Whales.css";

export default function Whales(){
    return(
        <div>
            <h1>Project: Save the Whales!</h1>
            <div id="details-container">
                <p class="details-item">... Project Details:</p>
                <p class="details-item">Category: Design</p>
                <p class="details-item">2025</p>
                <p class="details-item">Adobe InDesign, Adobe Photoshop</p>
            </div>
            <p>Creating posters for a cause? Make an impact. Make your viewers reflect on the issue at hand.</p>
            <p>- Posters made for Design 1 project, focused on whale conservation.</p>
            <img className="img-mock" alt="KeepItClean_1" src="jasmine7310/projects/KeepItClean_mock.png" />
            <div className="img-align">
                <img alt="KeepItClean_1" src="jasmine7310/projects/KeepItClean_1.png" />
                <img alt="KeepItClean_1" src="jasmine7310/projects/KeepItClean_2.png" />
                <img alt="KeepItClean_1" src="jasmine7310/projects/KeepItClean_3.png" />
            </div>
            <h2>Direction 2</h2>
            <p>- While I think this design solution also works, I personally prefer the final version, which breaks the barrier of being "three posters".</p>
            <img className="img-mock" alt="whale_mock" src="jasmine7310/projects/whale_mock.png" />
            <div className="img-align">
                <img alt="whale_1" src="jasmine7310/projects/whale_1.png" />
                <img alt="whale_2" src="jasmine7310/projects/whale_2.png" />
                <img alt="whale_3" src="jasmine7310/projects/whale_3.png" />
            </div>
            <h2>Draft</h2>
            <p>Draft was based on general sea health conservation, but decided to focus on whales instead. I believe that having a singluar goal to work towards first is easier than trying to grasp at the issue in bits.</p>
            <img className="img-mock" alt="sea_mock" src="jasmine7310/projects/sea_mock.png" />
            <div className="img-align">
                <img alt="sea_1" src="jasmine7310/projects/sea_1.png" />
                <img alt="sea_2" src="jasmine7310/projects/sea_2.png" />
                <img alt="sea_3" src="jasmine7310/projects/sea_3.png" />
            </div>
        </div>
    )
}