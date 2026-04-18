import React from "react";

const ArrayProblems = () => {
  return (
    <div className="space-y-10">
      {/* Title */}
      <h1 className="text-4xl font-black text-white">Array Problems</h1>

      {/* Intro */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <p className="text-slate-300 text-lg">
          Array problems are very important for coding interviews. Most
          companies ask logic-based questions using arrays.
        </p>
      </div>

      {/* ================= PROBLEM 1 ================= */}
      <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-blue-400 mb-2">
          1. Find Maximum Element
        </h2>

        <p className="text-slate-300 mb-3">
          Find the largest element in an array.
        </p>

        <pre className="bg-black/80 text-green-400 p-4 rounded-xl text-sm">
          {`int arr[] = {10, 50, 20, 90, 30};

// Output: 90`}
        </pre>

        <h3 className="text-sm text-slate-400 mt-3 mb-2">Solution:</h3>

        <pre className="bg-black/80 text-green-400 p-4 rounded-xl text-sm">
          {`int max = arr[0];

for(int i = 1; i < arr.length; i++) {
    if(arr[i] > max) {
        max = arr[i];
    }
}

System.out.println(max);`}
        </pre>

        <p className="text-slate-400 mt-2">Time Complexity: O(n)</p>
      </div>

      {/* ================= PROBLEM 2 ================= */}
      <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-purple-400 mb-2">
          2. Reverse an Array
        </h2>

        <p className="text-slate-300 mb-3">Reverse the array elements.</p>

        <pre className="bg-black/80 text-green-400 p-4 rounded-xl text-sm">
          {`int arr[] = {1, 2, 3, 4};

// Output: 4 3 2 1`}
        </pre>

        <h3 className="text-sm text-slate-400 mt-3 mb-2">Solution:</h3>

        <pre className="bg-black/80 text-green-400 p-4 rounded-xl text-sm">
          {`int left = 0;
int right = arr.length - 1;

while(left < right) {
    int temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
}`}
        </pre>

        <p className="text-slate-400 mt-2">Time Complexity: O(n)</p>
      </div>

      {/* ================= PROBLEM 3 ================= */}
      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-emerald-400 mb-2">
          3. Linear Search
        </h2>

        <p className="text-slate-300 mb-3">
          Search for an element in an array.
        </p>

        <pre className="bg-black/80 text-green-400 p-4 rounded-xl text-sm">
          {`int arr[] = {10, 20, 30};
int key = 20;

// Output: Found`}
        </pre>

        <h3 className="text-sm text-slate-400 mt-3 mb-2">Solution:</h3>

        <pre className="bg-black/80 text-green-400 p-4 rounded-xl text-sm">
          {`boolean found = false;

for(int i = 0; i < arr.length; i++) {
    if(arr[i] == key) {
        found = true;
        break;
    }
}

if(found)
    System.out.println("Found");
else
    System.out.println("Not Found");`}
        </pre>

        <p className="text-slate-400 mt-2">Time Complexity: O(n)</p>
      </div>

      {/* ================= PROBLEM 4 ================= */}
      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-yellow-400 mb-2">
          4. Sum of Array Elements
        </h2>

        <p className="text-slate-300 mb-3">
          Find the sum of all elements in an array.
        </p>

        <pre className="bg-black/80 text-green-400 p-4 rounded-xl text-sm">
          {`int arr[] = {1, 2, 3, 4};

// Output: 10`}
        </pre>

        <h3 className="text-sm text-slate-400 mt-3 mb-2">Solution:</h3>

        <pre className="bg-black/80 text-green-400 p-4 rounded-xl text-sm">
          {`int sum = 0;

for(int i = 0; i < arr.length; i++) {
    sum += arr[i];
}

System.out.println(sum);`}
        </pre>

        <p className="text-slate-400 mt-2">Time Complexity: O(n)</p>
      </div>

      {/* ================= SUMMARY ================= */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-3">Important Patterns</h2>
        <ul className="text-slate-300 space-y-2">
          <li>✔ Traversal (loop)</li>
          <li>✔ Two pointer (reverse)</li>
          <li>✔ Searching (linear search)</li>
          <li>✔ Accumulation (sum)</li>
        </ul>
      </div>

      {/* Interview Tip */}
      <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-red-400 mb-2">Interview Tip</h2>
        <p className="text-slate-300">
          Most array problems are based on:
          <br />
          👉 Loop 👉 Two Pointer 👉 Sliding Window (advanced)
        </p>
      </div>
    </div>
  );
};

export default ArrayProblems;
