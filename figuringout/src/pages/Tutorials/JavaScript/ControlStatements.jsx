import React from "react";

const ControlStatements = () => {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600">
        Control Statements in JavaScript
      </h1>

      {/* Intro */}
      <p className="text-gray-700 leading-relaxed">
        Control statements are used to control the flow of execution in a
        program. They help in decision-making and repeating tasks.
      </p>

      {/* Types */}
      <div>
        <h2 className="text-xl font-semibold mb-2">
          Types of Control Statements
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <b>Conditional Statements:</b> if, else, switch
          </li>
          <li>
            <b>Loops:</b> for, while, do-while
          </li>
        </ul>
      </div>

      {/* If-Else */}
      <div>
        <h2 className="text-xl font-semibold mb-2">1. if-else Statement</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`let age = 18;

if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible");
}`}
          </pre>
        </div>
      </div>

      {/* Switch */}
      <div>
        <h2 className="text-xl font-semibold mb-2">2. switch Statement</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`let day = 2;

switch(day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Invalid day");
}`}
          </pre>
        </div>
      </div>

      {/* Loops */}
      <div>
        <h2 className="text-xl font-semibold mb-2">3. Loops</h2>

        {/* for loop */}
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg mb-3">
          <pre>
            {`// for loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}`}
          </pre>
        </div>

        {/* while loop */}
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg mb-3">
          <pre>
            {`// while loop
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}`}
          </pre>
        </div>

        {/* do-while */}
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`// do-while loop
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);`}
          </pre>
        </div>
      </div>

      {/* Notes */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Important Notes</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>if → used for conditions</li>
          <li>switch → cleaner alternative for multiple conditions</li>
          <li>loops → used to repeat tasks</li>
          <li>do-while runs at least once</li>
        </ul>
      </div>
    </div>
  );
};

export default ControlStatements;
