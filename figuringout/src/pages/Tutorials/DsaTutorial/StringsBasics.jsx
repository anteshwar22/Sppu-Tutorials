import React from "react";

const StringsBasics = () => {
  return (
    <div className="space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-black text-white">Strings Basics</h1>

      {/* Simple Explanation */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <p className="text-slate-300 text-lg leading-relaxed">
          A string is just a group of characters.
          <br />
          Example: "hello", "java", "123"
        </p>
      </div>

      {/* Real Life Example */}
      <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-blue-400 mb-2">
          Real-Life Example
        </h2>
        <p className="text-slate-300">
          Think of a string like a word written on paper ✍️
          <br />
          👉 Each letter is a character
          <br />
          👉 Together they make a string
        </p>
      </div>

      {/* String Example */}
      <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-purple-400 mb-4">Example</h2>

        <div className="flex justify-center gap-2 text-center text-white font-mono">
          {["h", "e", "l", "l", "o"].map((ch, index) => (
            <div key={index}>
              <div className="bg-slate-800 px-4 py-3 rounded-lg border border-slate-600">
                {ch}
              </div>
              <div className="text-xs text-slate-400 mt-1">{index}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Points */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-3">Key Points</h2>
        <ul className="text-slate-300 space-y-2">
          <li>✔ String is a group of characters</li>
          <li>✔ Index starts from 0</li>
          <li>✔ Strings are immutable (cannot change directly)</li>
        </ul>
      </div>

      {/* Common Operations */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-3">Common Operations</h2>
        <ul className="text-slate-300 space-y-2">
          <li>✔ Find length</li>
          <li>✔ Access characters</li>
          <li>✔ Compare strings</li>
          <li>✔ Convert case (upper/lower)</li>
        </ul>
      </div>

      {/* Java Code */}
      <div className="bg-black/80 text-green-400 p-5 rounded-xl font-mono text-sm">
        {`// Java String Example
public class Main {
    public static void main(String[] args) {
        String str = "hello";

        // length
        System.out.println(str.length());

        // access character
        System.out.println(str.charAt(0));

        // uppercase
        System.out.println(str.toUpperCase());
    }
}`}
      </div>

      {/* Important Concept */}
      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-emerald-400 mb-2">
          Important Concept
        </h2>
        <p className="text-slate-300">
          Strings cannot be changed directly.
          <br />
          👉 If you change it, a new string is created.
        </p>
      </div>

      {/* Interview Tip */}
      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-yellow-400 mb-2">
          Interview Tip
        </h2>
        <p className="text-slate-300">
          Most string questions are about:
          <br />
          👉 Reversing
          <br />
          👉 Checking palindrome
          <br />
          👉 Counting characters
        </p>
      </div>
    </div>
  );
};

export default StringsBasics;
