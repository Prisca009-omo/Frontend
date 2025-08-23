export default function ContactForm(){
    return(
    <section className="contactform-section">
    <img src="/Images/f746f29265c0e7f497a12325ec4c85630b45bb68.png" alt="" />
    <form action="">
        <h2>Contact Form</h2>
        <input type="text" placeholder="Name"/>
        <input type="email"  placeholder="E-mail address"/>
        <input type="tel" placeholder="Phone"/>
       <select>
            <option value="option1">Subject</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            </select>
       <textarea placeholder="Message"></textarea>

        <button>Send Message</button>
    </form>
    </section>
    );
}