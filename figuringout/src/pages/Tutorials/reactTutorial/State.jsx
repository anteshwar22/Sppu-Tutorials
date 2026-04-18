import React from "react";

const State = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">State in React</h1>

      <p className="text-gray-700 mb-4">
        <b>State</b> is used to store data that can change over time in a React
        component. When the state changes, React automatically updates the UI.
      </p>

      <p className="text-gray-700 mb-4">
        In modern React, state is usually managed using the <b>useState Hook</b>
        .
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-3">
        Example of State using useState
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
}

export default Counter;`}
      </pre>

      <h2 className="text-xl font-semibold mt-6 mb-3">How it Works</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>
          <b>useState(0)</b> initializes state with value 0.
        </li>
        <li>
          <b>count</b> stores the current state value.
        </li>
        <li>
          <b>setCount</b> updates the state.
        </li>
        <li>When state changes, React re-renders the component.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-3">Key Points</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>State stores dynamic data.</li>
        <li>State changes trigger UI updates.</li>
        <li>Managed using hooks like useState.</li>
      </ul>
    </div>
  );
};

export default State;
