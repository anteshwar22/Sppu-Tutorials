import React from "react";

const UseRef = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">useRef Hook</h1>

      <p className="text-gray-700 mb-4">
        <b>useRef</b> is a React Hook used to access DOM elements directly or
        store mutable values that do not trigger re-renders.
      </p>

      <p className="text-gray-700 mb-4">
        It returns a reference object with a <b>current</b> property that holds
        the value.
      </p>

      {/* Syntax */}

      <h2 className="text-xl font-semibold mt-6 mb-3">Syntax</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`const refName = useRef(initialValue);`}
      </pre>

      <ul className="list-disc ml-6 text-gray-700 space-y-2 mt-4">
        <li>
          <b>useRef()</b> creates a reference.
        </li>
        <li>
          The value is stored in <b>ref.current</b>.
        </li>
      </ul>

      {/* Example 1 */}

      <h2 className="text-xl font-semibold mt-6 mb-3">
        Example: Access DOM Element
      </h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`import React, { useRef } from "react";

function FocusInput() {

  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>

      <input ref={inputRef} type="text" />

      <button onClick={focusInput}>
        Focus Input
      </button>

    </div>
  );
}`}
      </pre>

      {/* Example 2 */}

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Example: Store Mutable Value
      </h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`import React, { useRef } from "react";

function TimerExample() {

  const renderCount = useRef(0);

  renderCount.current++;

  return (
    <h2>Rendered {renderCount.current} times</h2>
  );
}`}
      </pre>

      {/* Comparison Table */}

      <h2 className="text-xl font-semibold mt-8 mb-4">useRef vs useState</h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Hook</th>
              <th className="p-3 border">Behavior</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3 border">useState</td>
              <td className="p-3 border">
                Causes component re-render when value changes
              </td>
            </tr>

            <tr>
              <td className="p-3 border">useRef</td>
              <td className="p-3 border">
                Does not trigger re-render when value changes
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Key Points */}

      <h2 className="text-xl font-semibold mt-8 mb-3">Key Points</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>useRef stores mutable values.</li>
        <li>It can access DOM elements directly.</li>
        <li>Updating ref values does not re-render the component.</li>
        <li>Useful for timers, focus management, and DOM manipulation.</li>
      </ul>
    </div>
  );
};

export default UseRef;
