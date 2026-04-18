import React from "react";

const CustomExceptions = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Custom Exceptions in Java</h1>

      {/* Introduction */}

      <p className="text-gray-700 mb-4">
        In Java, exceptions are used to handle errors during program execution.
        Sometimes, built-in exceptions are not enough, so we create our own
        exceptions called <b>Custom Exceptions</b>.
      </p>

      {/* Real Life */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Real-Life Example</h2>

      <p className="text-gray-700 mb-4">
        Imagine a bank system where withdrawing more than balance is not
        allowed. Instead of using general exceptions, we can create a custom
        exception like <b>InsufficientBalanceException</b>.
      </p>

      {/* Definition */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Definition</h2>

      <p className="text-gray-700 mb-4">
        A custom exception is a user-defined exception class that extends the{" "}
        <b>Exception</b> or <b>RuntimeException</b> class.
      </p>

      {/* Syntax */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Syntax</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`class MyException extends Exception {

  public MyException(String message) {
    super(message);
  }

}`}
      </pre>

      {/* Example */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Example</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`class InsufficientBalanceException extends Exception {

  public InsufficientBalanceException(String message) {
    super(message);
  }
}

class Bank {

  void withdraw(int amount) throws InsufficientBalanceException {
    if (amount > 1000) {
      throw new InsufficientBalanceException("Balance too low!");
    } else {
      System.out.println("Withdrawal successful");
    }
  }
}

public class Main {
  public static void main(String[] args) {

    Bank b = new Bank();

    try {
      b.withdraw(2000);
    } catch (InsufficientBalanceException e) {
      System.out.println(e.getMessage());
    }

  }
}`}
      </pre>

      {/* Types */}

      <h2 className="text-xl font-semibold mt-8 mb-4">
        Types of Custom Exceptions
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Type</th>
              <th className="p-3 border">Description</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3 border">Checked Exception</td>
              <td className="p-3 border">
                Extends Exception (must handle using try-catch)
              </td>
            </tr>

            <tr>
              <td className="p-3 border">Unchecked Exception</td>
              <td className="p-3 border">
                Extends RuntimeException (optional handling)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Steps */}

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Steps to Create Custom Exception
      </h2>

      <ol className="list-decimal ml-6 text-gray-700 space-y-2">
        <li>Create a class extending Exception</li>
        <li>Create a constructor</li>
        <li>
          Throw exception using <b>throw</b>
        </li>
        <li>Handle using try-catch</li>
      </ol>

      {/* Mistakes */}

      <h2 className="text-xl font-semibold mt-8 mb-2">Common Mistakes</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Not extending Exception or RuntimeException</li>
        <li>Forgetting to handle checked exceptions</li>
        <li>Using wrong exception type</li>
      </ul>

      {/* Interview */}

      <h2 className="text-xl font-semibold mt-8 mb-2">Interview Questions</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>
          <b>What is a custom exception?</b> → User-defined exception
        </li>
        <li>
          <b>How to create one?</b> → Extend Exception class
        </li>
        <li>
          <b>Difference between checked & unchecked?</b> → Handling required or
          not
        </li>
      </ul>

      {/* Key Points */}

      <h2 className="text-xl font-semibold mt-8 mb-3">Key Points</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Custom exceptions improve code clarity</li>
        <li>Used for specific business logic</li>
        <li>Created by extending Exception classes</li>
        <li>Helps in better error handling</li>
      </ul>

      {/* Memory Trick */}

      <h2 className="text-xl font-semibold mt-8 mb-2">Memory Trick</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`Create → Extend → Throw → Catch`}
      </pre>
    </div>
  );
};

export default CustomExceptions;
