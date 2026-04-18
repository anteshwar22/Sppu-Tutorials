import React from "react";

const ErrorHandling = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Error Handling in React</h1>

      <p className="text-gray-700 mb-4">
        Error handling is the process of detecting and managing errors that
        occur in a React application. Proper error handling prevents the
        application from crashing and improves user experience.
      </p>

      <p className="text-gray-700 mb-4">
        In React, errors can occur during API requests, component rendering, or
        user interactions.
      </p>

      {/* Try Catch */}

      <h2 className="text-xl font-semibold mt-6 mb-3">
        Using Try-Catch for Error Handling
      </h2>

      <p className="text-gray-700 mb-4">
        The <b>try...catch</b> block is commonly used with asynchronous
        operations such as API calls.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`async function getData() {

  try {

    const response = await fetch("https://api.example.com/data");

    const data = await response.json();

    console.log(data);

  } catch (error) {

    console.error("Error fetching data:", error);

  }

}`}
      </pre>

      {/* Error Boundary */}

      <h2 className="text-xl font-semibold mt-8 mb-3">Error Boundaries</h2>

      <p className="text-gray-700 mb-4">
        React provides a feature called <b>Error Boundaries</b> to catch
        JavaScript errors in component trees and display a fallback UI.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`import React, { Component } from "react";

class ErrorBoundary extends Component {

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("Error:", error);
  }

  render() {

    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }

    return this.props.children;

  }
}

export default ErrorBoundary;`}
      </pre>

      {/* How to Use */}

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Using an Error Boundary
      </h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>`}
      </pre>

      {/* Common Error Sources */}

      <h2 className="text-xl font-semibold mt-8 mb-4">
        Common Sources of Errors
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Error Type</th>
              <th className="p-3 border">Example</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3 border">API Errors</td>
              <td className="p-3 border">Network request fails</td>
            </tr>

            <tr>
              <td className="p-3 border">Rendering Errors</td>
              <td className="p-3 border">Undefined variable in component</td>
            </tr>

            <tr>
              <td className="p-3 border">User Input Errors</td>
              <td className="p-3 border">Invalid form data</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Key Points */}

      <h2 className="text-xl font-semibold mt-8 mb-3">Key Points</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Use try...catch for async operations like API calls.</li>
        <li>Error Boundaries catch errors in React components.</li>
        <li>Always provide a fallback UI for better user experience.</li>
        <li>Proper error handling prevents application crashes.</li>
      </ul>
    </div>
  );
};

export default ErrorHandling;
