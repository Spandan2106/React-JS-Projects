# React Medical Form

A simple, single-page medical information form built using React. This project demonstrates the use of React functional components and the `useState` hook to manage form state. The entire application runs in the browser without a build step, relying on CDN links for React and Babel.

## link to see in browser: https://clinquant-starlight-31882b.netlify.app/

## Features

The form collects the following information:

- **Personal Details:** Name, Age, Location, Phone, Gmail
- **Professional Details:** Education, Course, Occupation
- **Physical Metrics:** Height (cm), Weight (kg)
- **Medical History:** Pre-existing Diseases, Current Medicines, Past Surgeries

## Screenshot

*(You can add a screenshot of your form here)*

## How to Run

Since this project doesn't use a bundler like Webpack or a framework like Next.js, you can run it directly in the browser.

1.  **Prerequisites:** You only need a modern web browser.

2.  **File Structure:**
    Ensure you have the following files in the same directory:

    ```
    /
    |-- index.html
    |-- form.js
    ```

3.  **Create `index.html`:**
    Create an `index.html` file and add the following code. This file will load React, Babel, and your `form.js` component.

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>React Medical Form</title>
        <link rel="stylesheet" href="styles.css"> <!-- Optional: for styling -->
    </head>
    <body>
        <div id="root"></div>

        <!-- React and ReactDOM from CDN -->
        <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>

        <!-- Babel for JSX transpilation -->
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

        <!-- Your React Component -->
        <script type="text/babel" src="form.js"></script>

        <!-- Mount the component -->
        <script type="text/babel">
            ReactDOM.render(<Form />, document.getElementById('root'));
        </script>
    </body>
    </html>
    ```

4.  **Open in Browser:**
    Open the `index.html` file in your web browser. The medical form should be rendered and fully interactive.

## Code Overview (`form.js`)

The application logic is contained entirely within `form.js`.

- **Component:** It consists of a single functional component named `Form`.

- **State Management:** The `React.useState` hook is used to manage the state for each of the 13 form fields (e.g., `name`, `age`, `education`). An additional state variable, `submitted`, is used to track whether the form has been submitted.

- **Event Handling:**
  -   Each input and select element has an `onChange` event handler that updates the corresponding state variable with the user's input.
  -   The "Submit" button has an `onClick` handler that calls the `handleSubmit` function.

- **Submission Logic:**
  -   The `handleSubmit` function performs a basic validation check to ensure that the `name` and `age` fields are not empty.
  -   If the validation passes, it sets the `submitted` state to `true`.
  -   When `submitted` is `true`, a "Form Submitted Successfully!" message is conditionally rendered at the bottom of the form.

> **Note:** This form does not send data to a server. All data is held in the component's state and is lost upon page refresh. For a real-world application, you would need to add functionality to send the form data to a backend API.