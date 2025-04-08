// components/JavaScriptLanding.jsx
import React from 'react';
import { useRouter } from 'next/router';

const JavaScriptLanding = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white relative px-6 py-12 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 opacity-10 rounded-full blur-3xl animate-ping"></div>

      {/* Hero Content */}
      <div className="z-10 text-center max-w-4xl">
        <div className="flex justify-center mb-4">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript Logo"
            className="w-16 h-16"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-white to-purple-500 bg-clip-text text-transparent">
          Dive into JavaScript
        </h1>

        {/* Typing Animation */}
        <p className="mt-4 text-lg md:text-xl text-gray-300 font-mono whitespace-nowrap overflow-hidden border-r-4 border-yellow-400 pr-2 animate-typing">
          Learn Variables, Functions, DOM, Async, and more...
        </p>

        {/* Code Snippet */}
        <div className="mt-10 bg-[#1a1a1a] rounded-xl text-left p-6 shadow-lg border border-gray-700">
          <p className="text-sm text-yellow-400 mb-2">Example:</p>
          <pre className="text-green-400 font-mono">
{`<script>
  console.log("Hello, JavaScript World!");
</script>`}
          </pre>
        </div>

        {/* JS Highlights */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-300">
          <div className="bg-[#1a1a1a] p-4 rounded-lg border border-yellow-500/30 flex flex-col items-center">
          <img
              src="https://img.icons8.com/color/48/source-code.png"
              alt="Code Icon"
              className="w-8 h-8 mb-2"
            />
            <p>Modern ES6+ Syntax</p>
          </div>
          <div className="bg-[#1a1a1a] p-4 rounded-lg border border-yellow-500/30 flex flex-col items-center">
            <img
              src="https://img.icons8.com/emoji/48/000000/rocket-emji.png"
              alt="Async Icon"
              className="w-8 h-8 mb-2"
            />
            <p>Async & Promises</p>
          </div>
          <div className="bg-[#1a1a1a] p-4 rounded-lg border border-yellow-500/30 flex flex-col items-center">
            <img
              src="https://img.icons8.com/color/48/000000/javascript--v1.png"
              alt="JS Icon"
              className="w-8 h-8 mb-2"
            />
            <p>DOM Manipulation</p>
          </div>
        </div>

        {/* CTA Button */}
        <button
          className="mt-12 px-8 py-3 bg-gradient-to-r from-yellow-500 to-purple-600 hover:scale-105 transition-all duration-300 text-white font-bold rounded-full shadow-lg"
          onClick={() => router.push('/javascript/js-basics/introduction')}
        >
          Start Learning JavaScript
        </button>
      </div>
    </div>
  );
};

export default JavaScriptLanding;
