import "./BookCover.css";

export default function BookCover() {
    return (
        <div>
            <h1>Design Exploration: Medea Book Cover</h1>
            <div id="details-container">
                <p class="details-item">... Project Details:</p>
                <p class="details-item">Category: Design</p>
                <p class="details-item">2025</p>
                <p class="details-item">Adobe InDesign, Adobe Photoshop</p>
            </div>
            <p>I judge a book by its book cover. Otherwise why even design the covers of books?</p>
            <p>For a project in Design 1, I had the chance to redesign the Dover Thrift Editions "Medea" book cover. Here are some of my solutions to the new book cover design.</p>
            <h2>Selected Covers from each Direction</h2>
            <p>- A summary of my personal favorites.</p>
            <div className="cover-align">
                <img className="img-cover-4" alt="Medea_Cover" src="./projects/medea_challenge.png"/>
                <img className="img-cover-2" alt="Medea_Cover" src="./projects/medea_2_4.jpg" />
                <img className="img-cover-3" alt="Medea_Cover" src="./projects/medea_3_4.jpg" />
            </div>
            <h2>Direction 1</h2>
            <p>- An Intro to Bauhaus.</p>
            <div className="cover-align">
                <img className="img-cover-1" alt="Medea_Cover" src="./projects/medea_1_1.jpg" />
                <img className="img-cover-1" alt="Medea_Cover" src="./projects/medea_1_2.jpg" />
                <img className="img-cover-1" alt="Medea_Cover" src="./projects/medea_1_3.jpg" />
                <img className="img-cover-1" alt="Medea_Cover" src="./projects/medea_1_4.jpg" />
            </div>
            <h2>Direction 2</h2>
            <p>- The full Bauhaus package, mixed with flair of my own.</p>
            <div className="cover-align">
                <img className="img-cover-2" alt="Medea_Cover" src="./projects/medea_2_1.jpg" />
                <img className="img-cover-2" alt="Medea_Cover" src="./projects/medea_2_2.jpg" />
                <img className="img-cover-2" alt="Medea_Cover" src="./projects/medea_2_3.jpg" />
                <img className="img-cover-2" alt="Medea_Cover" src="./projects/medea_2_4.jpg" />
                <img className="img-cover-2" alt="Medea_Cover" src="./projects/medea_2_5.jpg" />
                <img className="img-cover-2" alt="Medea_Cover" src="./projects/medea_2_6.jpg" />
            </div>
            <h2>Direction 3</h2>
            <p>- Suprematism influence.</p>
            <div className="cover-align">
                <img className="img-cover-3" alt="Medea_Cover" src="./projects/medea_3_1.jpg" />
                <img className="img-cover-3" alt="Medea_Cover" src="./projects/medea_3_2.jpg" />
                <img className="img-cover-3" alt="Medea_Cover" src="./projects/medea_3_3.jpg" />
                <img className="img-cover-3" alt="Medea_Cover" src="./projects/medea_3_4.jpg" />
            </div>
            <h2>Challenge from Prof. William van Roden</h2>
            <p>Following this, my Design 1 professor, William, challenged me to study the designs of Lisa Naftolin. Playing with opacity and blur, I replicated her signature tracing paper layering design in a 2D space. 
            However, I felt this solution lacked the dimension defying feature that the physical designs of Naftolin's had.     
             </p>
            <div className="cover-align">
                <img className="img-cover-4" alt="Medea_Cover" src="./projects/medea_challenge.png"/>
            </div>
        </div>
    )
}