import React from "react";

const StringProblems = () => {
  return (
    <div className="space-y-10">
      {/* Title */}
      <h1 className="text-4xl font-black text-white">String Problems</h1>

      {/* Intro */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <p className="text-slate-300 text-lg">
          String problems are very common in interviews. They test your logic
          and understanding of characters.
        </p>
      </div>

      {/* ================= PROBLEM 1 ================= */}
      <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-blue-400 mb-2">
          1. Reverse a String
        </h2>

        <p className="text-slate-300 mb-3">Reverse the given string.</p>

        <pre className="bg-black/80 text-green-400 p-4 rounded-xl text-sm">
          {`Input: "hello"
Output: "olleh"`}
        </pre>

        <h3 className="text-sm text-slate-400 mt-3 mb-2">Solution:</h3>

        <pre className="bg-black/80 text-green-400 p-4 rounded-xl text-sm">
          {`String str = "hello";
String rev = "";

for(int i = str.length()-1; i >= 0; i--) {
    rev += str.charAt(i);
}

System.out.println(rev);`}
        </pre>
      </div>

      {/* ================= PROBLEM 2 ================= */}
      <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-purple-400 mb-2">
          2. Palindrome String
        </h2>

        <p className="text-slate-300 mb-3">
          Check if a string is the same when reversed.
        </p>

        <pre className="bg-black/80 text-green-400 p-4 rounded-xl text-sm">
          {`Input: "madam"
Output: Palindrome`}
        </pre>

        <h3 className="text-sm text-slate-400 mt-3 mb-2">Solution:</h3>

        <pre className="bg-black/80 text-green-400 p-4 rounded-xl text-sm">
          {`String str = "madam";
String rev = "";

for(int i = str.length()-1; i >= 0; i--) {
    rev += str.charAt(i);
}

if(str.equals(rev))
    System.out.println("Palindrome");
else
    System.out.println("Not Palindrome");`}
        </pre>
      </div>

      {/* ================= PROBLEM 3 ================= */}
      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-emerald-400 mb-2">
          3. Count Vowels
        </h2>

        <p className="text-slate-300 mb-3">Count vowels in a string.</p>

        <pre className="bg-black/80 text-green-400 p-4 rounded-xl text-sm">
          {`Input: "hello"
Output: 2`}
        </pre>

        <h3 className="text-sm text-slate-400 mt-3 mb-2">Solution:</h3>

        <pre className="bg-black/80 text-green-400 p-4 rounded-xl text-sm">
          {`String str = "hello";
int count = 0;

for(int i = 0; i < str.length(); i++) {
    char ch = str.charAt(i);

    if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u')
        count++;
}

System.out.println(count);`}
        </pre>
      </div>

      {/* ================= PROBLEM 4 ================= */}
      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-yellow-400 mb-2">
          4. Count Characters
        </h2>

        <p className="text-slate-300 mb-3">
          Count how many times each character appears.
        </p>

        <pre className="bg-black/80 text-green-400 p-4 rounded-xl text-sm">
          {`Input: "aab"
Output: a=2, b=1`}
        </pre>

        <h3 className="text-sm text-slate-400 mt-3 mb-2">Simple Idea:</h3>

        <p className="text-slate-300">
          👉 Use loop and count manually 👉 Or use HashMap (advanced)
        </p>
      </div>

      {/* ================= SUMMARY ================= */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-3">Important Patterns</h2>
        <ul className="text-slate-300 space-y-2">
          <li>✔ Loop from start/end</li>
          <li>✔ Compare characters</li>
          <li>✔ Build new string</li>
        </ul>
      </div>

      {/* Interview Tip */}
      <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-red-400 mb-2">Interview Tip</h2>
        <p className="text-slate-300">
          Most string questions are based on:
          <br />
          👉 Reverse
          <br />
          👉 Palindrome
          <br />
          👉 Frequency
        </p>
      </div>
    </div>
  );
};

export default StringProblems;
