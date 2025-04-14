import LandingPage from '@/components/LandingPage';

const CppPage = () => {
  return (
    <LandingPage
      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
      title="Master C++ for High Performance"
      subtitle="Dive deep into STL, OOP, and system-level programming with C++."
      codeSnippet={`#include<iostream>
using namespace std;

int main() {
    cout << "Hello, C++ World!" << endl;
    return 0;
}`}
      features={[
        { title: "Object-Oriented & Procedural", icon: "https://img.icons8.com/color/48/000000/object.png" },
        { title: "STL Mastery", icon: "https://img.icons8.com/ios-filled/50/000000/library.png" },
        { title: "High-Performance Apps", icon: "https://img.icons8.com/fluency/48/000000/speed.png" },
      ]}
      ctaLink="/cpp/introduction"
      ctaText="Start Learning C++"
    />
  );
};

export default CppPage;
