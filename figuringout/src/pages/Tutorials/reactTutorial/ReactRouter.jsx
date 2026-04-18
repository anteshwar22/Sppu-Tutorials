import React from "react";

const ReactRouter = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">React Router</h1>

      <p className="text-gray-700 mb-4">
        <b>React Router</b> is a library used to handle navigation between
        different pages in a React application without reloading the page.
      </p>

      <p className="text-gray-700 mb-4">
        It allows you to create a <b>Single Page Application (SPA)</b> where
        different components are rendered based on the URL.
      </p>

      {/* Installation */}

      <h2 className="text-xl font-semibold mt-6 mb-3">Installation</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`npm install react-router-dom`}
      </pre>

      {/* Basic Example */}

      <h2 className="text-xl font-semibold mt-6 mb-3">Basic Example</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </BrowserRouter>
  );
}`}
      </pre>

      {/* Link Example */}

      <h2 className="text-xl font-semibold mt-6 mb-3">Navigation using Link</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`import { Link } from "react-router-dom";

<Link to="/">Home</Link>
<Link to="/about">About</Link>`}
      </pre>

      {/* Important Components */}

      <h2 className="text-xl font-semibold mt-8 mb-4">Important Components</h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Component</th>
              <th className="p-3 border">Purpose</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3 border">BrowserRouter</td>
              <td className="p-3 border">Wraps the entire app for routing</td>
            </tr>

            <tr>
              <td className="p-3 border">Routes</td>
              <td className="p-3 border">Container for route definitions</td>
            </tr>

            <tr>
              <td className="p-3 border">Route</td>
              <td className="p-3 border">Defines a path and component</td>
            </tr>

            <tr>
              <td className="p-3 border">Link</td>
              <td className="p-3 border">
                Used for navigation without page reload
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Key Points */}

      <h2 className="text-xl font-semibold mt-8 mb-3">Key Points</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>React Router enables navigation in React apps.</li>
        <li>It helps build single-page applications.</li>
        <li>It prevents full page reloads.</li>
        <li>Navigation is done using Link instead of anchor tags.</li>
      </ul>
    </div>
  );
};

export default ReactRouter;
