import React from "react";

const APIFetching = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">API Fetching in React</h1>

      <p className="text-gray-700 mb-4">
        API Fetching is used to retrieve data from a server. In React, APIs are
        commonly called inside the <b>useEffect</b> hook so the request runs
        when the component loads.
      </p>

      <p className="text-gray-700 mb-4">
        Two popular ways to fetch data in React are:
      </p>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>fetch() – built-in JavaScript API</li>
        <li>Axios – third-party HTTP library</li>
      </ul>

      {/* FETCH SECTION */}

      <h2 className="text-xl font-semibold mt-8 mb-3">Fetch API</h2>

      <p className="text-gray-700 mb-4">
        The <b>fetch()</b> method is a built-in JavaScript function used to make
        HTTP requests such as GET, POST, PUT, and DELETE.
      </p>

      <h3 className="font-semibold mt-4 mb-2">Example using Fetch</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`import React, { useEffect, useState } from "react";

function FetchExample() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error(error));

  }, []);

  return (
    <div>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}`}
      </pre>

      <h3 className="font-semibold mt-6 mb-2">Fetch using Async/Await</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`useEffect(() => {

  const getUsers = async () => {

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();

      setUsers(data);

    } catch (error) {
      console.log(error);
    }

  };

  getUsers();

}, []);`}
      </pre>

      {/* AXIOS SECTION */}

      <h2 className="text-xl font-semibold mt-8 mb-3">Axios</h2>

      <p className="text-gray-700 mb-4">
        <b>Axios</b> is a popular HTTP client library used to make API requests.
        It simplifies requests and automatically converts responses to JSON.
      </p>

      <h3 className="font-semibold mt-4 mb-2">Install Axios</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`npm install axios`}
      </pre>

      <h3 className="font-semibold mt-6 mb-2">Example using Axios</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`import React, { useEffect, useState } from "react";
import axios from "axios";

function AxiosExample() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));

  }, []);

  return (
    <div>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}`}
      </pre>

      {/* COMPARISON TABLE */}

      <h2 className="text-xl font-semibold mt-8 mb-4">Fetch vs Axios</h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Feature</th>
              <th className="p-3 border">Fetch</th>
              <th className="p-3 border">Axios</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3 border">Installation</td>
              <td className="p-3 border">Built into JavaScript</td>
              <td className="p-3 border">Requires installation</td>
            </tr>

            <tr>
              <td className="p-3 border">JSON Handling</td>
              <td className="p-3 border">Manual conversion</td>
              <td className="p-3 border">Automatic conversion</td>
            </tr>

            <tr>
              <td className="p-3 border">Error Handling</td>
              <td className="p-3 border">More manual work</td>
              <td className="p-3 border">Simpler handling</td>
            </tr>

            <tr>
              <td className="p-3 border">Popularity</td>
              <td className="p-3 border">Native JavaScript</td>
              <td className="p-3 border">Very popular library</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* KEY POINTS */}

      <h2 className="text-xl font-semibold mt-8 mb-3">Key Points</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>API requests are usually placed inside useEffect.</li>
        <li>useState stores the fetched data.</li>
        <li>Fetch is built-in JavaScript.</li>
        <li>Axios provides cleaner syntax and automatic JSON handling.</li>
      </ul>
    </div>
  );
};

export default APIFetching;
