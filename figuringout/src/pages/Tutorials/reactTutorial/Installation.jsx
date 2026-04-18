import React from "react";

const Installation = () => {
  return (
    <section id="installation" className="mb-12">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        React Installation
      </h1>

      <p className="text-gray-600 leading-relaxed">
        To start using React, you need Node.js installed on your computer. The
        easiest way to create a React project is by using Vite.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Create React App using Vite
      </h2>

      <pre className="bg-gray-900 text-green-400 p-5 rounded-lg overflow-x-auto text-sm">
        {`npm create vite@latest my-react-app
cd my-react-app
npm install
npm run dev`}
      </pre>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Project Structure</h2>

      <pre className="bg-gray-900 text-green-400 p-5 rounded-lg overflow-x-auto text-sm">
        {`my-react-app
 ├ node_modules
 ├ public
 ├ src
 │  ├ App.jsx
 │  ├ main.jsx
 │  └ components
 ├ package.json`}
      </pre>
    </section>
  );
};

export default Installation;
