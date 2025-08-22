export default function ReviewCards({title,review,customerName,daysAgo}){
    return(
        <section>
        <h3>{title}</h3>
        <hr/>
        <p>{review}</p>
        <p><b>{customerName}</b> <span>- Verified user </span> </p>
        <img src="src\assets\Images\stars-5-1.svg" alt="" />
        <p>{daysAgo} days ago</p>
        </section>
    );
}