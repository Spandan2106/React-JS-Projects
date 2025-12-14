// App.tsx file

import React, { useState, FC, Fragment } from 'react';

// The AppProps interface is no longer needed as we are not passing props.

// React Functional component using TypeScript
const App: FC = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleToggle = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div className="app-container">
      <div className="app-header">
        <header>
          <h1>Typescript+react app</h1>
          <p className="subtitle">by Spandan</p>
          <h2>hey devs!</h2>
          <p>this is my first typescript react app</p>
          <button
            onClick={handleToggle}
            className="toggle-button"
            aria-expanded={showMessage}
            aria-controls="toggle-message-content"
          >
            Toggle Message
          </button>
          {showMessage && <p id="toggle-message-content" className="toggle-message">it is my first typescript app,<br />I have created it by Typescript and React</p>}
        </header>
        <main className="thank-you-section">
          <h2>Thank you for visiting my app!</h2>
          <p>Hope you have a great day!</p>
          <p>Feel free to explore and modify the code to learn more about TypeScript and React.</p>
          <p>Happy coding!</p>
          <p>-- Spandan</p>
        </main>
      </div>
      <footer className="app-footer">@2025 all rights to Spandan</footer>
    </div>
  );
};

export default App;