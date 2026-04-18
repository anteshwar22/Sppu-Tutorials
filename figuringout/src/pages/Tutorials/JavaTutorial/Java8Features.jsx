import React from "react";

const Java8Features = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Java 8 Features</h1>

      {/* Introduction */}

      <p className="text-gray-700 mb-4">
        Java 8 introduced powerful new features that changed the way developers
        write Java code. It made code more <b>concise</b>, <b>functional</b>,
        and <b>readable</b>.
      </p>

      <p className="text-gray-700 mb-4">
        It is one of the most important versions of Java used widely in modern
        applications.
      </p>

      {/* Real-Life Analogy */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Real-Life Analogy</h2>

      <p className="text-gray-700 mb-4">
        Think of Java before version 8 like writing a long paragraph manually.
        Java 8 is like using shortcuts and tools that make writing faster and
        cleaner.
      </p>

      {/* Key Features */}

      <h2 className="text-xl font-semibold mt-6 mb-4">
        Important Features of Java 8
      </h2>

      {/* Lambda */}

      <h3 className="text-lg font-semibold mt-4">1. Lambda Expressions</h3>

      <p className="text-gray-700 mb-4">
        Lambda expressions allow you to write functions in a shorter way.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`// Before Java 8
Runnable r = new Runnable() {
  public void run() {
    System.out.println("Hello");
  }
};

// Java 8
Runnable r = () -> System.out.println("Hello");`}
      </pre>

      {/* Functional Interface */}

      <h3 className="text-lg font-semibold mt-4">2. Functional Interface</h3>

      <p className="text-gray-700 mb-4">
        An interface with only one abstract method is called a functional
        interface.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`@FunctionalInterface
interface MyInterface {
  void show();
}`}
      </pre>

      {/* Stream API */}

      <h3 className="text-lg font-semibold mt-4">3. Stream API</h3>

      <p className="text-gray-700 mb-4">
        Stream API is used to process collections in a functional way.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`List<Integer> list = Arrays.asList(1,2,3,4);

list.stream()
    .filter(n -> n % 2 == 0)
    .forEach(System.out::println);`}
      </pre>

      {/* Default Methods */}

      <h3 className="text-lg font-semibold mt-4">4. Default Methods</h3>

      <p className="text-gray-700 mb-4">
        Interfaces can now have methods with implementation using the default
        keyword.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`interface Test {
  default void show() {
    System.out.println("Default method");
  }
}`}
      </pre>

      {/* Method Reference */}

      <h3 className="text-lg font-semibold mt-4">5. Method References</h3>

      <p className="text-gray-700 mb-4">
        Method references provide a shorthand way to call methods.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`list.forEach(System.out::println);`}
      </pre>

      {/* Date API */}

      <h3 className="text-lg font-semibold mt-4">6. Date and Time API</h3>

      <p className="text-gray-700 mb-4">
        Java 8 introduced a new Date and Time API in the java.time package.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`LocalDate date = LocalDate.now();
System.out.println(date);`}
      </pre>

      {/* Optional */}

      <h3 className="text-lg font-semibold mt-4">7. Optional Class</h3>

      <p className="text-gray-700 mb-4">
        Optional is used to avoid NullPointerException.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`Optional<String> name = Optional.of("Java");
System.out.println(name.get());`}
      </pre>

      {/* Table */}

      <h2 className="text-xl font-semibold mt-8 mb-4">Feature Summary</h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Feature</th>
              <th className="p-3 border">Purpose</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3 border">Lambda</td>
              <td className="p-3 border">Shorter code</td>
            </tr>
            <tr>
              <td className="p-3 border">Stream API</td>
              <td className="p-3 border">Data processing</td>
            </tr>
            <tr>
              <td className="p-3 border">Optional</td>
              <td className="p-3 border">Avoid null errors</td>
            </tr>
            <tr>
              <td className="p-3 border">Default Method</td>
              <td className="p-3 border">Method in interface</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mistakes */}

      <h2 className="text-xl font-semibold mt-8 mb-2">Common Mistakes</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Overusing streams unnecessarily</li>
        <li>Confusing lambda syntax</li>
        <li>Ignoring Optional usage</li>
      </ul>

      {/* Interview */}

      <h2 className="text-xl font-semibold mt-8 mb-2">Interview Questions</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>
          <b>What are Java 8 features?</b> → Lambda, Stream, Optional
        </li>
        <li>
          <b>What is Lambda?</b> → Short function syntax
        </li>
        <li>
          <b>Why Stream API?</b> → Functional data processing
        </li>
      </ul>

      {/* Key Points */}

      <h2 className="text-xl font-semibold mt-8 mb-3">Key Points</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Java 8 introduced functional programming</li>
        <li>Lambda reduces code size</li>
        <li>Stream API simplifies data operations</li>
        <li>Optional avoids null errors</li>
      </ul>

      {/* Memory Trick */}

      <h2 className="text-xl font-semibold mt-8 mb-2">Memory Trick</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`Lambda → Stream → Optional → Default`}
      </pre>
    </div>
  );
};

export default Java8Features;
