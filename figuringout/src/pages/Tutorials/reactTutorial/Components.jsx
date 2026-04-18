import React from "react";

const Components = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">React Components</h1>

      <p className="text-gray-700 mb-4">
        Components are the building blocks of a React application. They allow
        you to split the UI into independent and reusable pieces.
      </p>

      <p className="text-gray-700 mb-4">
        Each component returns JSX that describes how a part of the UI should
        appear on the screen.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-3">
        Example of a Component
      </h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`function Welcome() {
  return <h1>Hello, React!</h1>;
}

export default Welcome;`}
      </pre>

      <h2 className="text-xl font-semibold mt-6 mb-3">Using a Component</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`import Welcome from "./Welcome";

function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}`}
      </pre>

      <h2 className="text-xl font-semibold mt-6 mb-3">Types of Components</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>
          <b>Functional Components</b> – modern and most commonly used.
        </li>
        <li>
          <b>Class Components</b> – older approach using ES6 classes.
        </li>
      </ul>
    </div>
  );
};

export default Components;
