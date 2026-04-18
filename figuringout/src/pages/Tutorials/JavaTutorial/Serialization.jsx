import React from "react";

const Serialization = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Serialization in Java</h1>

      {/* Introduction */}

      <p className="text-gray-700 mb-4">
        Serialization is the process of converting an object into a byte stream
        so that it can be stored in a file or transmitted over a network.
      </p>

      <p className="text-gray-700 mb-4">
        Deserialization is the reverse process — converting byte stream back
        into an object.
      </p>

      {/* Real Life */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Real-Life Analogy</h2>

      <p className="text-gray-700 mb-4">
        Think of serialization like saving a game. Your progress (object) is
        converted into a file and stored. Later, you load it back
        (deserialization).
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`Object → Byte Stream → File
File → Byte Stream → Object`}
      </pre>

      {/* Definition */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Definition</h2>

      <p className="text-gray-700 mb-4">
        Serialization is a mechanism where an object is converted into a stream
        of bytes using the <b>Serializable</b> interface.
      </p>

      {/* Syntax */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Syntax</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`class Student implements Serializable {
  int id;
  String name;
}`}
      </pre>

      {/* Example */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Serialization Example</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`import java.io.*;

class Student implements Serializable {
  int id;
  String name;

  Student(int id, String name) {
    this.id = id;
    this.name = name;
  }
}

public class Main {
  public static void main(String[] args) throws Exception {

    Student s = new Student(1, "Java");

    FileOutputStream fos = new FileOutputStream("file.txt");
    ObjectOutputStream oos = new ObjectOutputStream(fos);

    oos.writeObject(s);
    oos.close();

    System.out.println("Object Serialized");

  }
}`}
      </pre>

      {/* Deserialization */}

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Deserialization Example
      </h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`FileInputStream fis = new FileInputStream("file.txt");
ObjectInputStream ois = new ObjectInputStream(fis);

Student s = (Student) ois.readObject();
ois.close();

System.out.println(s.name);`}
      </pre>

      {/* Transient */}

      <h2 className="text-xl font-semibold mt-8 mb-2">transient Keyword</h2>

      <p className="text-gray-700 mb-4">
        The <b>transient</b> keyword is used to skip variables during
        serialization.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`transient int password;`}
      </pre>

      {/* Table */}

      <h2 className="text-xl font-semibold mt-8 mb-4">
        Serialization vs Deserialization
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Process</th>
              <th className="p-3 border">Meaning</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3 border">Serialization</td>
              <td className="p-3 border">Object → File</td>
            </tr>
            <tr>
              <td className="p-3 border">Deserialization</td>
              <td className="p-3 border">File → Object</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Steps */}

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Steps for Serialization
      </h2>

      <ol className="list-decimal ml-6 text-gray-700 space-y-2">
        <li>Implement Serializable interface</li>
        <li>Create object</li>
        <li>Use ObjectOutputStream</li>
        <li>Write object to file</li>
      </ol>

      {/* Mistakes */}

      <h2 className="text-xl font-semibold mt-8 mb-2">Common Mistakes</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Forgetting Serializable interface</li>
        <li>Not closing streams</li>
        <li>Not handling exceptions</li>
      </ul>

      {/* Interview */}

      <h2 className="text-xl font-semibold mt-8 mb-2">Interview Questions</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>
          <b>What is serialization?</b> → Object to byte stream
        </li>
        <li>
          <b>Why use it?</b> → Storage and transmission
        </li>
        <li>
          <b>What is transient?</b> → Skip variable
        </li>
      </ul>

      {/* Key Points */}

      <h2 className="text-xl font-semibold mt-8 mb-3">Key Points</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Used for saving objects</li>
        <li>Important for networking</li>
        <li>Uses Serializable interface</li>
        <li>Supports data persistence</li>
      </ul>

      {/* Memory Trick */}

      <h2 className="text-xl font-semibold mt-8 mb-2">Memory Trick</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`Serialize = Save Object  
Deserialize = Load Object`}
      </pre>
    </div>
  );
};

export default Serialization;
