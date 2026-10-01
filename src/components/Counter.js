import React, { useState } from 'react';

 function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <section className="section-card counter-section">
      <h2>Counter Component</h2>
      <div className="display-value">{count}</div>
      
      {/* Conditional Rendering for Minimum Limit */}
      {count === 0 && (
        <p className="status-message warning">Minimum limit reached</p>
      )}

      <div className="button-group">
        <button onClick={handleIncrement} className="btn btn-increment">
          Increment
        </button>
        <button 
          onClick={handleDecrement} 
          className="btn btn-decrement"
          disabled={count === 0}
        >
          Decrement
        </button>
        <button onClick={handleReset} className="btn btn-reset">
          Reset
        </button>
      </div>
    </section>
  );
}

export default Counter