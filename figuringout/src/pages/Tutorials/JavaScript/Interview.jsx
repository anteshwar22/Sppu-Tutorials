import React from "react";

const JSInterviewQuestions = () => {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600">
        JavaScript Interview Questions
      </h1>

      {/* Q1 */}
      <div>
        <h2 className="text-xl font-semibold mb-2">1. What is JavaScript?</h2>
        <p className="text-gray-700">
          JavaScript is a scripting language used to create dynamic and
          interactive web applications.
        </p>
      </div>

      {/* Q2 */}
      <div>
        <h2 className="text-xl font-semibold mb-2">
          2. Difference between var, let, const?
        </h2>
        <p className="text-gray-700">
          var is function-scoped, let and const are block-scoped. const cannot
          be reassigned.
        </p>
      </div>

      {/* Q3 */}
      <div>
        <h2 className="text-xl font-semibold mb-2">3. What is closure?</h2>
        <p className="text-gray-700">
          A closure is a function that remembers variables from its outer scope
          even after execution.
        </p>
      </div>

      {/* Q4 */}
      <div>
        <h2 className="text-xl font-semibold mb-2">4. What is this keyword?</h2>
        <p className="text-gray-700">
          this refers to the object that is currently calling the function.
        </p>
      </div>

      {/* Q5 */}
      <div>
        <h2 className="text-xl font-semibold mb-2">
          5. Difference between == and ===?
        </h2>
        <p className="text-gray-700">
          == checks value, === checks value and type.
        </p>
      </div>

      {/* Q6 */}
      <div>
        <h2 className="text-xl font-semibold mb-2">6. What is a Promise?</h2>
        <p className="text-gray-700">
          A Promise represents a future result of an asynchronous operation.
        </p>
      </div>

      {/* Q7 */}
      <div>
        <h2 className="text-xl font-semibold mb-2">7. What is Async/Await?</h2>
        <p className="text-gray-700">
          Async/Await is a modern way to handle asynchronous code using
          promises.
        </p>
      </div>

      {/* Q8 */}
      <div>
        <h2 className="text-xl font-semibold mb-2">8. What is event loop?</h2>
        <p className="text-gray-700">
          The event loop handles asynchronous operations and executes them after
          the call stack is empty.
        </p>
      </div>

      {/* Q9 */}
      <div>
        <h2 className="text-xl font-semibold mb-2">9. What is hoisting?</h2>
        <p className="text-gray-700">
          Hoisting is JavaScript's default behavior of moving declarations to
          the top.
        </p>
      </div>

      {/* Q10 */}
      <div>
        <h2 className="text-xl font-semibold mb-2">10. What is DOM?</h2>
        <p className="text-gray-700">
          DOM is the structure of a web page that JavaScript can manipulate.
        </p>
      </div>

      {/* Tip */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="font-semibold">Pro Tip:</p>
        <p className="text-gray-700">
          Focus on concepts + examples — interviewers test understanding, not
          memorization.
        </p>
      </div>
    </div>
  );
};

export default JSInterviewQuestions;
