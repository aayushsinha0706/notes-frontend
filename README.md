# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

The app is a React application that manages a list of notes. It allows users to view, add, and toggle the importance of notes. The app fetches all notes from a server using the noteService and displays them in a list. Users can add new notes by entering text in an input field and clicking the "Save" button. The app also has a toggle button to show either all notes or only important notes. When a note is deleted from the server, an error message is displayed for a short duration. The app also has a footer component.

Here are the steps to run the app:
- Open your terminal or command prompt.
- Navigate to the directory where your project is located.
- Install the dependencies by running the following command:
``` npm install ```
- Start the server
``` npm run server ```
- Start the React App
```npm run dev```