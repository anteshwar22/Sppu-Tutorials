import React from "react";

const ControlStatements = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* 1. Title */}
      <h1 className="text-4xl font-bold mb-6 text-blue-600">
        Control Statements in Java
      </h1>

      {/* 2. Introduction */}
      <p className="text-gray-700 mb-4 leading-relaxed">
        Control statements in Java are used to control the flow of execution of
        a program. They help the program make decisions, repeat tasks, and jump
        between different parts of code.
      </p>

      <p className="text-gray-700 mb-6 leading-relaxed">
        Without control statements, a program would execute line by line without
        any logic or decision-making.
      </p>

      {/* 3. Real-life Analogy */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Real-Life Analogy</h2>

      <p className="text-gray-700 mb-6">
        Imagine traffic signals 🚦. If the light is green, you go; if red, you
        stop. Similarly, control statements decide what the program should do
        based on conditions.
      </p>

      {/* 4. Definition */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Definition</h2>

      <p className="text-gray-700 mb-6">
        Control statements are used to manage the flow of execution based on
        conditions, loops, and branching in a Java program.
      </p>

      {/* 5. Syntax */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Basic Syntax</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`if(condition) {
    // code
}

for(initialization; condition; update) {
    // code
}`}
      </pre>

      {/* 6. Types */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Types of Control Statements
      </h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>Decision Making Statements</li>
        <li>Looping Statements</li>
        <li>Jump Statements</li>
      </ul>

      {/* Decision */}
      <h3 className="text-xl font-semibold mt-4 mb-2">
        1. Decision Making Statements
      </h3>

      <p className="text-gray-700 mb-4">
        Used to execute code based on conditions.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`int age = 18;

if(age >= 18) {
    System.out.println("Eligible");
} else {
    System.out.println("Not Eligible");
}`}
      </pre>

      {/* Switch */}
      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`int day = 2;

switch(day) {
    case 1: System.out.println("Monday"); break;
    case 2: System.out.println("Tuesday"); break;
    default: System.out.println("Invalid");
}`}
      </pre>

      {/* Looping */}
      <h3 className="text-xl font-semibold mt-4 mb-2">2. Looping Statements</h3>

      <p className="text-gray-700 mb-4">
        Used to repeat a block of code multiple times.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`for(int i = 1; i <= 5; i++) {
    System.out.println(i);
}`}
      </pre>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`int i = 1;

while(i <= 5) {
    System.out.println(i);
    i++;
}`}
      </pre>

      {/* Jump */}
      <h3 className="text-xl font-semibold mt-4 mb-2">3. Jump Statements</h3>

      <p className="text-gray-700 mb-4">
        Used to transfer control to another part of the program.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`for(int i = 1; i <= 5; i++) {
    if(i == 3) {
        break;
    }
    System.out.println(i);
}`}
      </pre>

      {/* Table */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Summary Table</h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border">Type</th>
              <th className="p-3 border">Statements</th>
              <th className="p-3 border">Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">Decision</td>
              <td className="p-3 border">if, else, switch</td>
              <td className="p-3 border">Condition checking</td>
            </tr>
            <tr>
              <td className="p-3 border">Looping</td>
              <td className="p-3 border">for, while</td>
              <td className="p-3 border">Repetition</td>
            </tr>
            <tr>
              <td className="p-3 border">Jump</td>
              <td className="p-3 border">break, continue</td>
              <td className="p-3 border">Flow control</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Step-by-step */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Step-by-Step Example</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`int number = 5;

if(number > 0) {
    for(int i = 1; i <= number; i++) {
        System.out.println(i);
    }
}`}
      </pre>

      {/* Mistakes */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Common Mistakes</h2>

      <ul className="list-disc ml-6 text-red-500 mb-6 space-y-2">
        <li>Missing curly braces</li>
        <li>Infinite loops</li>
        <li>Wrong conditions</li>
      </ul>

      {/* Interview */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Interview / Viva Questions
      </h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>
          <b>What are control statements?</b> → Control flow of program
        </li>
        <li>
          <b>Types?</b> → Decision, Looping, Jump
        </li>
        <li>
          <b>Difference between for and while?</b> → for is used when iterations
          are known
        </li>
      </ul>

      {/* Key Points */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Key Points Summary</h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>Control flow defines program logic</li>
        <li>Used for decisions and loops</li>
        <li>Essential for real-world applications</li>
      </ul>

      {/* Memory Trick */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Memory Trick</h2>

      <p className="text-gray-700 mb-6">
        👉 <b>"D L J"</b>
        <br />
        Decision → Loop → Jump
      </p>
    </div>
  );
};

export default ControlStatements;
