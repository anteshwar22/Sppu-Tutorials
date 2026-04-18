import React from "react";

const IteratorComparable = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* 1. Title */}
      <h1 className="text-4xl font-bold mb-6 text-blue-600">
        Iterator and Comparable in Java
      </h1>

      {/* 2. Introduction */}
      <p className="text-gray-700 mb-4 leading-relaxed">
        Iterator and Comparable are important concepts in Java Collections.
        Iterator is used to traverse elements, while Comparable is used to sort
        objects.
      </p>

      <p className="text-gray-700 mb-6 leading-relaxed">
        These concepts are widely used when working with lists, sets, and custom
        objects.
      </p>

      {/* 3. Real-life Analogy */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Real-Life Analogy</h2>

      <p className="text-gray-700 mb-6">
        👉 Iterator is like flipping pages of a book 📖 one by one.
        <br />
        👉 Comparable is like arranging books in order (by name, price, etc.).
      </p>

      {/* ================= Iterator ================= */}

      <h2 className="text-2xl font-semibold mt-6 mb-3">Iterator in Java</h2>

      {/* Definition */}
      <p className="text-gray-700 mb-4">
        Iterator is an interface used to traverse elements in a collection one
        by one.
      </p>

      {/* Syntax */}
      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`Iterator<Integer> it = list.iterator();

while(it.hasNext()) {
    System.out.println(it.next());
}`}
      </pre>

      {/* Example */}
      <h3 className="font-semibold mb-2">Example</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`import java.util.*;

List<Integer> list = new ArrayList<>();
list.add(10);
list.add(20);

Iterator<Integer> it = list.iterator();

while(it.hasNext()) {
    System.out.println(it.next());
}`}
      </pre>

      {/* Features */}
      <h3 className="text-xl font-semibold mt-4 mb-2">
        Key Methods of Iterator
      </h3>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>hasNext() → checks if next element exists</li>
        <li>next() → returns next element</li>
        <li>remove() → removes element</li>
      </ul>

      {/* ================= Comparable ================= */}

      <h2 className="text-2xl font-semibold mt-6 mb-3">Comparable in Java</h2>

      {/* Definition */}
      <p className="text-gray-700 mb-4">
        Comparable is an interface used to define natural ordering of objects.
      </p>

      {/* Syntax */}
      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`class Student implements Comparable<Student> {
    int age;

    public int compareTo(Student s) {
        return this.age - s.age;
    }
}`}
      </pre>

      {/* Example */}
      <h3 className="font-semibold mb-2">Example</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`import java.util.*;

class Student implements Comparable<Student> {
    int age;

    Student(int age) {
        this.age = age;
    }

    public int compareTo(Student s) {
        return this.age - s.age;
    }
}

List<Student> list = new ArrayList<>();
list.add(new Student(20));
list.add(new Student(18));

Collections.sort(list);`}
      </pre>

      {/* 9. Table */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Iterator vs Comparable
      </h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border">Feature</th>
              <th className="p-3 border">Iterator</th>
              <th className="p-3 border">Comparable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">Purpose</td>
              <td className="p-3 border">Traversal</td>
              <td className="p-3 border">Sorting</td>
            </tr>
            <tr>
              <td className="p-3 border">Package</td>
              <td className="p-3 border">java.util</td>
              <td className="p-3 border">java.lang</td>
            </tr>
            <tr>
              <td className="p-3 border">Method</td>
              <td className="p-3 border">hasNext(), next()</td>
              <td className="p-3 border">compareTo()</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Step-by-step */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Step-by-Step Usage</h2>

      <ol className="list-decimal ml-6 text-gray-700 mb-6 space-y-2">
        <li>Create collection (List/Set)</li>
        <li>Use Iterator to traverse</li>
        <li>Implement Comparable for sorting</li>
        <li>Use Collections.sort()</li>
      </ol>

      {/* Mistakes */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Common Mistakes</h2>

      <ul className="list-disc ml-6 text-red-500 mb-6 space-y-2">
        <li>Not implementing compareTo properly</li>
        <li>Confusing Comparable with Comparator</li>
        <li>Using iterator incorrectly in loops</li>
      </ul>

      {/* Interview */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Interview / Viva Questions
      </h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>
          <b>What is Iterator?</b> → Used for traversal
        </li>
        <li>
          <b>What is Comparable?</b> → Used for sorting
        </li>
        <li>
          <b>Difference between Comparable and Comparator?</b> → Internal vs
          external sorting
        </li>
      </ul>

      {/* Key Points */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Key Points Summary</h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>Iterator is for traversal</li>
        <li>Comparable is for sorting</li>
        <li>Both are part of Collections usage</li>
      </ul>

      {/* Memory Trick */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Memory Trick</h2>

      <p className="text-gray-700 mb-6">
        👉 <b>"Iterator = Move, Comparable = Order"</b>
      </p>
    </div>
  );
};

export default IteratorComparable;
