export default function ServiceCards({service, serviceInfo, serviceLogo}){
    return(
        <button>
    <div className="servicecard-section">
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
