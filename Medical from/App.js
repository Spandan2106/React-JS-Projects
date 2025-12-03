// React is global, Form is loaded from form.js
function App() {
  return (
    <div className="App">
      {/* The Form component is now styled via form.css */}
      <Form />
    </div>
  );
}

// Find the root div and render our App component into it.
ReactDOM.render(<App />, document.getElementById('root'));