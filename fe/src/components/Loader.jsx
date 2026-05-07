import React from 'react';

const Loader = ({ fullScreen = false }) => {
  const loader = (
    <div className="d-flex justify-content-center align-items-center p-5">
      <div className="spinner-border" style={{ color: 'var(--primary-color)', width: '3rem', height: '3rem' }} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 w-100" style={{ backgroundColor: 'var(--bg-color)' }}>
        {loader}
      </div>
    );
  }

  return loader;
};

export default Loader;
