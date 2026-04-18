import React from "react";

const PerformanceOptimization = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Performance Optimization in React
      </h1>

      <p className="text-gray-700 mb-4">
        Performance optimization helps make React applications faster and more
        efficient. It reduces unnecessary re-renders and improves the overall
        user experience.
      </p>

      <p className="text-gray-700 mb-4">
        React provides several techniques and hooks to optimize performance.
      </p>

      {/* React.memo */}

      <h2 className="text-xl font-semibold mt-6 mb-3">React.memo</h2>

      <p className="text-gray-700 mb-4">
        <b>React.memo</b> is a higher-order component used to prevent
        unnecessary re-rendering of functional components when props have not
        changed.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`const MyComponent = React.memo(function MyComponent({ value }) {
  return <h2>{value}</h2>;
});`}
      </pre>

      {/* useMemo */}

      <h2 className="text-xl font-semibold mt-8 mb-3">useMemo Hook</h2>

      <p className="text-gray-700 mb-4">
        <b>useMemo</b> is used to memoize expensive calculations so that they
        are only recomputed when necessary.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`import { useMemo } from "react";

const result = useMemo(() => {
  return expensiveCalculation(value);
}, [value]);`}
      </pre>

      {/* useCallback */}

      <h2 className="text-xl font-semibold mt-8 mb-3">useCallback Hook</h2>

      <p className="text-gray-700 mb-4">
        <b>useCallback</b> is used to memoize functions so they are not
        recreated on every render.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`import { useCallback } from "react";

const handleClick = useCallback(() => {
  console.log("Button clicked");
}, []);`}
      </pre>

      {/* Techniques Table */}

      <h2 className="text-xl font-semibold mt-8 mb-4">
        Performance Optimization Techniques
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Technique</th>
              <th className="p-3 border">Purpose</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3 border">React.memo</td>
              <td className="p-3 border">
                Prevents unnecessary component re-renders
              </td>
            </tr>

            <tr>
              <td className="p-3 border">useMemo</td>
              <td className="p-3 border">Memoizes expensive calculations</td>
            </tr>

            <tr>
              <td className="p-3 border">useCallback</td>
              <td className="p-3 border">Memoizes functions</td>
            </tr>

            <tr>
              <td className="p-3 border">Lazy Loading</td>
              <td className="p-3 border">Loads components only when needed</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Key Points */}

      <h2 className="text-xl font-semibold mt-8 mb-3">Key Points</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Avoid unnecessary re-renders.</li>
        <li>Use React.memo for component optimization.</li>
        <li>Use useMemo for expensive calculations.</li>
        <li>Use useCallback for memoizing functions.</li>
        <li>Optimize large applications using lazy loading.</li>
      </ul>
    </div>
  );
};

export default PerformanceOptimization;
