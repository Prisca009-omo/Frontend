import WorkingProcessComponent from "./WorkingProcessComponents"

export default function WorkingProcess(){
    return(
        <section className="process-section">
        <div>
<h1>We Follow the Process </h1>
<p>Our Work Process</p>
</div>

<div style={{display: "flex"}}>
<WorkingProcessComponent action="src\assets\Images\WorkProcess\6c3955953869f221a943b61957b1ea8dc2e065e7.png" title="Booking Online" explanation="Competently repurpose forward conveniently target fixed"/>
<img className="curlyarrow" src="src\assets\Images\curved-arrow-svgrepo-com.svg" alt="" />
<WorkingProcessComponent action="src\assets\Images\WorkProcess\smartphone-and-check-mark-svgrepo-com.svg" title="Confirmation" explanation="Competently repurpose forward conveniently target fixed"/>
<img className="curlyarrow" src="src\assets\Images\curved-arrow-svgrepo-com.svg" alt="" />
<WorkingProcessComponent action="src\assets\Images\WorkProcess\61e9b22423d648f0cbae28c73d59894aaea53981.png" title="Estimate Details" explanation="Competently repurpose forward conveniently target fixed"/>
<img className="curlyarrow" src="src\assets\Images\curved-arrow-svgrepo-com.svg" alt="" />
<WorkingProcessComponent action="src\assets\Images\WorkProcess\tick-circle-svgrepo-com.svg" title="Complete Works" explanation="Competently repurpose forward conveniently target fixed"/>
</div>
        </section>
    );
}