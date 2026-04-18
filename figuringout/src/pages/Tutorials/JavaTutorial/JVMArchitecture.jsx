import React from "react";

const JVMArchitecture = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">JVM Architecture</h1>

      <p className="text-gray-700 mb-4">
        JVM (Java Virtual Machine) is a part of Java that provides a runtime
        environment to execute Java bytecode. It makes Java platform
        independent.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`Java Code → Bytecode → JVM → Machine Code`}
      </pre>

      {/* What is JVM */}

      <h2 className="text-xl font-semibold mt-6 mb-2">What is JVM?</h2>

      <p className="text-gray-700 mb-4">
        JVM is responsible for converting bytecode into machine code and
        executing it. It also manages memory and ensures security.
      </p>

      {/* Components */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Components of JVM</h2>

      {/* Class Loader */}

      <h3 className="text-lg font-semibold mt-4">1. Class Loader</h3>
      <p className="text-gray-700 mb-3">
        Loads class files into memory. It performs loading, linking, and
        initialization.
      </p>

      {/* Method Area */}

      <h3 className="text-lg font-semibold mt-4">2. Method Area</h3>
      <p className="text-gray-700 mb-3">
        Stores class-level data such as method code, static variables, and
        runtime constant pool.
      </p>

      {/* Heap */}

      <h3 className="text-lg font-semibold mt-4">3. Heap Memory</h3>
      <p className="text-gray-700 mb-3">
        Stores objects and instance variables. It is shared among all threads.
      </p>

      {/* Stack */}

      <h3 className="text-lg font-semibold mt-4">4. Stack Memory</h3>
      <p className="text-gray-700 mb-3">
        Stores method calls, local variables, and partial results. Each thread
        has its own stack.
      </p>

      {/* PC Register */}

      <h3 className="text-lg font-semibold mt-4">
        5. Program Counter (PC Register)
      </h3>
      <p className="text-gray-700 mb-3">
        Keeps track of the current instruction being executed.
      </p>

      {/* Execution Engine */}

      <h3 className="text-lg font-semibold mt-4">6. Execution Engine</h3>
      <p className="text-gray-700 mb-3">
        Executes bytecode using Interpreter and JIT Compiler.
      </p>

      {/* Interpreter */}

      <h4 className="font-semibold mt-2">Interpreter</h4>
      <p className="text-gray-700 mb-3">
        Executes bytecode line by line (slower).
      </p>

      {/* JIT */}

      <h4 className="font-semibold mt-2">JIT Compiler</h4>
      <p className="text-gray-700 mb-4">
        Converts bytecode into native machine code for faster execution.
      </p>

      {/* Native Method */}

      <h3 className="text-lg font-semibold mt-4">
        7. Native Method Interface (JNI)
      </h3>
      <p className="text-gray-700 mb-3">
        Allows Java to interact with native languages like C and C++.
      </p>

      {/* Native Libraries */}

      <h3 className="text-lg font-semibold mt-4">8. Native Method Libraries</h3>
      <p className="text-gray-700 mb-3">
        Contains native code libraries required for execution.
      </p>

      {/* Diagram */}

      <h2 className="text-xl font-semibold mt-8 mb-3">JVM Flow</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`Class Loader → Memory Areas → Execution Engine → Output`}
      </pre>

      {/* Key Points */}

      <h2 className="text-xl font-semibold mt-8 mb-3">Key Points</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>JVM makes Java platform independent</li>
        <li>It converts bytecode into machine code</li>
        <li>Manages memory automatically</li>
        <li>Uses JIT compiler for better performance</li>
      </ul>
    </div>
  );
};

export default JVMArchitecture;
