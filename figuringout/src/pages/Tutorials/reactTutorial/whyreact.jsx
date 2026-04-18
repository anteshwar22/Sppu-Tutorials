import React from "react";

const WhyReact = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Why React?</h1>

      <p className="text-gray-700 leading-relaxed">
        React is a powerful JavaScript library used to build fast and
        interactive user interfaces. It allows developers to create reusable
        components and manage application state efficiently.
      </p>

      <ul className="list-disc ml-6 mt-4 text-gray-700">
        <li>Reusable Components</li>
        <li>Virtual DOM for fast rendering</li>
        <li>Strong community support</li>
        <li>Used by big companies like Facebook, Netflix, and Instagram</li>
      </ul>
    </div>
  );
};

export default WhyReact;
