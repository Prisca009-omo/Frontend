export default function ServiceCards({service, serviceInfo, serviceLogo}){
    return(
        <button className="servicecard-section">
    <div>
    <img src={serviceLogo} alt="" />
    <h2>
        {service}
    </h2>
    <p>
        {serviceInfo}
    </p>
    </div>
        </button>
    );
}
