import React from "react";

const Abstraction = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Abstraction in Java</h1>

      <p className="text-gray-700 mb-4">
        <b>Abstraction</b> is one of the core concepts of Object-Oriented
        Programming (OOP). It means hiding implementation details and showing
        only the essential features of an object.
      </p>

      <p className="text-gray-700 mb-4">
        In simple words, abstraction focuses on <b>what to do</b> instead of{" "}
        <b>how to do</b>.
      </p>

      {/* Real Life Example */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Real-Life Example</h2>

      <p className="text-gray-700 mb-4">
        When you drive a car, you only use the steering, brake, and accelerator.
        You don’t need to know how the engine works internally.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`Car → You use features
Engine → Hidden implementation`}
      </pre>

      {/* How to Achieve */}

      <h2 className="text-xl font-semibold mt-6 mb-2">
        How to Achieve Abstraction in Java
      </h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Using Abstract Classes</li>
        <li>Using Interfaces</li>
      </ul>

      {/* Abstract Class Example */}

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Example using Abstract Class
      </h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`abstract class Animal {

  abstract void sound(); // abstract method

  void sleep() {
    System.out.println("Sleeping...");
  }
}

class Dog extends Animal {

  void sound() {
    System.out.println("Dog barks");
  }
}

public class Main {
  public static void main(String[] args) {
    Animal obj = new Dog();
    obj.sound();
  }
}`}
      </pre>

      {/* Interface Example */}

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Example using Interface
      </h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`interface Animal {
  void sound();
}

class Cat implements Animal {

  public void sound() {
    System.out.println("Cat meows");
  }
}`}
      </pre>

      {/* Benefits */}

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Benefits of Abstraction
      </h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Reduces code complexity</li>
        <li>Improves code readability</li>
        <li>Enhances security by hiding details</li>
        <li>Makes code easier to maintain</li>
      </ul>

      {/* Key Points */}

      <h2 className="text-xl font-semibold mt-8 mb-3">Key Points</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Abstraction hides internal details</li>
        <li>Focuses on what to do, not how</li>
        <li>Implemented using abstract classes and interfaces</li>
        <li>Important concept in OOP</li>
      </ul>
    </div>
  );
};

export default Abstraction;
