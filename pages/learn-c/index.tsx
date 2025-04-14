import LandingPage from '@/components/LandingPage';

const CPage = () => {
  return (
    <LandingPage
      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
      title="Learn C Programming"
      subtitle="Pointers, Memory Management, Functions – all at your fingertips."
      codeSnippet={`#include <stdio.h>

int main() {
  printf("Hello, C World!");
  return 0;
}`}
      features={[
        { title: "Low-level Memory Access", icon: "https://img.icons8.com/color/48/000000/memory-slot.png" },
        { title: "Fast Execution", icon: "https://img.icons8.com/color/48/000000/speed.png" },
        { title: "Structured Language", icon: "https://img.icons8.com/fluency/48/000000/flow-chart.png" }
      ]}
      ctaLink="/learn-c/introduction"
      ctaText="Start Learning C"
    />
  );
};

export default CPage;
