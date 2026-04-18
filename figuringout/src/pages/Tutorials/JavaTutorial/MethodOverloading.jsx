import React from "react";

const MethodOverloading = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* 1. Title */}
      <h1 className="text-4xl font-bold mb-6 text-blue-600">
        Method Overloading in Java
      </h1>

      {/* 2. Introduction */}
      <p className="text-gray-700 mb-4 leading-relaxed">
        Method Overloading is a feature in Java that allows a class to have
        multiple methods with the same name but different parameters.
      </p>

      <p className="text-gray-700 mb-6 leading-relaxed">
        It improves code readability and flexibility by using the same method
        name for different operations.
      </p>

      {/* 3. Real-life Analogy */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Real-Life Analogy</h2>

      <p className="text-gray-700 mb-6">
        Think of a calculator 🧮. The "add" function can work for 2 numbers, 3
        numbers, or even decimals. Same name, different inputs.
      </p>

      {/* 4. Definition */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Definition</h2>

      <p className="text-gray-700 mb-6">
        Method Overloading is the process of defining multiple methods with the
        same name but different parameter lists within the same class.
      </p>

      {/* 5. Syntax */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Syntax</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`class MathOps {

    int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }
}`}
      </pre>

      {/* 6. Key Concepts */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Key Rules of Method Overloading
      </h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>Method name must be same</li>
        <li>Parameters must be different (number, type, or order)</li>
        <li>Return type alone cannot differentiate methods</li>
      </ul>

      {/* 7. Examples */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Examples</h2>

      <h3 className="font-semibold mb-2">
        Example 1: Different Number of Parameters
      </h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`int add(int a, int b) {
    return a + b;
}

int add(int a, int b, int c) {
    return a + b + c;
}`}
      </pre>

      <h3 className="font-semibold mb-2">Example 2: Different Data Types</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`int add(int a, int b) {
    return a + b;
}

double add(double a, double b) {
    return a + b;
}`}
      </pre>

      <h3 className="font-semibold mb-2">
        Example 3: Different Parameter Order
      </h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`void show(int a, String b) {}

void show(String b, int a) {}`}
      </pre>

      {/* 9. Table */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Method Overloading vs Method Overriding
      </h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border">Feature</th>
              <th className="p-3 border">Overloading</th>
              <th className="p-3 border">Overriding</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">Method Name</td>
              <td className="p-3 border">Same</td>
              <td className="p-3 border">Same</td>
            </tr>
            <tr>
              <td className="p-3 border">Parameters</td>
              <td className="p-3 border">Different</td>
              <td className="p-3 border">Same</td>
            </tr>
            <tr>
              <td className="p-3 border">Inheritance</td>
              <td className="p-3 border">Not required</td>
              <td className="p-3 border">Required</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 10. Step-by-step */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Step-by-Step Thinking
      </h2>

      <ol className="list-decimal ml-6 text-gray-700 mb-6 space-y-2">
        <li>Decide method name</li>
        <li>Create multiple methods with different parameters</li>
        <li>Call method based on arguments</li>
      </ol>

      {/* 11. Mistakes */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Common Mistakes</h2>

      <ul className="list-disc ml-6 text-red-500 mb-6 space-y-2">
        <li>Changing only return type (not valid)</li>
        <li>Confusing overloading with overriding</li>
        <li>Same parameter list with different names (not allowed)</li>
      </ul>

      {/* 12. Interview */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Interview / Viva Questions
      </h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>
          <b>What is method overloading?</b> → Same method, different parameters
        </li>
        <li>
          <b>Can return type alone overload?</b> → No
        </li>
        <li>
          <b>When resolved?</b> → Compile time
        </li>
      </ul>

      {/* 13. Key Points */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Key Points Summary</h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>Compile-time polymorphism</li>
        <li>Same method name</li>
        <li>Different parameters required</li>
      </ul>

      {/* 14. Memory Trick */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Memory Trick</h2>

      <p className="text-gray-700 mb-6">
        👉 <b>"Same Name + Different Input = Overloading"</b>
      </p>
    </div>
  );
};

export default MethodOverloading;
