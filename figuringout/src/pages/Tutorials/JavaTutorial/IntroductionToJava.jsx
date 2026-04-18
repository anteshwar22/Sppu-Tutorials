import React, { useState } from "react";

const IntroductionToJava = () => {
  const [copied, setCopied] = useState(false);

  const code = `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600">Introduction to Java</h1>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed">
        Java is a high-level, object-oriented, and platform-independent
        programming language. It was developed by Sun Microsystems (now owned by
        Oracle) and is widely used for building web applications, mobile apps,
        enterprise software, and more.
      </p>

      {/* Key Features */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Key Features</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Platform Independent (Write Once, Run Anywhere)</li>
          <li>Object-Oriented Programming</li>
          <li>Secure and Robust</li>
          <li>Multithreaded</li>
          <li>High Performance (with JIT Compiler)</li>
        </ul>
      </div>

      {/* Example Code */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Example Program</h2>

        <div className="relative">
          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-3 py-1 rounded hover:bg-blue-700 transition"
          >
            {copied ? "Copied!" : "Copy"}
          </button>

          {/* Code Block */}
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
            {code}
          </pre>
        </div>
      </div>

      {/* Output */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Output</h2>
        <div className="bg-gray-100 p-3 rounded">Hello, Java!</div>
      </div>
    </div>
  );
};

export default IntroductionToJava;
