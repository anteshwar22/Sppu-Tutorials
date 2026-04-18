import React from "react";

const UseState = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">useState Hook</h1>

      <p className="text-gray-700 mb-4">
        <b>useState</b> is a React Hook that allows functional components to
        store and manage state.
      </p>

      <p className="text-gray-700 mb-4">
        State represents data that can change over time. When the state changes,
        React automatically updates the UI.
      </p>

      {/* Syntax */}

      <h2 className="text-xl font-semibold mt-6 mb-3">Syntax</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`const [state, setState] = useState(initialValue);`}
      </pre>

      <p className="text-gray-700 mt-4">Here:</p>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>
          <b>state</b> – current state value
        </li>
        <li>
          <b>setState</b> – function used to update state
        </li>
        <li>
          <b>initialValue</b> – starting value of the state
        </li>
      </ul>

      {/* Example */}

      <h2 className="text-xl font-semibold mt-6 mb-3">Example</h2>

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
}

export default Counter;`}
      </pre>

      {/* Example with Input */}

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Example with Input Field
      </h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`function NameInput() {

  const [name, setName] = useState("");

  return (
    <div>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Hello {name}</p>

    </div>
  );
}`}
      </pre>

      {/* Key Points */}

      <h2 className="text-xl font-semibold mt-8 mb-3">Key Points</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>useState is used to store component state.</li>
        <li>State updates trigger a re-render.</li>
        <li>Multiple state variables can be used in one component.</li>
        <li>useState only works inside functional components.</li>
      </ul>
    </div>
  );
};

export default UseState;
