import React from "react";

const CodeSplitting = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Code Splitting in React</h1>

      <p className="text-gray-700 mb-4">
        <b>Code Splitting</b> is a technique used to split the application
        bundle into smaller chunks so that only the required code is loaded when
        needed. This improves application performance and reduces initial
        loading time.
      </p>

      <p className="text-gray-700 mb-4">
        React supports code splitting using <b>React.lazy()</b> and
        <b>Suspense</b>.
      </p>

      {/* React.lazy */}

      <h2 className="text-xl font-semibold mt-6 mb-3">React.lazy()</h2>

      <p className="text-gray-700 mb-4">
        <b>React.lazy()</b> allows you to dynamically import components so they
        are loaded only when needed.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`import React, { lazy } from "react";

const Home = lazy(() => import("./Home"));
`}
      </pre>

      {/* Suspense */}

      <h2 className="text-xl font-semibold mt-8 mb-3">Suspense</h2>

      <p className="text-gray-700 mb-4">
        <b>Suspense</b> is used to display a fallback UI while the lazy-loaded
        component is being loaded.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`import React, { Suspense, lazy } from "react";

const Home = lazy(() => import("./Home"));

function App() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Home />
    </Suspense>
  );
}`}
      </pre>

      {/* Example with Routing */}

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Code Splitting with React Router
      </h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`const About = lazy(() => import("./About"));

<Route path="/about" element={
  <Suspense fallback={<h2>Loading...</h2>}>
    <About />
  </Suspense>
} />`}
      </pre>

      {/* Benefits Table */}

      <h2 className="text-xl font-semibold mt-8 mb-4">
        Benefits of Code Splitting
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Benefit</th>
              <th className="p-3 border">Explanation</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3 border">Faster Loading</td>
              <td className="p-3 border">Loads only required components</td>
            </tr>

            <tr>
              <td className="p-3 border">Smaller Bundles</td>
              <td className="p-3 border">
                Reduces initial JavaScript bundle size
              </td>
            </tr>

            <tr>
              <td className="p-3 border">Better Performance</td>
              <td className="p-3 border">Improves user experience</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Key Points */}

      <h2 className="text-xl font-semibold mt-8 mb-3">Key Points</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Code splitting improves performance.</li>
        <li>React.lazy loads components dynamically.</li>
        <li>Suspense shows a fallback UI while loading.</li>
        <li>Commonly used with React Router.</li>
      </ul>
    </div>
  );
};

export default CodeSplitting;
