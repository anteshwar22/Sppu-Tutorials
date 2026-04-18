import React from "react";

const Arrays = () => {
  return (
    <div className="space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-black text-white">Arrays</h1>

      {/* Simple Explanation */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <p className="text-slate-300 text-lg leading-relaxed">
          An array is a collection of elements stored in contiguous memory
          locations. All elements in an array are of the same data type.
        </p>
      </div>

      {/* Real Life Example */}
      <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-blue-400 mb-2">
          Real-Life Example
        </h2>
        <p className="text-slate-300">
          Think of an array like a row of lockers 🔐:
          <br />
          👉 Each locker has an index (0,1,2...)
          <br />
          👉 Each locker stores one value
        </p>
      </div>

      {/* Array Diagram */}
      <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-purple-400 mb-4">
          Array Representation
        </h2>

        <div className="flex justify-center gap-2 text-center text-white font-mono">
          {/* Values */}
          {[10, 20, 30, 40, 50].map((val, index) => (
            <div key={index}>
              <div className="bg-slate-800 px-5 py-3 rounded-lg border border-slate-600">
                {val}
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
          <li>✔ Fixed size</li>
          <li>✔ Stores same data type</li>
          <li>✔ Index starts from 0</li>
          <li>✔ Fast access using index</li>
        </ul>
      </div>

      {/* Operations */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-3">Common Operations</h2>
        <ul className="text-slate-300 space-y-2">
          <li>✔ Traversal</li>
          <li>✔ Insertion</li>
          <li>✔ Deletion</li>
          <li>✔ Searching</li>
        </ul>
      </div>

      {/* Code Example */}
      <div className="bg-black/80 text-green-400 p-5 rounded-xl font-mono text-sm">
        {`// Java Array Example
public class Main {
    public static void main(String[] args) {
        int arr[] = {10, 20, 30, 40, 50};

        // Traversing array
        for(int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }
    }
}`}
      </div>

      {/* Advantages */}
      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-emerald-400 mb-2">Advantages</h2>
        <ul className="text-slate-300 space-y-2">
          <li>✔ Fast access (O(1))</li>
          <li>✔ Easy to use</li>
          <li>✔ Memory efficient</li>
        </ul>
      </div>

      {/* Disadvantages */}
      <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-red-400 mb-2">Disadvantages</h2>
        <ul className="text-slate-300 space-y-2">
          <li>❌ Fixed size</li>
          <li>❌ Insertion/Deletion costly</li>
          <li>❌ Wastage of memory possible</li>
        </ul>
      </div>

      {/* Key Interview Point */}
      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-yellow-400 mb-2">
          Interview Tip
        </h2>
        <p className="text-slate-300">
          Always remember:
          <br />
          👉 Array access = O(1)
          <br />
          👉 Searching = O(n)
        </p>
      </div>
    </div>
  );
};

export default Arrays;
