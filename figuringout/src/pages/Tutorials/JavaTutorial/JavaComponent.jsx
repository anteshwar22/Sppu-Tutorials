import React from "react";

const JavaComponent = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 text-white">
      {/* Title */}
      <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Introduction to Java
      </h1>

      {/* Intro Card */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-6 shadow-xl">
        <p className="text-gray-300 leading-relaxed">
          Java is a high-level, object-oriented programming language used to
          build applications like web apps, mobile apps, and enterprise systems.
        </p>
        <p className="text-gray-400 mt-3">
          It follows the principle of "Write Once, Run Anywhere".
        </p>
      </div>

      {/* Analogy */}
      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 rounded-2xl p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-3">Real-Life Analogy 🎬</h2>
        <p className="text-gray-300">
          👉 JDK = Movie studio (creates movie) <br />
          👉 JRE = Cinema hall (runs movie) <br />
          👉 JVM = Projector (plays movie)
        </p>
      </div>

      {/* Definition */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Definition</h2>
      <p className="text-gray-300 mb-6">
        Java is a platform-independent language that uses JVM to execute
        programs.
      </p>

      {/* JVM JRE JDK Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
          <h3 className="text-xl font-bold text-blue-400 mb-2">JVM</h3>
          <ul className="text-gray-300 space-y-1 text-sm">
            <li>Executes bytecode</li>
            <li>Platform dependent</li>
            <li>Handles memory</li>
          </ul>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
          <h3 className="text-xl font-bold text-green-400 mb-2">JRE</h3>
          <ul className="text-gray-300 space-y-1 text-sm">
            <li>Includes JVM</li>
            <li>Runtime environment</li>
            <li>Libraries</li>
          </ul>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
          <h3 className="text-xl font-bold text-purple-400 mb-2">JDK</h3>
          <ul className="text-gray-300 space-y-1 text-sm">
            <li>Includes JRE</li>
            <li>Compiler (javac)</li>
            <li>Development tools</li>
          </ul>
        </div>
      </div>

      {/* Flow */}
      <h2 className="text-2xl font-semibold mb-3">How Java Works</h2>
      <div className="bg-black/80 text-green-400 p-5 rounded-xl font-mono mb-8">
        Java Code (.java) <br /> ↓ <br /> Compiler (JDK) <br /> ↓ <br />{" "}
        Bytecode (.class) <br /> ↓ <br /> JVM <br /> ↓ <br /> Machine Code
      </div>

      {/* Summary */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-3">Key Points</h2>
        <ul className="text-gray-300 space-y-2">
          <li>✔ JDK = Development</li>
          <li>✔ JRE = Runtime</li>
          <li>✔ JVM = Execution</li>
        </ul>
      </div>

      {/* Memory Trick */}
      <div className="text-center mt-8">
        <p className="text-lg font-bold">
          👉 <span className="text-blue-400">JDK</span> &gt;
          <span className="text-green-400"> JRE</span> &gt;
          <span className="text-purple-400"> JVM</span>
        </p>
        <p className="text-gray-400 text-sm mt-2">
          (JDK contains JRE, JRE contains JVM)
        </p>
      </div>
    </div>
  );
};

export default JavaComponent;
