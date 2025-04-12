// import React from 'react';
// import { useRouter } from 'next/router';

// const JavaScriptLanding = () => {
//   const router = useRouter();

//   return (
//     <div className="min-h-screen bg-[#0a0a0a] text-white relative px-6 py-12 flex flex-col items-center justify-center overflow-hidden">

//       {/* Background Grid Pattern */}
//       <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

//       {/* Glowing Background Effects */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 opacity-20 rounded-full blur-[120px] animate-pulse"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 opacity-20 rounded-full blur-[120px] animate-ping"></div>

//       {/* Main Content */}
//       <div className="z-10 text-center max-w-4xl">
//         {/* JS Icon */}
//         <div className="flex justify-center mb-6 text-6xl text-blue-400">
//           <img
//             src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
//             alt="JS Icon"
//             className="w-16 h-16"
//           />
//         </div>

//         {/* Title */}
//         <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent">
//           Dive into JavaScript
//         </h1>

//         {/* Subtext */}
//         <p className="mt-4 text-lg md:text-xl text-gray-400 font-mono whitespace-nowrap overflow-hidden border-r-4 border-blue-400 pr-2 animate-typing">
//           Learn Variables, Functions, DOM, Async, and more...
//         </p>

//         {/* Code Example */}
//         <div className="mt-10 bg-[#121212] rounded-xl text-left p-6 shadow-lg border border-gray-700">
//           <p className="text-sm text-blue-400 mb-2">Example:</p>
//           <pre className="text-green-400 font-mono">
// {`<script>
//   console.log("Hello, JavaScript World!");
// </script>`}
//           </pre>
//         </div>

//         {/* Feature Cards */}
//         <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-300">
//           <div className="bg-[#121212] p-4 rounded-lg border border-blue-500/30 flex flex-col items-center">
//             <img src="https://img.icons8.com/color/48/source-code.png" alt="Code Icon" className="w-8 h-8 mb-2" />
//             <p>Modern ES6+ Syntax</p>
//           </div>
//           <div className="bg-[#121212] p-4 rounded-lg border border-blue-500/30 flex flex-col items-center">
//           <img
//               src="https://img.icons8.com/emoji/48/000000/rocket-emji.png"
//               alt="Async Icon"
//               className="w-8 h-8 mb-2" />
//             <p>Async & Promises</p>
//           </div>
//           <div className="bg-[#121212] p-4 rounded-lg border border-blue-500/30 flex flex-col items-center">
//           <img
//               src="https://img.icons8.com/color/48/000000/javascript--v1.png"
//               alt="JS Icon"
//               className="w-8 h-8 mb-2"
//             />
//             <p>DOM Manipulation</p>
//           </div>
//         </div>

//         {/* CTA Button */}
//         <button
//           type="button"
//           className="mt-12 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition-all duration-300 text-white font-bold rounded-full shadow-lg"
//           onClick={() => router.push('/javascript/js-basics/introduction')}
          
//         >
//           Start Learning JavaScript
//         </button>
//       </div>
//     </div>
//   );
// };

// export default JavaScriptLanding;

import React from 'react';
import { useRouter } from 'next/router';

const JavaScriptLanding = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen text-white relative px-6 py-12 flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a]">
      
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(#111_1px,transparent_1px),linear-gradient(90deg,#111_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] h-[300px] bg-gradient-to-t from-purple-800/40 to-transparent blur-2xl opacity-70" />

      {/* Optional top glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 opacity-10 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="z-10 text-center max-w-3xl">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-300 to-pink-500 text-transparent bg-clip-text">
          Master JavaScript from Scratch
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-gray-400 text-base md:text-lg">
          Variables, Functions, DOM, Async – all in one place.
        </p>

        {/* JS Code Snippet */}
        <div className="mt-8 bg-[#121212] p-5 rounded-lg text-left text-sm font-mono text-green-400 border border-gray-700">
<pre>
{`function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("World"));`}
</pre>
        </div>

        {/* Features */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-300">
          {[
            ['Modern Syntax', 'https://img.icons8.com/color/48/source-code.png'],
            ['Async & Promises', 'https://img.icons8.com/emoji/48/rocket-emji.png'],
            ['DOM Manipulation', 'https://img.icons8.com/color/48/000000/javascript--v1.png'],
          ].map(([title, icon], i) => (
            <div key={i} className="bg-[#121212] p-4 rounded-md w-40 border border-yellow-500/20 flex flex-col items-center">
              <img src={icon} className="w-8 h-8 mb-2" alt={title} />
              <p>{title}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => router.push('/javascript/js-basics/introduction')}
          className="mt-10 px-6 py-3 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full font-semibold hover:scale-105 transition"
        >
          Start Learning JavaScript
        </button>
      </div>
    </div>
  );
};

export default JavaScriptLanding;
