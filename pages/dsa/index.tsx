import React from 'react';
import { useRouter } from 'next/router';

const DSALanding = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen text-white relative px-6 py-12 flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a]">
      
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(#111_1px,transparent_1px),linear-gradient(90deg,#111_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] h-[300px] bg-gradient-to-t from-blue-800/40 to-transparent blur-2xl opacity-70" />

      {/* Optional top glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500 opacity-10 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="z-10 text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-300 to-pink-500 text-transparent bg-clip-text">
          Crack DSA with Confidence
        </h1>

        <p className="mt-4 text-gray-400 text-base md:text-lg">
          Arrays, Trees, Graphs, Recursion, DP – all in one place.
        </p>

        {/* DSA Code Snippet */}
        <div className="mt-8 bg-[#121212] p-5 rounded-lg text-left text-sm font-mono text-green-400 border border-gray-700">
<pre>
{`function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}`}
</pre>
        </div>

        {/* Features */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-300">
          {[
            ['Data Structures', 'https://cdn-icons-png.flaticon.com/512/1496/1496421.png'],
            ['Algorithms', 'https://cdn-icons-png.flaticon.com/512/2211/2211784.png'],
            ['Graph Theory', 'https://cdn-icons-png.flaticon.com/512/2942/2942857.png'],
          ].map(([title, icon], i) => (
            <div key={i} className="bg-[#121212] p-4 rounded-md w-40 border border-yellow-500/20 flex flex-col items-center">
              <img src={icon} className="w-8 h-8 mb-2" alt={title} />
              <p>{title}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => router.push('/dsa/introduction')}
          className="mt-10 px-6 py-3 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full font-semibold hover:scale-105 transition" >
          Start Learning DSA
        </button>
      </div>
    </div>
  );
};

export default DSALanding;
