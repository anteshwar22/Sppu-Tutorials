import React from "react";

const Deployment = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Deployment in React</h1>

      <p className="text-gray-700 mb-4">
        Deployment is the process of publishing your React application so users
        can access it on the internet. Before deployment, the React application
        must be built into optimized production files.
      </p>

      {/* Build Step */}

      <h2 className="text-xl font-semibold mt-6 mb-3">
        Step 1: Build the React App
      </h2>

      <p className="text-gray-700 mb-4">
        Run the following command to create a production build:
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`npm run build`}
      </pre>

      <p className="text-gray-700 mb-4">
        This command generates a <b>dist</b> or <b>build</b> folder containing
        optimized files ready for deployment.
      </p>

      {/* Netlify */}

      <h2 className="text-xl font-semibold mt-8 mb-3">Deploy using Netlify</h2>

      <ol className="list-decimal ml-6 text-gray-700 space-y-2">
        <li>Create an account on Netlify.</li>
        <li>Upload your project or connect your GitHub repository.</li>
        <li>
          Select the build command: <b>npm run build</b>.
        </li>
        <li>
          Set the publish folder to <b>dist</b> or <b>build</b>.
        </li>
        <li>Click deploy.</li>
      </ol>

      {/* Vercel */}

      <h2 className="text-xl font-semibold mt-8 mb-3">Deploy using Vercel</h2>

      <ol className="list-decimal ml-6 text-gray-700 space-y-2">
        <li>Create an account on Vercel.</li>
        <li>Import your GitHub repository.</li>
        <li>Vercel automatically detects the React framework.</li>
        <li>Click deploy.</li>
      </ol>

      {/* GitHub Pages */}

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Deploy using GitHub Pages
      </h2>

      <p className="text-gray-700 mb-4">Install the GitHub Pages package:</p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`npm install gh-pages`}
      </pre>

      <p className="text-gray-700 mb-4">
        Add the following scripts to your <b>package.json</b>:
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}`}
      </pre>

      {/* Deployment Platforms */}

      <h2 className="text-xl font-semibold mt-8 mb-4">
        Popular Deployment Platforms
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Platform</th>
              <th className="p-3 border">Description</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3 border">Netlify</td>
              <td className="p-3 border">Simple drag-and-drop deployment</td>
            </tr>

            <tr>
              <td className="p-3 border">Vercel</td>
              <td className="p-3 border">Optimized for React and Next.js</td>
            </tr>

            <tr>
              <td className="p-3 border">GitHub Pages</td>
              <td className="p-3 border">Deploy directly from GitHub</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Key Points */}

      <h2 className="text-xl font-semibold mt-8 mb-3">Key Points</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Always create a production build before deployment.</li>
        <li>Deployment platforms host your React app online.</li>
        <li>Netlify and Vercel are the most popular for React apps.</li>
        <li>Deployment makes your project accessible to users worldwide.</li>
      </ul>
    </div>
  );
};

export default Deployment;
