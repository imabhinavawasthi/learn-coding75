import React from 'react';
import { useRouter } from 'next/router';

const LandingPage = ({
  icon,
  title,
  subtitle,
  codeSnippet,
  features,
  ctaLink,
  ctaText = "Start Learning"
}) => {
  const router = useRouter();

  return (
    <div className="min-h-screen text-white relative px-6 py-12 flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a]">
      
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(#111_1px,transparent_1px),linear-gradient(90deg,#111_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] h-[300px] bg-gradient-to-t from-purple-800/40 to-transparent blur-2xl opacity-70" />

      {/* Top Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 opacity-10 rounded-full blur-[120px]" />

      {/* Main Content */}
      <div className="z-10 text-center max-w-3xl">
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <img src={icon} alt="Language Icon" className="w-16 h-16" />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-300 to-pink-500 text-transparent bg-clip-text">
          {title}
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-gray-400 text-base md:text-lg">
          {subtitle}
        </p>

        {/* Code Snippet */}
        <div className="mt-8 bg-[#121212] p-5 rounded-lg text-left text-sm font-mono text-green-400 border border-gray-700 whitespace-pre-wrap">
          <pre>{codeSnippet}</pre>
        </div>

        {/* Features */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-300">
          {features.map((feature, i) => (
            <div key={i} className="bg-[#121212] p-4 rounded-md w-40 border border-yellow-500/20 flex flex-col items-center">
              <img src={feature.icon} className="w-8 h-8 mb-2" alt={feature.title} />
              <p>{feature.title}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <button
          onClick={() => router.push(ctaLink)}
          className="mt-10 px-6 py-3 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full font-semibold hover:scale-105 transition"
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
