import React from 'react';
import './style.css'; // Import CSS file for styling

const QuoteComponent = () => {
  return (
    <div className="quote-container">
      <div className="quote-content">
        <h1 className="quote-text">Photography is the only language that can be understood anywhere in the world.</h1>
        <p className="author">- Bruno Barbey</p>
      </div>
    </div>
  );
};

export default QuoteComponent;
