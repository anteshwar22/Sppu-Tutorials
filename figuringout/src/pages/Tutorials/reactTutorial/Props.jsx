import React from "react";

const Props = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Props in React</h1>

      <p className="text-gray-700 mb-4">
        <b>Props</b> stands for <b>Properties</b>. They are used to pass data
        from one component to another component in React.
      </p>

      <p className="text-gray-700 mb-4">
        Props are read-only, which means a child component cannot modify them.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-3">Example of Props</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default Welcome;`}
      </pre>

      <h2 className="text-xl font-semibold mt-6 mb-3">Using the Component</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`import Welcome from "./Welcome";

function App() {
  return (
    <div>
      <Welcome name="Anteshwar" />
      <Welcome name="React Learner" />
    </div>
  );
}`}
      </pre>

      <h2 className="text-xl font-semibold mt-6 mb-3">Important Points</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Props are used to pass data between components.</li>
        <li>Props are read-only.</li>
        <li>They help make components reusable.</li>
      </ul>
    </div>
  );
};

export default Props;
