import React, { useState } from 'react';

 function RandomNumberGenerator() {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const num = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(num);
  };

  return (
    <section className="section-card random-section">
      <h2>Random Number Generator</h2>
      
      {/* Conditional Rendering for Generated Number Status */}
      {randomNumber !== null ? (
        <div className="display-value">{randomNumber}</div>
      ) : (
        <p className="status-message info">No number generated yet</p>
      )}
      
      <button onClick={generateRandomNumber} className="btn btn-random">
        Generate Random Number
      </button>
    </section>
  );
}

export default RandomNumberGenerator