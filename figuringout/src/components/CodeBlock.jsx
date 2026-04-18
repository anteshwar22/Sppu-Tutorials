import React, { useEffect, useState } from "react";
import Prism from "prismjs";

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative mb-6 rounded-xl overflow-hidden">
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2">
        <span className="text-xs text-gray-300">Java</span>

        <button
          onClick={handleCopy}
          className="text-xs bg-gray-700 text-white px-3 py-1 rounded-md hover:bg-gray-600"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <pre className="bg-[#1e1e1e] text-sm overflow-x-auto">
        <code className="language-java whitespace-pre p-4 block">{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
