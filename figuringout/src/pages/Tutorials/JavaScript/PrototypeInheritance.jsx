import React from "react";

const PrototypeInheritance = () => {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600">
        Prototype & Inheritance in JavaScript
      </h1>

      {/* Intro */}
      <p className="text-gray-700 leading-relaxed">
        JavaScript uses prototypes to implement inheritance. Every object has a
        hidden property called <b>[[Prototype]]</b> which links to another
        object.
      </p>

      {/* Prototype Example */}
      <div>
        <h2 className="text-xl font-semibold mb-2">1. Prototype Example</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`let obj = {
  name: "Anteshwar"
};

console.log(obj.__proto__); // Object prototype`}
          </pre>
        </div>
      </div>

      {/* Inheritance */}
      <div>
        <h2 className="text-xl font-semibold mb-2">2. Inheritance Example</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`let parent = {
  greet: function() {
    console.log("Hello from parent");
  }
};

let child = {};

child.__proto__ = parent;

child.greet(); // Hello from parent`}
          </pre>
        </div>
      </div>

      {/* Constructor Function */}
      <div>
        <h2 className="text-xl font-semibold mb-2">3. Constructor Function</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log("Hello " + this.name);
};

let user = new Person("Anteshwar");
user.sayHello();`}
          </pre>
        </div>
      </div>

      {/* Key Points */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Key Points</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Every object has a prototype</li>
          <li>Prototype enables inheritance</li>
          <li>Objects can access parent properties</li>
        </ul>
      </div>

      {/* Tip */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="font-semibold">Pro Tip:</p>
        <p className="text-gray-700">
          Modern JavaScript uses <b>class</b> syntax, but internally it still
          works using prototypes.
        </p>
      </div>
    </div>
  );
};

export default PrototypeInheritance;
