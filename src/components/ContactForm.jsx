export default function ContactForm(){
    return(
    <section className="contactform-section">
    <img src="src\assets\Images\f746f29265c0e7f497a12325ec4c85630b45bb68.png" alt="" />
    <form action="">
        <h2>Contact Form</h2>
        <input type="text" />
        <input type="email" />
        <input type="tel" />
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