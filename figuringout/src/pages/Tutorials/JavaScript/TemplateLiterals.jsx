import React from "react";

const TemplateLiterals = () => {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600">
        Template Literals in JavaScript
      </h1>

      {/* Intro */}
      <p className="text-gray-700 leading-relaxed">
        Template literals are a modern way to work with strings in JavaScript.
        They use backticks (<b>`</b>) instead of quotes and allow embedding
        variables and expressions using <b>${"{ }"}</b>.
      </p>

      {/* Basic Example */}
      <div>
        <h2 className="text-xl font-semibold mb-2">1. Basic Example</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`let name = "Anteshwar";
let msg = \`Hello \${name}\`;

console.log(msg); // Hello Anteshwar`}
          </pre>
        </div>
      </div>

      {/* Multi-line */}
      <div>
        <h2 className="text-xl font-semibold mb-2">2. Multi-line Strings</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`let text = \`This is line 1
This is line 2
This is line 3\`;`}
          </pre>
        </div>
      </div>

      {/* Expressions */}
      <div>
        <h2 className="text-xl font-semibold mb-2">3. Expressions Inside</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`let a = 5, b = 10;

console.log(\`Sum is \${a + b}\`); // Sum is 15`}
          </pre>
        </div>
      </div>

      {/* Comparison */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Why Use Template Literals?</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>No need for string concatenation (+)</li>
          <li>Supports multi-line strings</li>
          <li>Cleaner and more readable code</li>
        </ul>
      </div>

      {/* Tip */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="font-semibold">Pro Tip:</p>
        <p className="text-gray-700">
          Always prefer template literals over "+" for string concatenation in
          modern JavaScript.
        </p>
      </div>
    </div>
  );
};

export default TemplateLiterals;
