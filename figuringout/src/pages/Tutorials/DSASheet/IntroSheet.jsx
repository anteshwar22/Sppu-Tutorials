import React, { useState, useEffect } from "react";
import { ExternalLink, CheckCircle2, Calendar, Trophy } from "lucide-react";
const initialProblems = [
  // Easy
  {
    id: 1,
    name: "Build Array from Permutation",
    difficulty: "Easy",
    done: false,
    date: "",
    revision: false,
    link: "https://leetcode.com/problems/build-array-from-permutation/",
  },
  {
    id: 2,
    name: "Concatenation of Array",
    difficulty: "Easy",
    done: true,
    date: "",
    revision: true,
    link: "https://leetcode.com/problems/concatenation-of-array/",
  },
  {
    id: 3,
    name: "Running Sum of 1d Array",
    difficulty: "Easy",
    done: true,
    date: "",
    revision: false,
    link: "https://leetcode.com/problems/running-sum-of-1d-array/",
  },
  {
    id: 4,
    name: "Richest Customer Wealth",
    difficulty: "Easy",
    done: true,
    date: "",
    revision: true,
    link: "https://leetcode.com/problems/richest-customer-wealth/",
  },
  {
    id: 5,
    name: "Shuffle the Array",
    difficulty: "Easy",
    done: true,
    date: "",
    revision: false,
    link: "https://leetcode.com/problems/shuffle-the-array/",
  },
  {
    id: 6,
    name: "Kids With the Greatest Number of Candies",
    difficulty: "Easy",
    done: true,
    date: "",
    revision: false,
    link: "https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/",
  },
  {
    id: 7,
    name: "Number of Good Pairs",
    difficulty: "Easy",
    done: true,
    date: "",
    revision: false,
    link: "https://leetcode.com/problems/number-of-good-pairs/",
  },
  {
    id: 8,
    name: "How Many Numbers Are Smaller Than the Current Number",
    difficulty: "Easy",
    done: true,
    date: "",
    revision: false,
    link: "https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/",
  },
  {
    id: 9,
    name: "Create Target Array in the Given Order",
    difficulty: "Easy",
    done: true,
    date: "",
    revision: false,
    link: "https://leetcode.com/problems/create-target-array-in-the-given-order/",
  },
  {
    id: 10,
    name: "Check if the Sentence Is Pangram",
    difficulty: "Easy",
    done: true,
    date: "",
    revision: false,
    link: "https://leetcode.com/problems/check-if-the-sentence-is-pangram/",
  },
  {
    id: 11,
    name: "Count Items Matching a Rule",
    difficulty: "Easy",
    done: true,
    date: "",
    revision: false,
    link: "https://leetcode.com/problems/count-items-matching-a-rule/",
  },
  {
    id: 12,
    name: "Find the Highest Altitude",
    difficulty: "Easy",
    done: false,
    date: "",
    revision: false,
    link: "https://leetcode.com/problems/find-the-highest-altitude/",
  },
  {
    id: 13,
    name: "Flipping an Image",
    difficulty: "Easy",
    done: false,
    date: "",
    revision: false,
    link: "https://leetcode.com/problems/flipping-an-image/",
  },
  {
    id: 14,
    name: "Cells with Odd Values in a Matrix",
    difficulty: "Easy",
    done: false,
    date: "",
    revision: false,
    link: "https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/",
  },
  {
    id: 15,
    name: "Matrix Diagonal Sum",
    difficulty: "Easy",
    done: false,
    date: "",
    revision: false,
    link: "https://leetcode.com/problems/matrix-diagonal-sum/",
  },
  {
    id: 16,
    name: "Find Numbers with Even Number of Digits",
    difficulty: "Easy",
    done: true,
    date: "",
    revision: false,
    link: "https://leetcode.com/problems/find-numbers-with-even-number-of-digits/",
  },
  {
    id: 17,
    name: "Transpose Matrix",
    difficulty: "Easy",
    done: false,
    date: "",
    revision: false,
    link: "https://leetcode.com/problems/transpose-matrix/",
  },
  {
    id: 18,
    name: "Add to Array-Form of Integer",
    difficulty: "Easy",
    done: false,
    date: "",
    revision: false,
    link: "https://leetcode.com/problems/add-to-array-form-of-integer/",
  },
  {
    id: 19,
    name: "Maximum Population Year",
    difficulty: "Easy",
    done: false,
    date: "",
    revision: false,
    link: "https://leetcode.com/problems/maximum-population-year/",
  },
  {
    id: 20,
    name: "Determine Whether Matrix Can Be Obtained By Rotation",
    difficulty: "Easy",
    done: false,
    date: "",
    revision: false,
    link: "https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/",
  },
  {
    id: 21,
    name: "Two Sum",
    difficulty: "Easy",
    done: false,
    date: "",
    revision: false,
    link: "https://leetcode.com/problems/two-sum/",
  },
  {
    id: 22,
    name: "Find N Unique Integers Sum up to Zero",
    difficulty: "Easy",
    done: true,
    date: "",
    revision: false,
    link: "https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/",
  },
  {
    id: 23,
    name: "Lucky Numbers in a Matrix",
    difficulty: "Easy",
    done: false,
    date: "",
    revision: false,
    link: "https://leetcode.com/problems/lucky-numbers-in-a-matrix/",
  },
  {
    id: 24,
    name: "Maximum Subarray",
    difficulty: "Easy",
    done: true,
    date: "",
    revision: false,
    link: "https://leetcode.com/problems/maximum-subarray/",
  },
  {
    id: 25,
    name: "Reshape the Matrix",
    difficulty: "Easy",
    done: false,
    date: "",
    revision: false,
    link: "https://leetcode.com/problems/reshape-the-matrix/",
  },
  {
    id: 26,
    name: "Plus One",
    difficulty: "Easy",
    done: true,
    date: "",
    revision: false,
    link: "https://leetcode.com/problems/plus-one/",
  },
  {
    id: 27,
    name: "Remove Duplicates from Sorted Array",
    difficulty: "Easy",
    done: true,
    date: "",
    revision: false,
    link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
  },
  {
    id: 28,
    name: "Minimum Cost to Move Chips to The Same Position",
    difficulty: "Easy",
    done: false,
    date: "",
    revision: false,
    link: "https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/",
  },

  // Medium
  {
    id: 29,
    name: "Spiral Matrix",
    difficulty: "Medium",
    done: false,
    date: "",
    revision: false,
    link: "https://leetcode.com/problems/spiral-matrix/",
  },
  {
    id: 30,
    name: "Spiral Matrix II",
    difficulty: "Medium",
    done: false,
    date: "",
    revision: false,
    link: "https://leetcode.com/problems/spiral-matrix-ii/",
  },
  {
    id: 31,
    name: "Spiral Matrix III",
    difficulty: "Medium",
    done: false,
    date: "",
    revision: false,
    link: "https://leetcode.com/problems/spiral-matrix-iii/",
  },
  {
    id: 32,
    name: "Set Matrix Zeroes",
    difficulty: "Medium",
    done: false,
    date: "",
    revision: false,
    link: "https://leetcode.com/problems/set-matrix-zeroes/",
  },
  {
    id: 33,
    name: "Product of Array Except Self",
    difficulty: "Medium",
    done: false,
    date: "",
    revision: false,
    link: "https://leetcode.com/problems/product-of-array-except-self/",
  },
  {
    id: 34,
    name: "Find First and Last Position of Element in Sorted Array",
    difficulty: "Medium",
    done: false,
    date: "",
    revision: false,
    link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
  },
  {
    id: 35,
    name: "Jump Game",
    difficulty: "Medium",
    done: false,
    date: "",
    revision: false,
    link: "https://leetcode.com/problems/jump-game/",
  },
  {
    id: 36,
    name: "Rotate Array",
    difficulty: "Medium",
    done: false,
    date: "",
    revision: false,
    link: "https://leetcode.com/problems/rotate-array/",
  },
  {
    id: 37,
    name: "Sort Colors",
    difficulty: "Medium",
    done: false,
    date: "",
    revision: false,
    link: "https://leetcode.com/problems/sort-colors/",
  },
  {
    id: 38,
    name: "House Robber",
    difficulty: "Medium",
    done: false,
    date: "",
    revision: false,
    link: "https://leetcode.com/problems/house-robber/",
  },

  // Hard
  {
    id: 39,
    name: "Max Value of Equation",
    difficulty: "Hard",
    done: false,
    date: "",
    revision: false,
    link: "https://leetcode.com/problems/max-value-of-equation/",
  },
  {
    id: 40,
    name: "First Missing Positive",
    difficulty: "Hard",
    done: false,
    date: "",
    revision: false,
    link: "https://leetcode.com/problems/first-missing-positive/",
  },
  {
    id: 41,
    name: "Good Array",
    difficulty: "Hard",
    done: false,
    date: "",
    revision: false,
    link: "https://leetcode.com/problems/check-if-it-is-a-good-array/",
  },
];

const IntroSheet = () => {
  const [problems, setProblems] = useState(initialProblems);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("array-sheet-progress");
    if (saved) {
      setProblems(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage whenever problems change
  useEffect(() => {
    localStorage.setItem("array-sheet-progress", JSON.stringify(problems));
  }, [problems]);

  const toggleDone = (id) => {
    setProblems((prev) =>
      prev.map((p) => (p.id === id ? { ...p, done: !p.done } : p)),
    );
  };

  const toggleRevision = (id) => {
    setProblems((prev) =>
      prev.map((p) => (p.id === id ? { ...p, revision: !p.revision } : p)),
    );
  };

  const handleDateChange = (id, value) => {
    setProblems((prev) =>
      prev.map((p) => (p.id === id ? { ...p, date: value } : p)),
    );
  };

  // Calculations
  const totalProblems = problems.length;
  const solvedProblems = problems.filter((p) => p.done).length;
  const progressPercentage =
    totalProblems > 0 ? Math.round((solvedProblems / totalProblems) * 100) : 0;

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-slate-200 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-5xl font-bold tracking-tighter mb-3 flex items-center gap-3">
            DSA Array Sheet
          </h1>
          <p className="text-slate-400 text-lg">
            Track your LeetCode Array problems
          </p>
        </div>

        {/* Progress Section */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 mb-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Trophy className="w-10 h-10 text-emerald-400" />
              <div>
                <div className="text-4xl font-bold text-emerald-400">
                  {solvedProblems} / {totalProblems}
                </div>
                <div className="text-slate-400">Problems Solved</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-5xl font-bold text-emerald-400">
                {progressPercentage}%
              </div>
              <div className="text-sm text-slate-400">Overall Progress</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="h-3 bg-zinc-900 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-700"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Table */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-zinc-900 sticky top-0 z-10">
                <tr className="border-b border-zinc-800">
                  <th className="px-6 py-5 text-left w-14">Done</th>
                  <th className="px-6 py-5 text-left">Problem Name</th>
                  <th className="px-6 py-5 text-center w-28">Difficulty</th>
                  <th className="px-6 py-5 text-center w-40">Solved Date</th>
                  <th className="px-6 py-5 text-center w-28">Revision</th>
                  <th className="px-6 py-5 text-center w-16">Link</th>
                </tr>
              </thead>

              <tbody>
                {problems.map((problem) => (
                  <tr
                    key={problem.id}
                    className="border-b border-zinc-800 hover:bg-zinc-900/60 transition-colors"
                  >
                    {/* Done */}
                    <td className="px-6 py-5">
                      <button
                        onClick={() => toggleDone(problem.id)}
                        className={`w-8 h-8 rounded-2xl flex items-center justify-center border-2 transition-all ${
                          problem.done
                            ? "bg-emerald-500 border-emerald-500"
                            : "border-zinc-600 hover:border-zinc-400"
                        }`}
                      >
                        {problem.done && (
                          <CheckCircle2 className="w-5 h-5 text-white" />
                        )}
                      </button>
                    </td>

                    {/* Problem Name */}
                    <td className="px-6 py-5">
                      <span
                        className={`font-medium ${problem.done ? "line-through text-emerald-400" : "text-white"}`}
                      >
                        {problem.name}
                      </span>
                    </td>

                    {/* Difficulty */}
                    <td className="px-6 py-5 text-center">
                      <span
                        className={`inline-block px-4 py-1 text-xs font-semibold rounded-full ${
                          problem.difficulty === "Easy"
                            ? "bg-emerald-500/10 text-emerald-400"
                            : problem.difficulty === "Medium"
                              ? "bg-amber-500/10 text-amber-400"
                              : "bg-rose-500/10 text-rose-400"
                        }`}
                      >
                        {problem.difficulty}
                      </span>
                    </td>

                    {/* Date */}
                    <td className="px-6 py-5 text-center">
                      <input
                        type="date"
                        value={problem.date}
                        onChange={(e) => handleDate(problem.id, e.target.value)}
                        className="bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-emerald-500 w-full max-w-[140px]"
                      />
                    </td>

                    {/* Revision */}
                    <td className="px-6 py-5 text-center">
                      <button
                        onClick={() => toggleRevision(problem.id)}
                        className={`px-6 py-2 text-sm font-medium rounded-2xl transition-all ${
                          problem.revision
                            ? "bg-orange-600 text-white"
                            : "bg-zinc-800 hover:bg-zinc-700 text-zinc-400"
                        }`}
                      >
                        {problem.revision ? "Revision ✓" : "Mark Revision"}
                      </button>
                    </td>

                    {/* LeetCode Link */}
                    <td className="px-6 py-5 text-center">
                      <a
                        href={problem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 bg-zinc-800 hover:bg-zinc-700 rounded-2xl transition-all hover:scale-110"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-zinc-500">
          Progress is automatically saved • Click the link icon to open on
          LeetCode
        </div>
      </div>
    </div>
  );
};

export default IntroSheet;
