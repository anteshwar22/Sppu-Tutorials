import React from "react";

const Objects = () => {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600">
        Objects in JavaScript
      </h1>

      {/* Intro */}
      <p className="text-gray-700 leading-relaxed">
        Objects are collections of key-value pairs used to store related data.
        They are one of the most important concepts in JavaScript.
      </p>

      {/* Example */}
      <div>
        <h2 className="text-xl font-semibold mb-2">1. Creating an Object</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`let person = {
  name: "Anteshwar",
  age: 20,
  isStudent: true
};

console.log(person.name); // Anteshwar`}
          </pre>
        </div>
      </div>

      {/* Access */}
      <div>
        <h2 className="text-xl font-semibold mb-2">2. Accessing Properties</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`// Dot notation
console.log(person.age);

// Bracket notation
console.log(person["name"]);`}
          </pre>
        </div>
      </div>

      {/* Modify */}
      <div>
        <h2 className="text-xl font-semibold mb-2">3. Adding & Updating</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`person.city = "Pune";   // Add
person.age = 21;         // Update`}
          </pre>
        </div>
      </div>

      {/* Methods */}
      <div>
        <h2 className="text-xl font-semibold mb-2">4. Object Methods</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`let user = {
  name: "Anteshwar",
  greet: function() {
    console.log("Hello " + this.name);
  }
};

user.greet();`}
          </pre>
        </div>
      </div>

      {/* Key Points */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Key Points</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Objects store data in key-value format</li>
          <li>
            Use <b>this</b> to access object properties
          </li>
          <li>Objects are mutable (can change)</li>
        </ul>
      </div>

      {/* Tip */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="font-semibold">Pro Tip:</p>
        <p className="text-gray-700">
          Objects are heavily used in APIs, React state, and backend data.
        </p>
      </div>
    </div>
  );
};

export default Objects;
