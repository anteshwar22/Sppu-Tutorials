import React from "react";

const ConditionalRendering = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Conditional Rendering in React
      </h1>

      <p className="text-gray-700 mb-4">
        Conditional rendering allows React components to display different UI
        based on certain conditions. It works similarly to JavaScript conditions
        like <b>if</b>, <b>else</b>, or the <b>ternary operator</b>.
      </p>

      <p className="text-gray-700 mb-4">
        Using conditional rendering, you can show or hide components depending
        on user actions or application state.
      </p>

      {/* Example 1 */}

      <h2 className="text-xl font-semibold mt-6 mb-3">
        Example using if statement
      </h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`function LoginStatus({ isLoggedIn }) {

  if (isLoggedIn) {
    return <h2>Welcome Back!</h2>;
  }

  return <h2>Please Login</h2>;
}`}
      </pre>

      {/* Example 2 */}

      <h2 className="text-xl font-semibold mt-6 mb-3">
        Example using Ternary Operator
      </h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`function App() {

  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn ? <h2>Welcome User</h2> : <h2>Please Login</h2>}
    </div>
  );
}`}
      </pre>

      {/* Example 3 */}

      <h2 className="text-xl font-semibold mt-6 mb-3">
        Example using Logical AND (&&)
      </h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`function Notification({ unreadMessages }) {

  return (
    <div>
      {unreadMessages.length > 0 &&
        <h3>You have {unreadMessages.length} new messages.</h3>}
    </div>
  );
}`}
      </pre>

      {/* Methods Table */}

      <h2 className="text-xl font-semibold mt-8 mb-4">
        Methods for Conditional Rendering
      </h2>

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
              <td className="p-3 border">if / else</td>
              <td className="p-3 border">
                Used for complex conditions inside components
              </td>
            </tr>

            <tr>
              <td className="p-3 border">Ternary Operator</td>
              <td className="p-3 border">
                Used for inline conditions inside JSX
              </td>
            </tr>

            <tr>
              <td className="p-3 border">Logical AND (&&)</td>
              <td className="p-3 border">
                Used to render elements only if condition is true
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Key Points */}

      <h2 className="text-xl font-semibold mt-8 mb-3">Key Points</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Conditional rendering controls what UI is displayed.</li>
        <li>You can use JavaScript conditions inside JSX.</li>
        <li>The ternary operator is commonly used in React.</li>
        <li>
          Logical AND (&&) is useful for rendering elements conditionally.
        </li>
      </ul>
    </div>
  );
};

export default ConditionalRendering;
