import React from 'react';
import './Greeting.css';


function Greeting() {
  return (
    <section className="Greeting-section">
      <div className="Greeting-container">
        <div className="img-container">
          <img alt="King James" src="https://i.pinimg.com/originals/b2/0f/61/b20f61d3faa7286c267b2e5636f1c101.png" />
        </div>
        <div className="text-container">
          <p>This is a text.</p>
        </div>
      </div>
    </section>
  );
}

export default Greeting;