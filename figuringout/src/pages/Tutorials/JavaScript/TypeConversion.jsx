import React from "react";

const TypeConversion = () => {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600">
        Type Conversion & Coercion in JavaScript
      </h1>

      {/* Intro */}
      <p className="text-gray-700 leading-relaxed">
        JavaScript automatically or manually converts data types. This is called
        <b> Type Conversion</b> (manual) and <b> Type Coercion</b> (automatic).
      </p>

      {/* Type Conversion */}
      <div>
        <h2 className="text-xl font-semibold mb-2">
          1. Type Conversion (Manual)
        </h2>
        <p className="text-gray-700 mb-2">
          When we explicitly convert one data type into another.
        </p>

        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`// String to Number
let num = Number("123");

// Number to String
let str = String(123);

// Boolean conversion
let bool = Boolean(1);`}
          </pre>
        </div>
      </div>

      {/* Type Coercion */}
      <div>
        <h2 className="text-xl font-semibold mb-2">
          2. Type Coercion (Automatic)
        </h2>
        <p className="text-gray-700 mb-2">
          JavaScript automatically converts types during operations.
        </p>

        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`// Number + String
console.log(5 + "5");   // "55"

// String - Number
console.log("10" - 5);  // 5

// Boolean conversion
console.log(true + 1);  // 2`}
          </pre>
        </div>
      </div>

      {/* Important Notes */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Important Notes</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>+ operator → prefers string conversion</li>
          <li>- , * , / → convert to number</li>
          <li>Falsy values → 0, "", null, undefined, false</li>
        </ul>
      </div>

      {/* Output */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="font-semibold">Key Tip:</p>
        <p className="text-gray-700">
          Always avoid confusion by using explicit conversion like
          <b> Number()</b> or <b> String()</b>.
        </p>
      </div>
    </div>
  );
};

export default TypeConversion;
