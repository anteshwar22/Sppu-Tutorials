import React from "react";

const JSX = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">JSX in React</h1>

      <p className="text-gray-700 mb-4">
        JSX stands for <b>JavaScript XML</b>. It allows you to write HTML-like
        syntax inside JavaScript. React uses JSX to describe how the UI should
        look.
      </p>

      <p className="text-gray-700 mb-4">
        JSX makes it easier to create and visualize UI components.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-3">Example of JSX</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`const App = () => {
  return (
    <div>
      <h1>Hello React</h1>
      <p>This is JSX syntax</p>
    </div>
  );
};`}
      </pre>

      <h2 className="text-xl font-semibold mt-6 mb-3">JSX Rules</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>JSX must return a single parent element.</li>
        <li>
          Use <b>className</b> instead of class.
        </li>
        <li>JavaScript expressions are written inside {"{ }"}.</li>
        <li>All tags must be properly closed.</li>
      </ul>
    </div>
  );
};

export default JSX;
