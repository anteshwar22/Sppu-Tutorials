import React from "react";

const OOPConcepts = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* 1. Title */}
      <h1 className="text-4xl font-bold mb-6 text-blue-600">
        Object-Oriented Programming (OOP) Concepts in Java
      </h1>

      {/* 2. Introduction */}
      <p className="text-gray-700 mb-4 leading-relaxed">
        Object-Oriented Programming (OOP) is a programming paradigm that
        organizes code into objects and classes. It helps in building scalable,
        reusable, and maintainable applications.
      </p>

      <p className="text-gray-700 mb-6 leading-relaxed">
        Java is a fully object-oriented language, and understanding OOP is
        essential for real-world software development.
      </p>

      {/* 3. Real-life Analogy */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Real-Life Analogy</h2>

      <p className="text-gray-700 mb-6">
        Think of a car 🚗. A car is an object that has properties (color, speed)
        and behaviors (drive, brake). Similarly, in Java, objects contain data
        and methods.
      </p>

      {/* 4. Definition */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Definition</h2>

      <p className="text-gray-700 mb-6">
        Object-Oriented Programming is a programming approach based on the
        concept of objects that contain data and methods.
      </p>

      {/* 5. Syntax */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Basic Syntax</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`class Student {
    String name;
    int age;

    void display() {
        System.out.println(name + " " + age);
    }
}`}
      </pre>

      {/* 6. Core Concepts */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Core OOP Concepts</h2>

      {/* Encapsulation */}
      <h3 className="text-xl font-semibold mt-4 mb-2">1. Encapsulation</h3>

      <p className="text-gray-700 mb-4">
        Wrapping data and methods into a single unit (class) and restricting
        access.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`class Student {
    private int age;

    public void setAge(int age) {
        this.age = age;
    }

    public int getAge() {
        return age;
    }
}`}
      </pre>

      {/* Inheritance */}
      <h3 className="text-xl font-semibold mt-4 mb-2">2. Inheritance</h3>

      <p className="text-gray-700 mb-4">
        One class acquires properties and behaviors of another class.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`class Animal {
    void sound() {
        System.out.println("Animal sound");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks");
    }
}`}
      </pre>

      {/* Polymorphism */}
      <h3 className="text-xl font-semibold mt-4 mb-2">3. Polymorphism</h3>

      <p className="text-gray-700 mb-4">
        Same method behaves differently based on context.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`class MathOps {
    int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }
}`}
      </pre>

      {/* Abstraction */}
      <h3 className="text-xl font-semibold mt-4 mb-2">4. Abstraction</h3>

      <p className="text-gray-700 mb-4">
        Hiding implementation details and showing only essential features.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`abstract class Shape {
    abstract void draw();
}

class Circle extends Shape {
    void draw() {
        System.out.println("Drawing Circle");
    }
}`}
      </pre>

      {/* Table */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        OOP Concepts Summary Table
      </h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border">Concept</th>
              <th className="p-3 border">Purpose</th>
              <th className="p-3 border">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">Encapsulation</td>
              <td className="p-3 border">Data hiding</td>
              <td className="p-3 border">Getter/Setter</td>
            </tr>
            <tr>
              <td className="p-3 border">Inheritance</td>
              <td className="p-3 border">Code reuse</td>
              <td className="p-3 border">extends keyword</td>
            </tr>
            <tr>
              <td className="p-3 border">Polymorphism</td>
              <td className="p-3 border">Multiple behavior</td>
              <td className="p-3 border">Method overloading</td>
            </tr>
            <tr>
              <td className="p-3 border">Abstraction</td>
              <td className="p-3 border">Hide details</td>
              <td className="p-3 border">abstract class</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Step-by-step */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Step-by-Step Example</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`class Car {
    String color;

    void drive() {
        System.out.println("Car is moving");
    }
}

public class Main {
    public static void main(String[] args) {
        Car c = new Car();
        c.color = "Red";
        c.drive();
    }
}`}
      </pre>

      {/* Mistakes */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Common Mistakes</h2>

      <ul className="list-disc ml-6 text-red-500 mb-6 space-y-2">
        <li>Confusing abstraction with encapsulation</li>
        <li>Incorrect use of inheritance</li>
        <li>Not using access modifiers properly</li>
      </ul>

      {/* Interview */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Interview / Viva Questions
      </h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>
          <b>What is OOP?</b> → Programming using objects
        </li>
        <li>
          <b>Four pillars?</b> → Encapsulation, Inheritance, Polymorphism,
          Abstraction
        </li>
        <li>
          <b>Why OOP?</b> → Reusability and maintainability
        </li>
      </ul>

      {/* Key Points */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Key Points Summary</h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>OOP organizes code using objects</li>
        <li>Improves scalability and reuse</li>
        <li>Core concepts are very important</li>
      </ul>

      {/* Memory Trick */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Memory Trick</h2>

      <p className="text-gray-700 mb-6">
        👉 <b>"EIPA"</b>
        <br />
        Encapsulation → Inheritance → Polymorphism → Abstraction
      </p>
    </div>
  );
};

export default OOPConcepts;
