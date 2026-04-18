import React from "react";

const ExecutionContext = () => {
  return (
    <div className="space-y-6">
         
      {/* Intro */}
      <p className="text-gray-700 leading-relaxed">
        JavaScript executes code inside something called an
        <b> Execution Context</b>. It is the environment where JavaScript code
        is evaluated and executed.
      </p>

      {/* Types */}
      <div>
        <h2 className="text-xl font-semibold mb-2">
          Types of Execution Context
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <b>Global Execution Context (GEC):</b> Created when the program
            starts
          </li>
          <li>
            <b>Function Execution Context (FEC):</b> Created when a function is
            called
          </li>
        </ul>
      </div>

      {/* Phases */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Phases of Execution</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <b>Memory Creation Phase:</b> Variables and functions are stored
          </li>
          <li>
            <b>Execution Phase:</b> Code runs line by line
          </li>
        </ul>
      </div>

      {/* Example */}
      <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
        <pre>
          {`var x = 10;

function test() {
  var y = 20;
  console.log(y);
}

test();
console.log(x);`}
        </pre>
      </div>

      {/* Explanation */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="font-semibold mb-2">Explanation:</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Global Execution Context is created first</li>
          <li>
            Variable <b>x</b> stored in memory
          </li>
          <li>
            Function <b>test()</b> stored in memory
          </li>
          <li>When test() is called → new Execution Context is created</li>
          <li>After execution → function context is removed</li>
        </ul>
      </div>

      {/* Output */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="font-semibold">Output:</p>
        <p>20</p>
        <p>10</p>
      </div>
    </div>
  );
};

export default ExecutionContext;
