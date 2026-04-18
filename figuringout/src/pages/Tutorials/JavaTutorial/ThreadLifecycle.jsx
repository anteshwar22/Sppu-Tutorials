import React from "react";

const ThreadLifecycle = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Thread Life Cycle in Java</h1>

      {/* Introduction */}

      <p className="text-gray-700 mb-4">
        The thread life cycle in Java represents the different states a thread
        goes through from creation to termination.
      </p>

      <p className="text-gray-700 mb-4">
        Understanding thread states is important for writing efficient
        multithreaded programs and avoiding issues like deadlocks.
      </p>

      {/* Image Section */}
      <h2 className="text-xl font-semibold mt-6 mb-3">
        Thread Lifecycle Diagram
      </h2>

      {/* States */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Thread States in Java</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>
          <b>New</b> – Thread is created but not started
        </li>
        <li>
          <b>Runnable</b> – Ready to run, waiting for CPU
        </li>
        <li>
          <b>Running</b> – Currently executing
        </li>
        <li>
          <b>Blocked</b> – Waiting for resource/lock
        </li>
        <li>
          <b>Waiting</b> – Waiting for another thread
        </li>
        <li>
          <b>Timed Waiting</b> – Waiting for specific time
        </li>
        <li>
          <b>Terminated</b> – Execution finished
        </li>
      </ul>

      {/* Flow */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Execution Flow</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`New → Runnable → Running → Waiting/Blocked → Terminated`}
      </pre>

      {/* Example */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Example</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`class MyThread extends Thread {

  public void run() {
    System.out.println("Thread Running");
  }
}

public class Main {
  public static void main(String[] args) {

    MyThread t = new MyThread();

    System.out.println(t.getState()); // NEW

    t.start();

    System.out.println(t.getState()); // RUNNABLE

  }
}`}
      </pre>

      {/* Methods */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Important Methods</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>
          <b>start()</b> → Moves to Runnable
        </li>
        <li>
          <b>run()</b> → Executes thread
        </li>
        <li>
          <b>sleep()</b> → Timed waiting
        </li>
        <li>
          <b>wait()</b> → Waiting state
        </li>
        <li>
          <b>notify()</b> → Wake thread
        </li>
      </ul>

      {/* Mistakes */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Common Mistakes</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Calling run() instead of start()</li>
        <li>Ignoring synchronization</li>
        <li>Not understanding thread states</li>
      </ul>

      {/* Interview */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Interview Questions</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>
          <b>How many states?</b> → 6 states
        </li>
        <li>
          <b>Runnable vs Running?</b> → Runnable includes both
        </li>
        <li>
          <b>Can thread restart?</b> → No
        </li>
      </ul>

      {/* Key Points */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Key Points</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Thread goes through multiple states</li>
        <li>Only one state at a time</li>
        <li>Controlled by JVM scheduler</li>
      </ul>

      {/* Memory Trick */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Memory Trick</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`New → Runnable → Running → Waiting → Dead`}
      </pre>
    </div>
  );
};

export default ThreadLifecycle;
