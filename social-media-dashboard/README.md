# Social Media Dashboard

A modern, responsive social media dashboard application built with React, Vite, and Tailwind CSS. This project demonstrates a functional frontend architecture with state management using Redux Toolkit, routing with React Router, and a mock authentication system.

# Link: https://spandan-social-media-2025.netlify.app/

## Features

-   **Authentication**: Mock login and registration system with persistent session using `localStorage`.
-   **Feed**: View posts fetched from a mock API (JSONPlaceholder), with infinite scroll simulation.
-   **Interactivity**:
    -   Create new posts.
    -   Like and comment on posts.
    -   Delete your own posts.
-   **Search**: Real-time search filtering for posts in the feed.
-   **Profile**: User profile view with a list of suggested users to follow.
-   **Settings**:
    -   Update profile information (Display Name, Profile Picture).
    -   **Dark/Light Mode**: System-aware theme toggling.
-   **Responsive Design**: Fully responsive UI built with Tailwind CSS.

## Tech Stack

-   **Frontend Framework**: React (v18)
-   **Build Tool**: Vite
-   **State Management**: Redux Toolkit & React Context API
-   **Routing**: React Router DOM
-   **Styling**: Tailwind CSS

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

-   Node.js (v14 or higher recommended)
-   npm (Node Package Manager)

### Installation

1.  Clone the repository (if applicable) or navigate to the project folder:
    ```bash
    cd social-media-dashboard
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### Running the Application

Start the development server:

```bash
npm run dev
```

Open your browser and visit `http://localhost:5173` (or the port shown in your terminal).

## Usage

1.  **Login**: You can log in using the mock credentials:
    -   **Username**: `test`
    -   **Password**: `password`
    -   Alternatively, use the **Sign Up** page to create a new mock account.
2.  **Navigation**: Use the navbar to switch between the Feed, Profile, and Settings pages.
3.  **Theme**: Toggle between Dark and Light mode using the switch in the navbar or settings page.

## Project Structure

```
src/
├── components/     # Reusable UI components (Navbar, Post, PostForm, etc.)
├── contexts/       # React Contexts (AuthContext, ThemeContext)
├── hooks/          # Custom React hooks (usePosts)
├── pages/          # Page components (Feed, Login, Profile, Register, Settings)
├── store/          # Redux store and slices
├── App.jsx         # Main application component with routing
└── main.jsx        # Entry point
```

## License

This project is open source and available under the MIT License.