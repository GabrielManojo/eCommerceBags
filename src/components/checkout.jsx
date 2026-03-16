import "../Style/checkout.css";
import reactLogo from "../assets/react.svg";
import { useLocation, Link } from "react-router-dom";
function handleSubmit(e) {
  e.preventDefault();
  alert("Order placed!");
}

function Checkout() {
  const location = useLocation();
  const product = location.state?.product;
  const deliveryFee = 10.0;
  const total = product ? product.price + deliveryFee : 0;

  return (
    <div className="checkout-page">
      <header className="checkout-header">
        <img src={reactLogo} alt="React Logo" />
        <h1>My Store</h1>
        <p>Secure Checkout</p>
      </header>

      <nav className="checkout-nav">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
        </div>
      </nav>

      {/* Contact Form */}
      <div className="checkout-container">
        <section className="checkout-form-section">
          <form className="checkout-form" onSubmit={handleSubmit}>
            <div className="form-card">
              <h2>Contact Information</h2>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="you@example.com" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" placeholder="First Name" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="form-card">
              <h2>Shipping Address</h2>
              <div className="form-group">
                <label>Street Address</label>
                <input type="text" placeholder="123 Main Street" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>City</label>
                  <input type="text" placeholder="City" />
                </div>
                <div className="form-group">
                  <label>Postal Code</label>
                  <input type="text" placeholder="Postal Code" />
                </div>
              </div>
            </div>

            {/* Payment Details */}
            <div className="form-card">
              <h2>Payment Details</h2>

              <div className="form-group">
                <label>Card Number</label>
                <input type="text" placeholder="1234 5678 9012 3456" />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Expiry Date</label>
                  <input type="text" placeholder="MM/YY" />
                </div>

                <div className="form-group">
                  <label>CVV</label>
                  <input type="text" placeholder="123" />
                </div>
              </div>
            </div>

            <button type="submit" className="place-order-btn">
              Place Order
            </button>
          </form>
        </section>

        <aside className="order-summary">
          <div className="summary-card">
            <h2>Order Summary</h2>

            {product ? (
              <div className="product-item">
                <img src={product.image} alt={product.name} />
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <p>Selected bag</p>
                  <p>Qty: 1</p>
                </div>
                <span>${product.price}</span>
              </div>
            ) : (
              <p>No product selected.</p>
            )}

            <div className="price-row">
              <span>Subtotal</span>
              <span>{product ? `$${product.price}` : "$0.00 "}</span>
            </div>
            <div className="price-row">
              <span>Shipping</span>
              <span>$10.00</span>
            </div>
            <div className="price-row total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Checkout;
