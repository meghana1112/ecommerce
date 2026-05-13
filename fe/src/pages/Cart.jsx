import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { BsTrash, BsArrowLeft, BsBagX } from 'react-icons/bs';

const Cart = () => {
  const { cart, updateCartQuantity, removeFromCart } = useApp();

  const subtotal = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  const shipping = subtotal > 10000 ? 0 : 1000;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="container py-5 text-center fade-in d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '60vh' }}>
        <BsBagX style={{ fontSize: '5rem', color: 'var(--border-color)', marginBottom: '2rem' }} />
        <h2 className="fw-bold mb-3">Your cart is empty</h2>
        <p className="text-muted mb-4">Looks like you haven't added any resin masterpieces yet.</p>
        <Link to="/products" className="btn btn-gradient px-4 py-2">Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="container py-5 fade-in">
      <h1 className="fw-bold mb-4">Shopping Cart</h1>
      
      <div className="row g-5">
        <div className="col-lg-8">
          <div className="glass-card overflow-hidden">
            <div className="table-responsive">
              <table className="table table-borderless mb-0 align-middle">
                <thead className="border-bottom" style={{ borderColor: 'var(--border-color)' }}>
                  <tr>
                    <th scope="col" className="py-3 px-4">Product</th>
                    <th scope="col" className="py-3">Price</th>
                    <th scope="col" className="py-3 text-center">Quantity</th>
                    <th scope="col" className="py-3 text-end px-4">Total</th>
                    <th scope="col" className="py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.product.id} className="border-bottom" style={{ borderColor: 'var(--border-color)' }}>
                      <td className="p-4">
                        <div className="d-flex align-items-center gap-3">
                          <img 
                            src={item.product.image} 
                            alt={item.product.name} 
                            className="rounded-3 object-fit-cover shadow-sm"
                            style={{ width: '80px', height: '80px' }}
                          />
                          <div>
                            <Link to={`/product/${item.product.id}`} className="text-decoration-none text-reset fw-semibold d-block mb-1">
                              {item.product.name}
                            </Link>
                            <span className="badge bg-light text-dark">{item.product.category}</span>
                          </div>
                        </div>
                      </td>
                      <td className="fw-semibold text-muted">₹{item.product.price.toFixed(2)}</td>
                      <td>
                        <div className="d-flex align-items-center justify-content-center border rounded-pill p-1 mx-auto" style={{ maxWidth: '120px' }}>
                          <button className="btn btn-sm btn-link text-decoration-none text-dark shadow-none px-2" onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}>-</button>
                          <span className="px-2 fw-bold">{item.quantity}</span>
                          <button className="btn btn-sm btn-link text-decoration-none text-dark shadow-none px-2" onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}>+</button>
                        </div>
                      </td>
                      <td className="text-end fw-bold px-4">₹{(item.product.price * item.quantity).toFixed(2)}</td>
                      <td className="pe-4 text-end">
                        <button className="btn btn-link text-danger shadow-none p-0" onClick={() => removeFromCart(item.product.id)}>
                          <BsTrash fs-5 />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-4">
            <Link to="/products" className="text-decoration-none fw-semibold" style={{ color: 'var(--primary-color)' }}>
              <BsArrowLeft /> Continue Shopping
            </Link>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="glass-card p-4 sticky-top" style={{ top: '100px' }}>
            <h4 className="fw-bold mb-4">Order Summary</h4>
            
            <div className="d-flex justify-content-between mb-3 text-muted">
              <span>Subtotal</span>
              <span className="fw-semibold text-reset">₹{subtotal.toFixed(2)}</span>
            </div>
            
            <div className="d-flex justify-content-between mb-4 text-muted">
              <span>Shipping</span>
              <span className="fw-semibold text-reset">{shipping === 0 ? 'Free' : `₹${shipping.toFixed(2)}`}</span>
            </div>
            
            <div className="d-flex justify-content-between mb-4 pt-3 border-top fw-bold fs-5" style={{ borderColor: 'var(--border-color)' }}>
              <span>Total</span>
              <span style={{ color: 'var(--primary-color)' }}>₹{total.toFixed(2)}</span>
            </div>
            
            <Link to="/checkout" className="btn btn-gradient w-100 py-3 fw-bold shadow">
              Proceed to Checkout
            </Link>
            
            {shipping > 0 && (
              <p className="text-center text-muted small mt-3 mb-0">
                Add ₹{(10000 - subtotal).toFixed(2)} more for free shipping!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
