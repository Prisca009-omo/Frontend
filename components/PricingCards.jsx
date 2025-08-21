export default function({plan, price, discount}){
    return(
        <section className="pricingcard-section">
            <div>
            <h3>{plan} Plan</h3>
            <p><span>${price}</span> /month</p>
            <hr/>
            <ul>
              <li> {discount}% Off On All Services </li> 
                <li>Priority Scheduling</li>
                <li>Maintained Equipment</li>
                <li>Priority Scheduling</li>
            </ul>

            <button>Choose Plan</button>
            </div>
        </section>
    );
}