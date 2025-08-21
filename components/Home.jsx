export default function Home (){
    return(
        <>
        <div>
        <h2>Handyman & Remodeling Services</h2>
        <p>This is an eco-friendly service providing reliable, green-focused handyman solutions for all your home needs</p>
        <button>Book Your Scedule</button>
        </div>

        <form action="">
            <h3>Pick The Services You Want</h3>
            <p><input type="text" placeholder="Full Name"/></p>
            <p><input type="email" placeholder="Email Address" /></p>
            <p><input type="tel" placeholder="Phone" /></p>

           <select>
            <option value="option1">Services type</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            </select>

            <button>Get Shedule</button>
        </form>
        </>
    );
}