import React from "react";

const CustomHooks = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Custom Hooks in React</h1>

      <p className="text-gray-700 mb-4">
        <b>Custom Hooks</b> allow you to reuse logic between multiple React
        components. They are JavaScript functions that use built-in hooks like{" "}
        <b>useState</b>, <b>useEffect</b>, etc.
      </p>

      <p className="text-gray-700 mb-4">
        A custom hook must start with the word <b>"use"</b> so React can
        recognize it as a hook.
      </p>

      {/* Example */}

      <h2 className="text-xl font-semibold mt-6 mb-3">
        Example of Custom Hook
      </h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`import { useState } from "react";

function useCounter() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return { count, increment };
}`}
      </pre>

      {/* Using Custom Hook */}

      <h2 className="text-xl font-semibold mt-6 mb-3">Using the Custom Hook</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`import React from "react";
import useCounter from "./useCounter";

function CounterComponent() {

  const { count, increment } = useCounter();

  return (
    <div>
      <h2>{count}</h2>

      <button onClick={increment}>
        Increase
      </button>
    </div>
  );
}`}
      </pre>

      {/* Benefits */}

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Benefits of Custom Hooks
      </h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Reusable logic across components.</li>
        <li>Cleaner and more organized code.</li>
        <li>Reduces code duplication.</li>
      </ul>

      {/* Key Points */}

      <h2 className="text-xl font-semibold mt-8 mb-3">Key Points</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Custom hooks are reusable functions.</li>
        <li>
          They must start with the word <b>use</b>.
        </li>
        <li>They can use other React hooks inside.</li>
      </ul>
    </div>
  );
};

export default CustomHooks;
