import React from "react";

const ReactHooks = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">React Hooks</h1>

      <p className="text-gray-700 mb-4">
        <b>React Hooks</b> are functions that allow you to use React features
        such as state and lifecycle methods inside functional components.
      </p>

      <p className="text-gray-700 mb-4">
        Before Hooks were introduced in React 16.8, developers had to use
        <b>class components</b> to manage state and lifecycle methods. Hooks
        allow these features to be used in <b>functional components</b>.
      </p>

      {/* Example */}

      <h2 className="text-xl font-semibold mt-6 mb-3">
        Example of a Hook (useState)
      </h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`import React, { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}`}
      </pre>

      {/* Common Hooks Table */}

      <h2 className="text-xl font-semibold mt-8 mb-4">Common React Hooks</h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Hook</th>
              <th className="p-3 border">Purpose</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3 border">useState</td>
              <td className="p-3 border">
                Manages state in functional components
              </td>
            </tr>

            <tr>
              <td className="p-3 border">useEffect</td>
              <td className="p-3 border">
                Handles side effects such as API calls
              </td>
            </tr>

            <tr>
              <td className="p-3 border">useRef</td>
              <td className="p-3 border">
                Access DOM elements or store mutable values
              </td>
            </tr>

            <tr>
              <td className="p-3 border">useContext</td>
              <td className="p-3 border">
                Access global state without prop drilling
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Rules */}

      <h2 className="text-xl font-semibold mt-8 mb-3">Rules of Hooks</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Hooks can only be used inside React functional components.</li>
        <li>Hooks must be called at the top level of a component.</li>
        <li>Hooks cannot be used inside loops or conditions.</li>
      </ul>

      {/* Key Points */}

      <h2 className="text-xl font-semibold mt-8 mb-3">Key Points</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>
          Hooks allow functional components to use state and lifecycle features.
        </li>
        <li>They simplify React code compared to class components.</li>
        <li>Hooks make code reusable and easier to maintain.</li>
      </ul>
    </div>
  );
};

export default ReactHooks;
