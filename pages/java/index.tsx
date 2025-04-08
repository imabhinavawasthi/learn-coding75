// components/JavaLanding.jsx
import React from 'react';
import { useRouter } from 'next/router';

const JavaLanding = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white relative px-6 py-12 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-600 opacity-10 rounded-full blur-3xl animate-ping"></div>

      {/* Hero Content */}
      <div className="z-10 text-center max-w-4xl">
        <div className="flex justify-center mb-4 text-orange-400 text-6xl">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
            alt="Java Icon"
            className="w-16 h-16"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-400 via-white to-red-500 bg-clip-text text-transparent">
          Dive into Java
        </h1>

        {/* Typing Animation */}
        <p className="mt-4 text-lg md:text-xl text-gray-300 font-mono whitespace-nowrap overflow-hidden border-r-4 border-orange-400 pr-2 animate-typing">
          Learn OOP, JVM, Classes, Exceptions, and more...
        </p>

        {/* Code Snippet */}
        <div className="mt-10 bg-[#1a1a1a] rounded-xl text-left p-6 shadow-lg border border-gray-700">
          <p className="text-sm text-orange-400 mb-2">Example:</p>
          <pre className="text-green-400 font-mono">
{`public class Main {
  public static void main(String[] args) {
    System.out.println("Hello, Java World!");
  }
}`}
          </pre>
        </div>

        {/* Java Highlights */}
<div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-300">
  <div className="bg-[#1a1a1a] p-4 rounded-lg border border-orange-500/30 flex flex-col items-center">
    <img
      src="https://img.icons8.com/fluency/48/000000/settings.png"
      alt="OOP Icon"
      className="w-8 h-8 mb-2"
    />
    <p>Object-Oriented Programming</p>
  </div>
  <div className="bg-[#1a1a1a] p-4 rounded-lg border border-orange-500/30 flex flex-col items-center">
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
    alt="JVM Icon"
    className="w-10 h-10 mb-2"
  />
    <p>Platform Independent (JVM)</p>
  </div>
  <div className="bg-[#1a1a1a] p-4 rounded-lg border border-orange-500/30 flex flex-col items-center">
    <img
      src="https://img.icons8.com/emoji/48/000000/rocket-emji.png"
      alt="Rocket Icon"
      className="w-8 h-8 mb-2"
    />
    <p>Robust & Secure</p>
  </div>
</div>


        {/* CTA Button */}
        <button
          type="button"
          className="mt-12 px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 hover:scale-105 transition-all duration-300 text-white font-bold rounded-full shadow-lg"
          onClick={() => router.push('/java/java-syllabus')}
        >
          Start Learning Java
        </button>
      </div>
    </div>
  );
};

export default JavaLanding;
