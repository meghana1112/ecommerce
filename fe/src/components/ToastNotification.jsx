import React, { useState, useEffect } from 'react';

// For a real app, this would be managed by Context, but we'll export an event emitter approach or just a simple static component for now.
// We will use a simple event listener to trigger toasts.

export const showToast = (message, type = 'success') => {
  const event = new CustomEvent('show-toast', { detail: { message, type } });
  window.dispatchEvent(event);
};

const ToastNotification = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const handleShowToast = (e) => {
      const id = Date.now();
      setToasts(prev => [...prev, { id, ...e.detail }]);
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id));
      }, 3000);
    };

    window.addEventListener('show-toast', handleShowToast);
    return () => window.removeEventListener('show-toast', handleShowToast);
  }, []);

  return (
    <div className="toast-container position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1055 }}>
      {toasts.map(toast => (
        <div key={toast.id} className={`toast show align-items-center text-white bg-${toast.type} border-0 mb-2`} role="alert" aria-live="assertive" aria-atomic="true">
          <div className="d-flex">
            <div className="toast-body">
              {toast.message}
            </div>
            <button type="button" className="btn-close btn-close-white me-2 m-auto" onClick={() => setToasts(prev => prev.filter(t => t.id !== toast.id))} aria-label="Close"></button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToastNotification;
