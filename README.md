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
</ul>
