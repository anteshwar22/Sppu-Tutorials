import React from "react";

const ProjectStructure = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">React Project Structure</h1>

      <p className="text-gray-700 mb-4">
        When you create a React project using Vite or Create React App, the
        project contains several folders and files that help organize your
        application.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-3">
        Typical React Folder Structure
      </h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`my-react-app
│
├── node_modules
├── public
│   └── index.html
│
├── src
│   ├── assets
│   ├── components
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── vite.config.js`}
      </pre>

      <h2 className="text-xl font-semibold mt-6 mb-3">Important Folders</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>
          <b>node_modules</b> – contains all installed npm packages.
        </li>

        <li>
          <b>public</b> – contains static files like index.html.
        </li>

        <li>
          <b>src</b> – main folder where your React code lives.
        </li>

        <li>
          <b>components</b> – reusable UI components.
        </li>

        <li>
          <b>App.jsx</b> – root component of the application.
        </li>

        <li>
          <b>main.jsx</b> – entry point where React renders the app.
        </li>
      </ul>
    </div>
  );
};

export default ProjectStructure;
