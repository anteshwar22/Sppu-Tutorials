import React from "react";

const FetchAPI = () => {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600">
        Fetch API in JavaScript
      </h1>

      {/* Intro */}
      <p className="text-gray-700 leading-relaxed">
        The Fetch API is used to make HTTP requests (GET, POST, PUT, DELETE) to
        interact with servers and APIs. It returns a promise.
      </p>

      {/* GET Request */}
      <div>
        <h2 className="text-xl font-semibold mb-2">1. GET Request</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));`}
          </pre>
        </div>
      </div>

      {/* POST Request */}
      <div>
        <h2 className="text-xl font-semibold mb-2">2. POST Request</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Hello",
    body: "This is a post"
  })
})
.then(res => res.json())
.then(data => console.log(data));`}
          </pre>
        </div>
      </div>

      {/* Async/Await */}
      <div>
        <h2 className="text-xl font-semibold mb-2">3. Using Async/Await</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`async function getData() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

getData();`}
          </pre>
        </div>
      </div>

      {/* Notes */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Key Points</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Fetch returns a promise</li>
          <li>Use .json() to parse response</li>
          <li>Handle errors using catch or try-catch</li>
        </ul>
      </div>

      {/* Tip */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="font-semibold">Pro Tip:</p>
        <p className="text-gray-700">
          Fetch API is used to connect your frontend (React) with backend
          (Spring Boot).
        </p>
      </div>
    </div>
  );
};

export default FetchAPI;
