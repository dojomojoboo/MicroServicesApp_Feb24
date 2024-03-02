# MicroServicesApp Feb24
<h2>Project - Project to demonstrate microservices</h2>

<h3>Tech stack in use:</h3>
<ul>
 <li>Macbook Air M1</li>
 <li>Visual Studio Mac with .Net 7</li>
 <li>Docker</li>
 <li>Azure Data Studio</li>
</ul>

<h3>Purpose - To create a project to demonstrate microservices</h3>
<ol>
 <li>CatalogService - Created a .Net 7 API microservice using EntityFramework core creating a SQL database(running on Azure Data Studio)</li>
 <li>APIGateway - Created the API Gateway using Ocelot to create single entry point for all services</li>
 <li>FrontendReact - Created a React front-end application to demonstrate communicating with the API Gateway to retrieve data from the catalog service. When the FetchCatalog link is clicked, it displays a table populated with the data from the microservice.</li>
</ol>
<br>
<h3>Instructions on how to run</h3>
<ul>
 <li>Ensure that in APIGateway/ocelot.json file, the host and ports are set correctly to whatever the associated service is running at, which can be found in the services Properties/launchSettings.json</li>
<li>For this demonstration, all 3 projects must be running simulataneously to show a microservice running, an api gateway available and a react frontend making calls to the gateway to retrieve and display data. To do this in Visual Studio Mac, you right click on the solution and choose - Set startup projects, and ensure all three projects are selected. Also ensure Multiple Projects is selected as the debug choice so that all three projects are built and run together.</li>
</ul> 
