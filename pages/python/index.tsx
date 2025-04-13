import LandingPage from '@/components/LandingPage';

const PythonPage = () => {
  return (
    <LandingPage
      icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
      title="Learn Python Effortlessly"
      subtitle="Easy syntax, powerful libraries, perfect for everything from web to AI."
      codeSnippet={`def greet():
    print("Hello, Python World!")
greet()`}
      features={[
        { title: "Beginner Friendly", icon: "https://img.icons8.com/emoji/48/000000/star-emoji.png" },
        { title: "AI & Data Science Ready", icon: "https://img.icons8.com/color/48/000000/artificial-intelligence.png" },
        { title: "Real-World Scripts", icon: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png" },
      ]}
      ctaLink="/python/introduction"
      ctaText="Start Learning Python"
    />
  );
};

export default PythonPage;
