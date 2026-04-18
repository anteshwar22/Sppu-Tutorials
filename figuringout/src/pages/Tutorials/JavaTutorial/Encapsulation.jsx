import React from "react";

const Encapsulation = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* 1. Title */}
      <h1 className="text-4xl font-bold mb-6 text-blue-600">
        Encapsulation in Java
      </h1>

      {/* 2. Introduction */}
      <p className="text-gray-700 mb-4 leading-relaxed">
        Encapsulation is one of the core principles of Object-Oriented
        Programming (OOP). It is used to wrap data (variables) and methods
        (functions) into a single unit (class).
      </p>

      <p className="text-gray-700 mb-6 leading-relaxed">
        It helps protect data from unauthorized access and improves code
        security.
      </p>

      {/* 3. Real-life Analogy */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Real-Life Analogy</h2>

      <p className="text-gray-700 mb-6">
        Think of a capsule 💊. Inside it, medicine is hidden and protected.
        Similarly, encapsulation hides internal data and allows controlled
        access.
      </p>

      {/* 4. Definition */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Definition</h2>

      <p className="text-gray-700 mb-6">
        Encapsulation is the process of binding data and methods together in a
        class and restricting direct access using access modifiers.
      </p>

      {/* 5. Syntax */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Syntax</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`class Student {
    private int age;

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}`}
      </pre>

      {/* 6. Key Concepts */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Key Concepts of Encapsulation
      </h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>
          Use <b>private</b> variables
        </li>
        <li>
          Provide <b>public getters and setters</b>
        </li>
        <li>Control access to data</li>
      </ul>

      {/* 7. Examples */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Examples</h2>

      <h3 className="font-semibold mb-2">Example 1: Without Encapsulation</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`class Student {
    public int age;
}

Student s = new Student();
s.age = -10; // wrong data`}
      </pre>

      <h3 className="font-semibold mb-2">Example 2: With Encapsulation</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`class Student {
    private int age;

    public void setAge(int age) {
        if(age > 0) {
            this.age = age;
        }
    }

    public int getAge() {
        return age;
    }
}`}
      </pre>

      {/* 9. Table */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Encapsulation Benefits
      </h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border">Feature</th>
              <th className="p-3 border">Benefit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">Data Hiding</td>
              <td className="p-3 border">Protects variables</td>
            </tr>
            <tr>
              <td className="p-3 border">Security</td>
              <td className="p-3 border">Prevents misuse</td>
            </tr>
            <tr>
              <td className="p-3 border">Flexibility</td>
              <td className="p-3 border">Control over data</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 10. Step-by-step */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Step-by-Step Implementation
      </h2>

      <ol className="list-decimal ml-6 text-gray-700 mb-6 space-y-2">
        <li>Declare variables as private</li>
        <li>Create public getter method</li>
        <li>Create public setter method</li>
        <li>Use validation if needed</li>
      </ol>

      {/* 11. Mistakes */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Common Mistakes</h2>

      <ul className="list-disc ml-6 text-red-500 mb-6 space-y-2">
        <li>Making variables public</li>
        <li>Not using validation in setters</li>
        <li>Confusing encapsulation with abstraction</li>
      </ul>

      {/* 12. Interview */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Interview / Viva Questions
      </h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>
          <b>What is encapsulation?</b> → Wrapping data + methods
        </li>
        <li>
          <b>How is it achieved?</b> → Private + getter/setter
        </li>
        <li>
          <b>Why use encapsulation?</b> → Security and control
        </li>
      </ul>

      {/* 13. Key Points */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Key Points Summary</h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>Protects data</li>
        <li>Improves security</li>
        <li>Uses getters and setters</li>
      </ul>

      {/* 14. Memory Trick */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Memory Trick</h2>

      <p className="text-gray-700 mb-6">
        👉 <b>"Private Data + Public Access = Encapsulation"</b>
      </p>
    </div>
  );
};

export default Encapsulation;
