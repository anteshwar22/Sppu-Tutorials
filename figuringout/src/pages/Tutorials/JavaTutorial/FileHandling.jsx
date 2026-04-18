import React from "react";

const FileHandling = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">File Handling in Java</h1>

      {/* Introduction */}

      <p className="text-gray-700 mb-4">
        File handling in Java is used to create, read, write, and delete files.
        It allows programs to store data permanently instead of losing it after
        execution.
      </p>

      {/* Real Life */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Real-Life Example</h2>

      <p className="text-gray-700 mb-4">
        Think of a file like a notebook. You can write notes, read them later,
        and update or delete them whenever needed.
      </p>

      {/* Definition */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Definition</h2>

      <p className="text-gray-700 mb-4">
        File handling in Java is done using classes from the <b>java.io</b>
        and <b>java.nio</b> packages.
      </p>

      {/* File Class */}

      <h2 className="text-xl font-semibold mt-6 mb-2">File Class</h2>

      <p className="text-gray-700 mb-4">
        The File class is used to create and manage files.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`import java.io.File;

File file = new File("test.txt");`}
      </pre>

      {/* Create File */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Creating a File</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`import java.io.File;
import java.io.IOException;

public class Main {
  public static void main(String[] args) throws IOException {

    File file = new File("test.txt");

    if (file.createNewFile()) {
      System.out.println("File created");
    } else {
      System.out.println("File already exists");
    }

  }
}`}
      </pre>

      {/* Write File */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Writing to a File</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`import java.io.FileWriter;
import java.io.IOException;

FileWriter writer = new FileWriter("test.txt");
writer.write("Hello Java");
writer.close();`}
      </pre>

      {/* Read File */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Reading a File</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`import java.io.File;
import java.util.Scanner;

File file = new File("test.txt");
Scanner sc = new Scanner(file);

while (sc.hasNextLine()) {
  System.out.println(sc.nextLine());
}
sc.close();`}
      </pre>

      {/* Delete File */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Deleting a File</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`File file = new File("test.txt");

if (file.delete()) {
  System.out.println("File deleted");
}`}
      </pre>

      {/* Types */}

      <h2 className="text-xl font-semibold mt-8 mb-4">File Handling Classes</h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Class</th>
              <th className="p-3 border">Purpose</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3 border">File</td>
              <td className="p-3 border">Create and manage files</td>
            </tr>
            <tr>
              <td className="p-3 border">FileWriter</td>
              <td className="p-3 border">Write data to file</td>
            </tr>
            <tr>
              <td className="p-3 border">Scanner</td>
              <td className="p-3 border">Read data from file</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Steps */}

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Steps in File Handling
      </h2>

      <ol className="list-decimal ml-6 text-gray-700 space-y-2">
        <li>Create file using File class</li>
        <li>Write data using FileWriter</li>
        <li>Read data using Scanner</li>
        <li>Close resources</li>
      </ol>

      {/* Mistakes */}

      <h2 className="text-xl font-semibold mt-8 mb-2">Common Mistakes</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Forgetting to close file</li>
        <li>Not handling exceptions</li>
        <li>Wrong file path</li>
      </ul>

      {/* Interview */}

      <h2 className="text-xl font-semibold mt-8 mb-2">Interview Questions</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>
          <b>What is File class?</b> → Used to create/manage files
        </li>
        <li>
          <b>How to read file?</b> → Using Scanner
        </li>
        <li>
          <b>How to write file?</b> → Using FileWriter
        </li>
      </ul>

      {/* Key Points */}

      <h2 className="text-xl font-semibold mt-8 mb-3">Key Points</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>File handling allows permanent data storage</li>
        <li>Java uses java.io package</li>
        <li>Always close file resources</li>
        <li>Handle exceptions properly</li>
      </ul>

      {/* Memory Trick */}

      <h2 className="text-xl font-semibold mt-8 mb-2">Memory Trick</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`Create → Write → Read → Delete`}
      </pre>
    </div>
  );
};

export default FileHandling;
