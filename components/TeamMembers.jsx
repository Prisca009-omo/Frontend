export default function({memberImg, memberName, designation, experience }){
    return(
    <section className="teammembers-section">
     <img src={memberImg} alt="" />
     <h4>{memberName}</h4> 
     <p><b>Designation: </b>{designation}</p>
     <p><b>Experience: </b>{experience} Years</p>
    </section>
    );
}