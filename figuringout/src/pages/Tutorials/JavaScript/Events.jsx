import React from "react";

const Events = () => {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600">Events in JavaScript</h1>

      {/* Intro */}
      <p className="text-gray-700 leading-relaxed">
        Events are actions that happen in the browser, such as clicks, typing,
        or page loading. JavaScript can respond to these events using event
        handlers.
      </p>

      {/* Common Events */}
      <div>
        <h2 className="text-xl font-semibold mb-2">1. Common Events</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>
            <b>click</b> → user clicks
          </li>
          <li>
            <b>input</b> → typing in input field
          </li>
          <li>
            <b>submit</b> → form submission
          </li>
          <li>
            <b>mouseover</b> → mouse hover
          </li>
        </ul>
      </div>

      {/* addEventListener */}
      <div>
        <h2 className="text-xl font-semibold mb-2">2. addEventListener()</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  console.log("Button clicked!");
});`}
          </pre>
        </div>
      </div>

      {/* Example */}
      <div>
        <h2 className="text-xl font-semibold mb-2">3. Example</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`let input = document.getElementById("name");

input.addEventListener("input", (e) => {
  console.log(e.target.value);
});`}
          </pre>
        </div>
      </div>

      {/* Event Object */}
      <div>
        <h2 className="text-xl font-semibold mb-2">4. Event Object</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`btn.addEventListener("click", (event) => {
  console.log(event);
});`}
          </pre>
        </div>
      </div>

      {/* Notes */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Important Notes</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Events make web pages interactive</li>
          <li>Use addEventListener for better control</li>
          <li>Event object gives extra information</li>
        </ul>
      </div>

      {/* Tip */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="font-semibold">Pro Tip:</p>
        <p className="text-gray-700">
          Always use <b>addEventListener</b> instead of inline events for
          cleaner code.
        </p>
      </div>
    </div>
  );
};

export default Events;
