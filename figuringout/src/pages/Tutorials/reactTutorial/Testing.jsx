import React from "react";

const Testing = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Testing in React</h1>

      <p className="text-gray-700 mb-4">
        Testing ensures that your React application works correctly and prevents
        bugs in production. It verifies that components behave as expected.
      </p>

      <p className="text-gray-700 mb-4">
        The most commonly used tools for testing React applications are:
      </p>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Jest</li>
        <li>React Testing Library</li>
      </ul>

      {/* Jest */}

      <h2 className="text-xl font-semibold mt-6 mb-3">Jest</h2>

      <p className="text-gray-700 mb-4">
        <b>Jest</b> is a JavaScript testing framework developed by Facebook. It
        is used to test functions, components, and application logic.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`test("adds numbers correctly", () => {
  expect(2 + 2).toBe(4);
});`}
      </pre>

      {/* React Testing Library */}

      <h2 className="text-xl font-semibold mt-8 mb-3">React Testing Library</h2>

      <p className="text-gray-700 mb-4">
        <b>React Testing Library</b> is used to test React components by
        interacting with them the way users would.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders hello text", () => {
  render(<App />);
  const text = screen.getByText(/hello/i);
  expect(text).toBeInTheDocument();
});`}
      </pre>

      {/* Types of Testing */}

      <h2 className="text-xl font-semibold mt-8 mb-4">Types of Testing</h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Type</th>
              <th className="p-3 border">Purpose</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3 border">Unit Testing</td>
              <td className="p-3 border">
                Tests individual functions or components
              </td>
            </tr>

            <tr>
              <td className="p-3 border">Integration Testing</td>
              <td className="p-3 border">
                Tests multiple components working together
              </td>
            </tr>

            <tr>
              <td className="p-3 border">End-to-End Testing</td>
              <td className="p-3 border">
                Tests the entire application workflow
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Key Points */}

      <h2 className="text-xl font-semibold mt-8 mb-3">Key Points</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Testing helps detect bugs early.</li>
        <li>Jest is used as the testing framework.</li>
        <li>React Testing Library focuses on user behavior.</li>
        <li>Good tests improve application reliability.</li>
      </ul>
    </div>
  );
};

export default Testing;
