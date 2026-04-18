import React from "react";

const EventHandling = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Event Handling in React</h1>

      <p className="text-gray-700 mb-4">
        Event handling in React allows you to respond to user actions such as
        clicking a button, typing in an input field, or submitting a form.
      </p>

      <p className="text-gray-700 mb-4">
        React events use <b>camelCase</b> naming instead of lowercase HTML
        events and the event handler receives a function.
      </p>

      {/* Example */}

      <h2 className="text-xl font-semibold mt-6 mb-3">
        Example of Event Handling
      </h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`function ButtonExample() {

  const handleClick = () => {
    alert("Button Clicked!");
  };

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}`}
      </pre>

      {/* Event Table */}

      <h2 className="text-xl font-semibold mt-8 mb-4">Common React Events</h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Event</th>
              <th className="p-3 border">Description</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3 border">onClick</td>
              <td className="p-3 border">
                Triggered when an element is clicked
              </td>
            </tr>

            <tr>
              <td className="p-3 border">onChange</td>
              <td className="p-3 border">Triggered when input value changes</td>
            </tr>

            <tr>
              <td className="p-3 border">onSubmit</td>
              <td className="p-3 border">Triggered when a form is submitted</td>
            </tr>

            <tr>
              <td className="p-3 border">onMouseOver</td>
              <td className="p-3 border">
                Triggered when mouse hovers over element
              </td>
            </tr>

            <tr>
              <td className="p-3 border">onMouseOut</td>
              <td className="p-3 border">
                Triggered when mouse leaves element
              </td>
            </tr>

            <tr>
              <td className="p-3 border">onKeyDown</td>
              <td className="p-3 border">Triggered when a key is pressed</td>
            </tr>

            <tr>
              <td className="p-3 border">onKeyUp</td>
              <td className="p-3 border">Triggered when a key is released</td>
            </tr>

            <tr>
              <td className="p-3 border">onFocus</td>
              <td className="p-3 border">
                Triggered when an element gets focus
              </td>
            </tr>

            <tr>
              <td className="p-3 border">onBlur</td>
              <td className="p-3 border">
                Triggered when an element loses focus
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Key Points */}

      <h2 className="text-xl font-semibold mt-8 mb-3">Key Points</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>React events use camelCase naming.</li>
        <li>Event handlers are written as functions.</li>
        <li>Events help React applications interact with users.</li>
      </ul>
    </div>
  );
};

export default EventHandling;
