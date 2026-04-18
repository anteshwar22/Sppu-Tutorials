import React from "react";

const JavaFeatures = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Features of Java</h1>

      <p className="text-gray-700 mb-4">
        Java is one of the most popular programming languages used for building
        web applications, mobile apps, and enterprise systems. Its popularity
        comes from its powerful features.
      </p>

      {/* Simple */}

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Simple</h2>
      <p className="text-gray-700 mb-4">
        Java is easy to learn and understand. It removes complex features like
        pointers and provides a clean syntax, making it beginner-friendly.
      </p>

      {/* OOP */}

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Object-Oriented</h2>
      <p className="text-gray-700 mb-4">
        Java follows Object-Oriented Programming (OOP). Everything is based on
        classes and objects. It supports inheritance, polymorphism,
        encapsulation, and abstraction.
      </p>

      {/* Platform Independent */}

      <h2 className="text-xl font-semibold mt-6 mb-2">
        3. Platform Independent
      </h2>
      <p className="text-gray-700 mb-4">
        Java follows the concept of <b>Write Once, Run Anywhere (WORA)</b>. Java
        code is compiled into bytecode, which runs on JVM, making it platform
        independent.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`Java Code → Bytecode → JVM → Any OS`}
      </pre>

      {/* Secure */}

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Secure</h2>
      <p className="text-gray-700 mb-4">
        Java is secure because it does not use pointers and runs inside JVM. It
        is widely used in banking and secure applications.
      </p>

      {/* Robust */}

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Robust</h2>
      <p className="text-gray-700 mb-4">
        Java is robust due to strong memory management and exception handling,
        which prevents crashes.
      </p>

      {/* Multithreading */}

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Multithreaded</h2>
      <p className="text-gray-700 mb-4">
        Java supports multithreading, meaning multiple tasks can run at the same
        time, improving performance.
      </p>

      {/* Performance */}

      <h2 className="text-xl font-semibold mt-6 mb-2">7. High Performance</h2>
      <p className="text-gray-700 mb-4">
        Java uses a Just-In-Time (JIT) compiler, which improves execution speed.
      </p>

      {/* Portable */}

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Portable</h2>
      <p className="text-gray-700 mb-4">
        Java programs can run on different systems without modification, making
        them portable.
      </p>

      {/* Distributed */}

      <h2 className="text-xl font-semibold mt-6 mb-2">9. Distributed</h2>
      <p className="text-gray-700 mb-4">
        Java supports networking and distributed systems, making it suitable for
        large-scale applications.
      </p>

      {/* Dynamic */}

      <h2 className="text-xl font-semibold mt-6 mb-2">10. Dynamic</h2>
      <p className="text-gray-700 mb-4">
        Java supports dynamic memory allocation and runtime behavior, making it
        flexible.
      </p>

      {/* Summary */}

      <h2 className="text-xl font-semibold mt-8 mb-3">Key Points</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Java is simple and beginner-friendly</li>
        <li>It follows object-oriented principles</li>
        <li>Platform independence is its biggest advantage</li>
        <li>Widely used in real-world applications</li>
      </ul>
    </div>
  );
};

export default JavaFeatures;
