import React from "react";

const Forms = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Forms in React</h1>

      <p className="text-gray-700 mb-4">
        Forms are used to collect user input such as text, email, password, and
        other data. In React, form elements are usually controlled using the{" "}
        <b>useState</b> hook.
      </p>

      <p className="text-gray-700 mb-4">
        React forms work similarly to HTML forms, but React manages the form
        data through component state.
      </p>

      {/* Basic Form Example */}

      <h2 className="text-xl font-semibold mt-6 mb-3">Basic Form Example</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`import React, { useState } from "react";

function SimpleForm() {

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted Name: " + name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <button type="submit">Submit</button>
    </form>
  );
}`}
      </pre>

      {/* Controlled vs Uncontrolled */}

      <h2 className="text-xl font-semibold mt-6 mb-3">
        Types of Forms in React
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Type</th>
              <th className="p-3 border">Description</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3 border">Controlled Components</td>
              <td className="p-3 border">
                Form data is controlled using React state.
              </td>
            </tr>

            <tr>
              <td className="p-3 border">Uncontrolled Components</td>
              <td className="p-3 border">
                Form data is handled by the DOM using refs.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Example Inputs */}

      <h2 className="text-xl font-semibold mt-8 mb-3">Common Form Elements</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Text Input</li>
        <li>Password Input</li>
        <li>Checkbox</li>
        <li>Radio Buttons</li>
        <li>Select Dropdown</li>
        <li>Textarea</li>
      </ul>

      {/* Key Points */}

      <h2 className="text-xl font-semibold mt-8 mb-3">Key Points</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>React forms use state to manage input values.</li>
        <li>The onChange event updates the state.</li>
        <li>onSubmit is used to handle form submission.</li>
        <li>Controlled components are recommended in React.</li>
      </ul>
    </div>
  );
};

export default Forms;
