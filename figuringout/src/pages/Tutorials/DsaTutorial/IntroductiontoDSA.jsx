import React from "react";

const IntroductiontoDSA = () => {
  return (
    <div className="space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-black text-white">Introduction to DSA</h1>

      {/* Simple Explanation */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <p className="text-slate-300 leading-relaxed text-lg">
          DSA (Data Structures and Algorithms) is the foundation of programming.
          It helps you store data efficiently and solve problems faster.
        </p>
      </div>

      {/* Real Life Example */}
      <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-blue-400 mb-2">
          Real-Life Example
        </h2>
        <p className="text-slate-300">
          Think of DSA like organizing books 📚 in a library.
          <br />
          👉 Data Structure = How you arrange books
          <br />
          👉 Algorithm = How you search for a book
        </p>
      </div>

      {/* Key Points */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-3">Key Points</h2>
        <ul className="text-slate-300 space-y-2">
          <li>✔ Improves problem-solving skills</li>
          <li>✔ Important for coding interviews</li>
          <li>✔ Helps optimize performance</li>
        </ul>
      </div>

      {/* Code Example */}
      <div className="bg-black/80 text-green-400 p-5 rounded-xl font-mono">
        {`// Simple Example: Linear Search
public class Main {
    public static void main(String[] args) {
        int arr[] = {10, 20, 30};
        int key = 20;

        for(int i=0; i<arr.length; i++) {
            if(arr[i] == key) {
                System.out.println("Found at index: " + i);
            }
        }
    }
}`}
      </div>
    </div>
  );
};

export default IntroductiontoDSA;
