import "./Ubiq.css"

export default function Ubiq() {
  return (
    <>
      <h1>UI/UX at Ubiq's Product Lab & QC Insider Program</h1>
      <div id="details-container">
        <p class="details-item">... Project Details:</p>
        <p class="details-item">Category: UI/UX</p>
        <p class="details-item">2025</p>
        <p class="details-item">Figma</p>
      </div>
      <p>For Ubiq's Product Lab and QC Insider Program, I had the opportunity to design features based off of user feedback by conducting testing and interviews with peers. 
        Our teams would meet to discuss about what features we should create and develop high fidelity prototypes using Figma to present to Ubiq's CEO and Chief of Staff weekly.
      </p>
      <h2>Certificates Earned</h2>
      <div class="certificate-container">
        <img class="certificate-img" src="./QC Insider Program Certificate.png" alt="Ubiq Insider Program Certificate"/>
        <img class="certificate-img" src="./Ubiq Product Lab Certificate.png" alt="Ubiq Product Lab Certificate"/>
      </div>

      <h2>Figma Prototypes</h2>
      <div id="iframes-container">
        <iframe 
          title= "Ubiq Figma Design"
          style={{border: "1px solid rgba(0, 0, 0, 0.1)"}}
          width="460" 
          height="800" 
          src="https://embed.figma.com/design/PDdwQlmrhhPux6OhhMJhoi/Team-9-Project-3-Solutions?node-id=1-3&embed-host=share" 
          allowFullScreen>
        </iframe>
        <iframe 
          title="Ubiq Figma Wireframe"
          src="https://embed.figma.com/proto/PDdwQlmrhhPux6OhhMJhoi/Team-9-Project-3-Solutions?node-id=9-25&p=f&scaling=scale-down&content-scaling=fixed&page-id=1%3A3&starting-point-node-id=9%3A25&embed-host=share"
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
          width="460" 
          height="800"
          allowFullScreen
        ></iframe>
        <iframe 
          title="Ubiq Search Feature Flow" 
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} 
          width="460" 
          height="800" 
          src="https://embed.figma.com/design/UVhzQPCUIG5HIZDkh0FRVd/Team-9-Project-4?embed-host=share" allowFullScreen>
        </iframe>
        <iframe 
          title="Search Prototype"
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} 
          width="460" 
          height="800" 
          src="https://embed.figma.com/proto/UVhzQPCUIG5HIZDkh0FRVd/Team-9-Project-4?node-id=13-105&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=13%3A105&embed-host=share" allowFullScreen></iframe>
        <iframe 
          title="Ubiq User Filter Flow" 
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} 
          width="460" 
          height="800" 
          src="https://embed.figma.com/design/UVhzQPCUIG5HIZDkh0FRVd/Team-9-Project-4?node-id=1-3&embed-host=share" allowFullScreen>
        </iframe>
        <iframe 
          title="Ubiq User Filter Flow" 
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} 
          width="460" 
          height="800" 
          src="https://embed.figma.com/proto/UVhzQPCUIG5HIZDkh0FRVd/Team-9-Project-4?node-id=24-3912&p=f&scaling=scale-down&content-scaling=fixed&page-id=1%3A3&starting-point-node-id=24%3A3912&show-proto-sidebar=1&embed-host=share" 
          allowFullScreen>
        </iframe>
      </div>
      
    </>
  );
}
