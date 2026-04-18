import React from "react";

const UseContext = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">useContext Hook</h1>

      <p className="text-gray-700 mb-4">
        <b>useContext</b> is a React Hook used to access data from a
        <b> React Context</b>. It allows components to share data globally
        without passing props manually through every level of the component
        tree.
      </p>

      <p className="text-gray-700 mb-4">
        This helps solve the problem known as <b>prop drilling</b>.
      </p>

      {/* Syntax */}

      <h2 className="text-xl font-semibold mt-6 mb-3">Syntax</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`const value = useContext(MyContext);`}
      </pre>

      <ul className="list-disc ml-6 text-gray-700 space-y-2 mt-4">
        <li>
          First create a context using <b>createContext()</b>.
        </li>
        <li>
          Wrap components with <b>Context.Provider</b>.
        </li>
        <li>
          Use <b>useContext</b> to access the value.
        </li>
      </ul>

      {/* Example */}

      <h2 className="text-xl font-semibold mt-6 mb-3">Example</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`import React, { createContext, useContext } from "react";

const ThemeContext = createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return <ThemeButton />;
}

function ThemeButton() {
  const theme = useContext(ThemeContext);

  return <button>Theme: {theme}</button>;
}`}
      </pre>

      {/* Problem vs Solution */}

      <h2 className="text-xl font-semibold mt-8 mb-4">Props vs Context</h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Method</th>
              <th className="p-3 border">Description</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3 border">Props</td>
              <td className="p-3 border">
                Data passed manually through each component
              </td>
            </tr>

            <tr>
              <td className="p-3 border">Context</td>
              <td className="p-3 border">
                Data shared globally across components
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Key Points */}

      <h2 className="text-xl font-semibold mt-8 mb-3">Key Points</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>useContext allows components to access global data.</li>
        <li>It helps avoid prop drilling.</li>
        <li>Works together with createContext() and Provider.</li>
        <li>Useful for themes, authentication, language settings, etc.</li>
      </ul>
    </div>
  );
};

export default UseContext;
