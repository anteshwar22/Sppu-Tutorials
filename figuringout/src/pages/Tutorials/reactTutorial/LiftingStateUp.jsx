import React from "react";

const LiftingStateUp = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Lifting State Up in React</h1>

      <p className="text-gray-700 mb-4">
        <b>Lifting State Up</b> means moving state from a child component to a
        common parent component so that multiple components can share and use
        the same state.
      </p>

      <p className="text-gray-700 mb-4">
        This is useful when two or more components need access to the same data.
        Instead of keeping state in each component, we move it to their
        <b>closest common parent</b>.
      </p>

      {/* Problem Example */}

      <h2 className="text-xl font-semibold mt-6 mb-3">
        Problem Without Lifting State
      </h2>

      <p className="text-gray-700 mb-4">
        Suppose two components need the same data, but each component manages
        its own state. This can cause inconsistent data.
      </p>

      {/* Example */}

      <h2 className="text-xl font-semibold mt-6 mb-3">
        Example of Lifting State Up
      </h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`import React, { useState } from "react";

function Parent() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <ChildA count={count} />
      <ChildB setCount={setCount} />
    </div>
  );
}

function ChildA({ count }) {
  return <h2>Count: {count}</h2>;
}

function ChildB({ setCount }) {
  return (
    <button onClick={() => setCount(prev => prev + 1)}>
      Increase
    </button>
  );
}`}
      </pre>

      {/* Explanation */}

      <h2 className="text-xl font-semibold mt-8 mb-3">How It Works</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>The state is stored in the parent component.</li>
        <li>
          The parent passes data to children using <b>props</b>.
        </li>
        <li>
          Child components can update the state using functions passed as props.
        </li>
        <li>This keeps data consistent across components.</li>
      </ul>

      {/* Key Points */}

      <h2 className="text-xl font-semibold mt-8 mb-3">Key Points</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Lifting state up helps share data between components.</li>
        <li>State is moved to the closest common parent.</li>
        <li>Data flows down using props.</li>
        <li>State updates are handled in the parent component.</li>
      </ul>
    </div>
  );
};

export default LiftingStateUp;
