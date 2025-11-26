import "./Restaurant.css";

export default function Restaurant() {
    return (
        <>
        <h1>Restaurant Delivery App</h1>
        <div id="details-container">
            <p class="details-item">... Project Details:</p>
            <p class="details-item">Category: OOP Study</p>
            <p class="details-item">2025</p>
            <p class="details-item">Eclipse, Java</p>
        </div>
        <p>App made in Eclipse to show understanding of Use Case Diagrams, Class Diagrams, and Sequence Diagrams.</p>
        <a href="https://github.com/jasmine7310/restaurant-app-OOP">Link to project Github repo here!</a>
        <h2>Project Ideation</h2>
        <p>- I made these quick sketches of the idea for the project on a train in China.</p>
        <img alt="Customer_GUI" src="/projects/Customer_GUI.PNG" class="restaurant-img"/>
        <img alt="Deliverer_GUI" src="/projects/Deliverer_GUI.png" class="restaurant-img"/>
        <h2>Project Report</h2>
        <iframe title="Restaurant Delivery App Report" src="/projects/OOP_Final_Report.pdf" width="100%" height="800"/>
        </>
    )
}