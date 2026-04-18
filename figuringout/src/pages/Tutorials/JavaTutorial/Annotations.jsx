import React from "react";

const Annotations = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* 1. Title */}
      <h1 className="text-4xl font-bold mb-6 text-blue-600">
        Annotations in Java
      </h1>

      {/* 2. Introduction */}
      <p className="text-gray-700 mb-4 leading-relaxed">
        Annotations in Java are used to provide additional information about the
        code. They do not change the logic of the program but help the compiler
        and frameworks understand how the code should behave.
      </p>

      <p className="text-gray-700 mb-6 leading-relaxed">
        Annotations are widely used in modern Java frameworks like Spring Boot
        for configuration and dependency injection.
      </p>

      {/* 3. Real-life Analogy */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Real-Life Analogy</h2>

      <p className="text-gray-700 mb-6">
        Think of annotations like labels on files 📁. The label doesn’t change
        the file, but it tells you what the file contains. Similarly,
        annotations give extra information about code.
      </p>

      {/* 4. Definition */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Definition</h2>

      <p className="text-gray-700 mb-6">
        Annotations are metadata added to Java code to provide instructions to
        the compiler or runtime environment.
      </p>

      {/* 5. Syntax */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Syntax</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`@AnnotationName
class MyClass {
}`}
      </pre>

      {/* 6. Types */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Types of Annotations</h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>Built-in Annotations</li>
        <li>Custom Annotations</li>
      </ul>

      {/* Built-in */}
      <h3 className="text-xl font-semibold mt-4 mb-2">
        1. Built-in Annotations
      </h3>

      <p className="text-gray-700 mb-4">
        Java provides some predefined annotations.
      </p>

      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li>@Override</li>
        <li>@Deprecated</li>
        <li>@SuppressWarnings</li>
      </ul>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`class Parent {
    void show() {}
}

class Child extends Parent {
    @Override
    void show() {
        System.out.println("Overridden Method");
    }
}`}
      </pre>

      {/* Custom */}
      <h3 className="text-xl font-semibold mt-4 mb-2">2. Custom Annotations</h3>

      <p className="text-gray-700 mb-4">
        You can create your own annotations in Java.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`@interface MyAnnotation {
    String value();
}

@MyAnnotation(value = "Example")
class Test {}`}
      </pre>

      {/* 7. Examples */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Examples</h2>

      <h3 className="font-semibold mb-2">Example 1: @Override</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`@Override
public String toString() {
    return "Object";
}`}
      </pre>

      <h3 className="font-semibold mb-2">Example 2: @Deprecated</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`@Deprecated
void oldMethod() {}`}
      </pre>

      {/* 9. Table */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Common Annotations</h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border">Annotation</th>
              <th className="p-3 border">Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">@Override</td>
              <td className="p-3 border">Ensures method overriding</td>
            </tr>
            <tr>
              <td className="p-3 border">@Deprecated</td>
              <td className="p-3 border">Marks old methods</td>
            </tr>
            <tr>
              <td className="p-3 border">@SuppressWarnings</td>
              <td className="p-3 border">Ignores warnings</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 10. Step-by-step */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Step-by-Step (Custom Annotation)
      </h2>

      <ol className="list-decimal ml-6 text-gray-700 mb-6 space-y-2">
        <li>Create annotation using @interface</li>
        <li>Define elements (methods)</li>
        <li>Apply annotation to class/method</li>
        <li>Use it with reflection (optional)</li>
      </ol>

      {/* 11. Mistakes */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Common Mistakes</h2>

      <ul className="list-disc ml-6 text-red-500 mb-6 space-y-2">
        <li>Forgetting @ symbol</li>
        <li>Wrong usage of @Override</li>
        <li>Not understanding annotation purpose</li>
      </ul>

      {/* 12. Interview */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Interview / Viva Questions
      </h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>
          <b>What are annotations?</b> → Metadata for code
        </li>
        <li>
          <b>Common annotations?</b> → @Override, @Deprecated
        </li>
        <li>
          <b>Can we create custom annotations?</b> → Yes
        </li>
      </ul>

      {/* 13. Key Points */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Key Points Summary</h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>Annotations provide extra information</li>
        <li>Used by compiler and frameworks</li>
        <li>Do not change program logic</li>
      </ul>

      {/* 14. Memory Trick */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Memory Trick</h2>

      <p className="text-gray-700 mb-6">
        👉 <b>"Annotations = Code Labels"</b>
      </p>
    </div>
  );
};

export default Annotations;
