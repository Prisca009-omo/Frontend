import ServiceCards from "./ServiceCards";
import { useNavigate } from "react-router-dom";


export default function Service(){

  const navigate = useNavigate();

    return(
        <section className="services-section">
    <h1>
        Our Top Rated Services
    </h1>
    <div class="servicecard-ui">
    <ServiceCards serviceLogo="/Images/Services/furniture-svgrepo-com.svg" service="Furniture assembly" serviceInfo="Attain's Bots work alongside your team members to"pageId="furn"/>
    <ServiceCards serviceLogo="/Images/Services/sewer-icon.svg" service="Gutter cleaning" serviceInfo="Attain's Bots work alongside your team members to" pageId="gutt"/>
    <ServiceCards serviceLogo="/Images/Services/repair-costs-svgrepo-com.svg" service="Home repairs" serviceInfo="Attain's Bots work alongside your team members to" pageId="homerep"/>
    <ServiceCards serviceLogo="/Images/Services/paint-roller-svgrepo-com.svg" service="Painting" serviceInfo="Attain's Bots work alongside your team members to" pageId="paint"/>
    </div>
    <div class="servicecard-ui">
    <ServiceCards serviceLogo="/Images/Services/tap-water-drink-water-tap-svgrepo-com.svg" service="Plumbing" serviceInfo="Attain's Bots work alongside your team members to" pageId="plumb"/>
    <ServiceCards serviceLogo="/Images/Services/house-svgrepo-com.svg" service="House siding" serviceInfo="Attain's Bots work alongside your team members to" pageId="siding"/>
    <ServiceCards serviceLogo="/Images/Services/hammer-with-nail-puller-svgrepo-com.svg" service="Carpentry" serviceInfo="Attain's Bots work alongside your team members to" pageId="carp"/>
    <ServiceCards serviceLogo="/Images/Services/house-svgrepo-com.svg" service="Electrical" serviceInfo="Attain's Bots work alongside your team members to" pageId="elect"/>
    </div>
    <button onClick={() => navigate("/services")} id="button" >View all Services</button>
    
    </section>

    
    );
}