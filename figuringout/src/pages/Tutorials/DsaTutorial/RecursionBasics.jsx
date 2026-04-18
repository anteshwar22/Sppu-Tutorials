import React from "react";

const RecursionBasics = () => {
  return (
    <div className="space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-black text-white">Recursion Basics</h1>

      {/* Simple Explanation */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <p className="text-slate-300 text-lg leading-relaxed">
          Recursion is a technique where a function calls itself to solve a
          problem. It breaks a big problem into smaller problems of the same
          type.
        </p>
      </div>

      {/* Real-Life Example */}
      <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-blue-400 mb-2">
          Real-Life Example
        </h2>
        <p className="text-slate-300">
          Think of standing between two mirrors 🪞:
          <br />
          You see infinite reflections of yourself.
          <br />
          👉 That’s recursion — repeating the same thing again and again.
        </p>
      </div>

      {/* Key Concepts */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-3">Key Concepts</h2>
        <ul className="text-slate-300 space-y-2">
          <li>✔ Function calls itself</li>
          <li>✔ Must have a Base Case (to stop recursion)</li>
          <li>✔ Has Recursive Case (calling itself)</li>
        </ul>
      </div>

      {/* Structure */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-3">Structure of Recursion</h2>

        <pre className="bg-black/80 text-green-400 p-4 rounded-xl text-sm">
          {`function recursion() {
    if(base condition) {
        return;
    }

    // work

    recursion(); // recursive call
}`}
        </pre>
      </div>

      {/* Example: Factorial */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-3">Example: Factorial</h2>

        <pre className="bg-black/80 text-green-400 p-4 rounded-xl text-sm">
          {`// Factorial using recursion
public class Main {
    static int fact(int n) {
        if(n == 0) return 1;   // base case
        return n * fact(n-1);  // recursive call
    }

    public static void main(String[] args) {
        System.out.println(fact(5)); // 120
    }
}`}
        </pre>
      </div>

      {/* Dry Run */}
      <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-purple-400 mb-2">
          Dry Run (n = 3)
        </h2>
        <p className="text-slate-300">
          fact(3) → 3 × fact(2)
          <br />
          fact(2) → 2 × fact(1)
          <br />
          fact(1) → 1 × fact(0)
          <br />
          fact(0) → 1
          <br />
          👉 Final Answer = 6
        </p>
      </div>

      {/* Advantages */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-3">Advantages</h2>
        <ul className="text-slate-300 space-y-2">
          <li>✔ Code becomes shorter</li>
          <li>✔ Easy to solve complex problems</li>
          <li>✔ Useful in trees, graphs, backtracking</li>
        </ul>
      </div>

      {/* Disadvantages */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-3">Disadvantages</h2>
        <ul className="text-slate-300 space-y-2">
          <li>❌ Uses more memory (stack)</li>
          <li>❌ Can cause stack overflow</li>
          <li>❌ Sometimes slower than loops</li>
        </ul>
      </div>

      {/* Key Points */}
      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-emerald-400 mb-2">
          Key Points to Remember
        </h2>
        <ul className="text-slate-300 space-y-2">
          <li>✔ Always define base case</li>
          <li>✔ Avoid infinite recursion</li>
          <li>✔ Think in smaller subproblems</li>
        </ul>
      </div>
    </div>
  );
};

export default RecursionBasics;
