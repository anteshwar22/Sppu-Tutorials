import React from "react";

const DOMManipulation = () => {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600">
        DOM Manipulation in JavaScript
      </h1>

      {/* Intro */}
      <p className="text-gray-700 leading-relaxed">
        The DOM (Document Object Model) represents the structure of a web page.
        JavaScript can manipulate the DOM to change content, style, and behavior
        dynamically.
      </p>

      {/* Selecting Elements */}
      <div>
        <h2 className="text-xl font-semibold mb-2">1. Selecting Elements</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`// By ID
document.getElementById("title");

// By Class
document.getElementsByClassName("box");

// Query Selector
document.querySelector(".box");
document.querySelectorAll("p");`}
          </pre>
        </div>
      </div>

      {/* Changing Content */}
      <div>
        <h2 className="text-xl font-semibold mb-2">2. Changing Content</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`let el = document.getElementById("title");

el.innerText = "Hello World";
el.innerHTML = "<b>Hello</b>";`}
          </pre>
        </div>
      </div>

      {/* Styling */}
      <div>
        <h2 className="text-xl font-semibold mb-2">3. Changing Styles</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`let el = document.getElementById("box");

el.style.color = "red";
el.style.backgroundColor = "yellow";`}
          </pre>
        </div>
      </div>

      {/* Events */}
      <div>
        <h2 className="text-xl font-semibold mb-2">4. Event Handling</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  alert("Button clicked!");
});`}
          </pre>
        </div>
      </div>

      {/* Create Element */}
      <div>
        <h2 className="text-xl font-semibold mb-2">5. Creating Elements</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`let div = document.createElement("div");
div.innerText = "New Element";

document.body.appendChild(div);`}
          </pre>
        </div>
      </div>

      {/* Notes */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Important Notes</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>DOM allows dynamic UI updates</li>
          <li>Used in all frontend apps</li>
          <li>React internally uses virtual DOM</li>
        </ul>
      </div>

      {/* Tip */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="font-semibold">Pro Tip:</p>
        <p className="text-gray-700">
          Learn DOM well — it helps you understand how React works internally.
        </p>
      </div>
    </div>
  );
};

export default DOMManipulation;
