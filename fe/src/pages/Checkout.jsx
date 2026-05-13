import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { showToast } from '../components/ToastNotification';

const Checkout = () => {
  const { cart, clearCart, user } = useApp();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: user?.email || '', address: '', city: '', zip: '', cardName: '', cardNumber: '', expDate: '', cvv: ''
  });

  const subtotal = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  const total = subtotal + (subtotal > 10000 ? 0 : 1000);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) return;
    
    // Simulate order processing
    showToast('Order placed successfully! Thank you for shopping with Megsy.', 'success');
    clearCart();
    navigate('/profile');
  };

  if (cart.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h2>Your cart is empty</h2>
        <button onClick={() => navigate('/products')} className="btn btn-gradient mt-3">Back to Shop</button>
      </div>
    );
  }

  return (
    <div className="container py-5 fade-in">
      <h1 className="fw-bold mb-5 text-center">Secure Checkout</h1>
      <div className="row g-5">
        <div className="col-lg-8">
          <form onSubmit={handleSubmit} className="glass-card p-4 p-md-5">
            <h4 className="fw-bold mb-4 border-bottom pb-2">Shipping Information</h4>
            <div className="row g-3 mb-5">
              <div className="col-md-6">
                <label className="form-label text-muted">First Name</label>
                <input type="text" name="firstName" className="form-control shadow-none" required value={formData.firstName} onChange={handleChange} />
              </div>
              <div className="col-md-6">
                <label className="form-label text-muted">Last Name</label>
                <input type="text" name="lastName" className="form-control shadow-none" required value={formData.lastName} onChange={handleChange} />
              </div>
              <div className="col-12">
                <label className="form-label text-muted">Email</label>
                <input type="email" name="email" className="form-control shadow-none" required value={formData.email} onChange={handleChange} />
              </div>
              <div className="col-12">
                <label className="form-label text-muted">Address</label>
                <input type="text" name="address" className="form-control shadow-none" required value={formData.address} onChange={handleChange} />
              </div>
              <div className="col-md-6">
                <label className="form-label text-muted">City</label>
                <input type="text" name="city" className="form-control shadow-none" required value={formData.city} onChange={handleChange} />
              </div>
              <div className="col-md-6">
                <label className="form-label text-muted">Zip Code</label>
                <input type="text" name="zip" className="form-control shadow-none" required value={formData.zip} onChange={handleChange} />
              </div>
            </div>

            <h4 className="fw-bold mb-4 border-bottom pb-2">Payment Details</h4>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label className="form-label text-muted">Name on Card</label>
                <input type="text" name="cardName" className="form-control shadow-none" required value={formData.cardName} onChange={handleChange} />
              </div>
              <div className="col-md-6">
                <label className="form-label text-muted">Card Number</label>
                <input type="text" name="cardNumber" className="form-control shadow-none" placeholder="xxxx-xxxx-xxxx-xxxx" required value={formData.cardNumber} onChange={handleChange} />
              </div>
              <div className="col-md-6">
                <label className="form-label text-muted">Expiration Date</label>
                <input type="text" name="expDate" className="form-control shadow-none" placeholder="MM/YY" required value={formData.expDate} onChange={handleChange} />
              </div>
              <div className="col-md-6">
                <label className="form-label text-muted">CVV</label>
                <input type="text" name="cvv" className="form-control shadow-none" required value={formData.cvv} onChange={handleChange} />
              </div>
            </div>

            <button type="submit" className="btn btn-gradient btn-lg w-100 shadow mt-3">Place Order - ₹{total.toFixed(2)}</button>
          </form>
        </div>

        <div className="col-lg-4">
          <div className="glass-card p-4 sticky-top" style={{ top: '100px' }}>
            <h4 className="fw-bold mb-4">Your Order</h4>
            <ul className="list-group list-group-flush mb-4 bg-transparent">
              {cart.map(item => (
                <li key={item.product.id} className="list-group-item bg-transparent d-flex justify-content-between align-items-center border-bottom px-0" style={{ borderColor: 'var(--border-color)' }}>
                  <div>
                    <h6 className="my-0">{item.product.name}</h6>
                    <small className="text-muted">Qty: {item.quantity}</small>
                  </div>
                  <span className="text-muted">₹{(item.product.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
              <li className="list-group-item bg-transparent d-flex justify-content-between border-0 px-0 pt-3">
                <span>Total (INR)</span>
                <strong style={{ color: 'var(--primary-color)' }}>₹{total.toFixed(2)}</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
