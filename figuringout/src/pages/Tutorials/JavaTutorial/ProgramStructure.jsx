import React from "react";

const ProgramStructure = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Java Program Structure</h1>

      <p className="text-gray-700 mb-4">
        A Java program has a specific structure that must be followed. It
        includes class declaration, main method, and statements.
      </p>

      {/* Basic Structure */}

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Basic Structure of Java Program
      </h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`public class Main {

  public static void main(String[] args) {

    System.out.println("Hello World");

  }
}`}
      </pre>

      {/* Explanation */}

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Explanation of Each Part
      </h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>
          <b>public class Main</b> – Defines a class. Every Java program must
          have at least one class.
        </li>

        <li>
          <b>main() method</b> – Entry point of the program. Execution starts
          from here.
        </li>

        <li>
          <b>public</b> – Access modifier (accessible everywhere).
        </li>

        <li>
          <b>static</b> – Allows method to run without creating an object.
        </li>

        <li>
          <b>void</b> – Method does not return anything.
        </li>

        <li>
          <b>String[] args</b> – Command-line arguments.
        </li>

        <li>
          <b>System.out.println()</b> – Used to print output.
        </li>
      </ul>

      {/* Flow */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Execution Flow</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`Compilation → Bytecode → JVM → Output`}
      </pre>

      {/* Steps */}

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Steps to Run Java Program
      </h2>

      <ol className="list-decimal ml-6 text-gray-700 space-y-2">
        <li>Write code in .java file</li>
        <li>Compile using javac</li>
        <li>Run using java command</li>
      </ol>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`javac Main.java
java Main`}
      </pre>

      {/* Key Points */}

      <h2 className="text-xl font-semibold mt-8 mb-3">Key Points</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Every Java program must have a class</li>
        <li>Main method is the starting point</li>
        <li>Java follows strict syntax rules</li>
        <li>Execution happens through JVM</li>
      </ul>
    </div>
  );
};

export default ProgramStructure;
