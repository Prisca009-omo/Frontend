export default function Booking(){
    return(
    <section id="bookingform">
    <form action="">
        <h2>Booking Form</h2>
        <input type="text" placeholder="Name"/>
        <input type="email"  placeholder="E-mail address"/>
        <input type="tel" placeholder="Phone"/>
       <select>
            <option>Services type</option>
              <option>Furniture Assembly</option>
              <option>Gutter Cleaning</option>
              <option>Plumbing</option>
              <option>Electrical</option>
              <option>Carpentry</option>
              <option>Painting</option>
            </select>
       <textarea placeholder="Additional information"></textarea>

        <button type="submit">Book Service</button>
    </form>
    </section>
    );
}