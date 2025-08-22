export default function BlogCards({blogImg, date, blogTitle}){
   return(
   <section className="blogcard-section">
    <input type="image" src={blogImg}/>
    <div><p> Tips & Trips </p></div>
    <p>{date}</p>
    <h3>{blogTitle}</h3>
    </section>
    );
}