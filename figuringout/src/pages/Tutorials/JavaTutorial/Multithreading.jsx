import React from "react";

const Multithreading = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Multithreading in Java</h1>

      {/* Introduction */}

      <p className="text-gray-700 mb-4">
        Multithreading is a feature in Java that allows multiple threads to run
        concurrently. It helps improve performance by executing multiple tasks
        at the same time.
      </p>

      <p className="text-gray-700 mb-4">
        A thread is a lightweight process that shares resources with other
        threads.
      </p>

      {/* Real Life */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Real-Life Analogy</h2>

      <p className="text-gray-700 mb-4">
        Think of a chef cooking multiple dishes at once — chopping vegetables,
        boiling water, and frying at the same time.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`Single Thread → One task at a time
Multithreading → Multiple tasks simultaneously`}
      </pre>

      {/* Definition */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Definition</h2>

      <p className="text-gray-700 mb-4">
        Multithreading is the ability of a program to execute multiple threads
        concurrently within a single process.
      </p>

      {/* Ways */}

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Ways to Create Threads
      </h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>By extending Thread class</li>
        <li>By implementing Runnable interface</li>
      </ul>

      {/* Thread Example */}

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Example using Thread Class
      </h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`class MyThread extends Thread {

  public void run() {
    System.out.println("Thread is running");
  }
}

public class Main {
  public static void main(String[] args) {

    MyThread t = new MyThread();
    t.start();

  }
}`}
      </pre>

      {/* Runnable Example */}

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Example using Runnable Interface
      </h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`class MyRunnable implements Runnable {

  public void run() {
    System.out.println("Runnable thread running");
  }
}

public class Main {
  public static void main(String[] args) {

    Thread t = new Thread(new MyRunnable());
    t.start();

  }
}`}
      </pre>

      {/* Lifecycle */}

      <h2 className="text-xl font-semibold mt-8 mb-4">Thread Life Cycle</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`New → Runnable → Running → Waiting → Terminated`}
      </pre>

      {/* Important Methods */}

      <h2 className="text-xl font-semibold mt-8 mb-2">Important Methods</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>
          <b>start()</b> → Starts thread
        </li>
        <li>
          <b>run()</b> → Executes code
        </li>
        <li>
          <b>sleep()</b> → Pause thread
        </li>
        <li>
          <b>join()</b> → Wait for thread
        </li>
      </ul>

      {/* Synchronization */}

      <h2 className="text-xl font-semibold mt-8 mb-2">Synchronization</h2>

      <p className="text-gray-700 mb-4">
        Synchronization is used to control access to shared resources to avoid
        data inconsistency.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`synchronized void display() {
  // critical section
}`}
      </pre>

      {/* Mistakes */}

      <h2 className="text-xl font-semibold mt-8 mb-2">Common Mistakes</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Using run() instead of start()</li>
        <li>Not handling thread safety</li>
        <li>Ignoring synchronization</li>
      </ul>

      {/* Interview */}

      <h2 className="text-xl font-semibold mt-8 mb-2">Interview Questions</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>
          <b>What is thread?</b> → Lightweight process
        </li>
        <li>
          <b>Thread vs Process?</b> → Shared memory
        </li>
        <li>
          <b>start() vs run()?</b> → start creates thread
        </li>
      </ul>

      {/* Key Points */}

      <h2 className="text-xl font-semibold mt-8 mb-3">Key Points</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Improves performance</li>
        <li>Supports parallel execution</li>
        <li>Requires synchronization</li>
        <li>Used in real-world systems</li>
      </ul>

      {/* Memory Trick */}

      <h2 className="text-xl font-semibold mt-8 mb-2">Memory Trick</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`Thread = Parallel + Shared Memory`}
      </pre>
    </div>
  );
};

export default Multithreading;
