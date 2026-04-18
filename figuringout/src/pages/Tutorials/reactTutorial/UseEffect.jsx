import React from "react";

const UseEffect = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">useEffect Hook</h1>

      <p className="text-gray-700 mb-4">
        <b>useEffect</b> is a React Hook used to perform side effects in
        functional components.
      </p>

      <p className="text-gray-700 mb-4">
        Side effects include tasks like fetching data from an API, updating the
        DOM, setting timers, or subscribing to events.
      </p>

      {/* Syntax */}

      <h2 className="text-xl font-semibold mt-6 mb-3">Syntax</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`useEffect(() => {
  // side effect code
}, [dependencies]);`}
      </pre>

      <p className="text-gray-700 mt-4">Here:</p>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>
          <b>useEffect</b> runs after the component renders.
        </li>
        <li>The dependency array controls when the effect runs.</li>
      </ul>

      {/* Example */}

      <h2 className="text-xl font-semibold mt-6 mb-3">
        Example: Run Once on Component Mount
      </h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`import React, { useEffect } from "react";

function Example() {

  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  return <h2>Hello React</h2>;
}`}
      </pre>

      {/* Example with Dependency */}

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Example: Run When State Changes
      </h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`import React, { useState, useEffect } from "react";

function Counter() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      Increase
    </button>
  );
}`}
      </pre>

      {/* useEffect Behavior Table */}

      <h2 className="text-xl font-semibold mt-8 mb-4">useEffect Behavior</h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Dependency Array</th>
              <th className="p-3 border">Behavior</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3 border">[]</td>
              <td className="p-3 border">Runs once after component mounts</td>
            </tr>

            <tr>
              <td className="p-3 border">[value]</td>
              <td className="p-3 border">Runs when the value changes</td>
            </tr>

            <tr>
              <td className="p-3 border">No dependency array</td>
              <td className="p-3 border">Runs after every render</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Key Points */}

      <h2 className="text-xl font-semibold mt-8 mb-3">Key Points</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>useEffect handles side effects in React components.</li>
        <li>It runs after the component renders.</li>
        <li>The dependency array controls when it runs.</li>
        <li>Commonly used for API calls and subscriptions.</li>
      </ul>
    </div>
  );
};

export default UseEffect;
