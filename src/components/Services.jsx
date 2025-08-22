import ServiceCards from "./ServiceCards";

export default function Service(){
    return(
        <section className="services-section">
    <h1>
        Our Top Rated Services
    </h1>
    <div class="servicecard-ui">
    <ServiceCards serviceLogo="src\assets\Images\Services\furniture-svgrepo-com.svg" service="Furniture assembly" serviceInfo="Attain's Bots work alongside your team members to"/>
    <ServiceCards serviceLogo="src\assets\Images\Services\sewer-icon.svg" service="Gutter cleaning" serviceInfo="Attain's Bots work alongside your team members to"/>
    <ServiceCards serviceLogo="src\assets\Images\Services\repair-costs-svgrepo-com.svg" service="Home repairs" serviceInfo="Attain's Bots work alongside your team members to"/>
    <ServiceCards serviceLogo="src\assets\Images\Services\paint-roller-svgrepo-com.svg" service="Painting" serviceInfo="Attain's Bots work alongside your team members to"/>
    </div>
    <div class="servicecard-ui">
    <ServiceCards serviceLogo="src\assets\Images\Services\tap-water-drink-water-tap-svgrepo-com.svg" service="Plumbing" serviceInfo="Attain's Bots work alongside your team members to"/>
    <ServiceCards serviceLogo="src\assets\Images\Services\house-svgrepo-com.svg" service="House siding" serviceInfo="Attain's Bots work alongside your team members to"/>
    <ServiceCards serviceLogo="src\assets\Images\Services\hammer-with-nail-puller-svgrepo-com.svg" service="Carpentry" serviceInfo="Attain's Bots work alongside your team members to"/>
    <ServiceCards serviceLogo="src\assets\Images\Services\house-svgrepo-com.svg" service="Electrical" serviceInfo="Attain's Bots work alongside your team members to"/>
    </div>

    <button id="button" >View all Services</button>
    
    </section>

    
    );
}