import LandingPage from '@/components/LandingPage';

const JavaScriptPage = () => {
  return (
    <LandingPage
      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
      title="Become a JavaScript Pro"
      subtitle="Master the language of the web: DOM, ES6, Async – all covered."
      codeSnippet={`const greet = () => {
  console.log("Hello, JavaScript World!");
};

greet();`}
      features={[
        { title: "Modern Syntax", icon: "https://img.icons8.com/color/48/source-code.png" },
        { title: "Async & Promises", icon: "https://img.icons8.com/emoji/48/rocket-emji.png" },
        { title: "DOM Manipulation", icon: "https://img.icons8.com/color/48/000000/javascript--v1.png" },
      ]}
      ctaLink="/learn-javascript/js-basics/introduction"
      ctaText="Start Learning JavaScript"
    />
  );
};

export default JavaScriptPage;
