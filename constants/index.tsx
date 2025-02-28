import { Braces, Brackets, Code, LayoutPanelTop, User } from "lucide-react";

export const perks = [
  {
    icon: () => <Brackets />,
    title: "DSA Documentation",
    info: "Master data structures and algorithms with step-by-step explanations and problem-solving techniques.",
  },
  {
    icon: () => <Code />,
    title: "C++ Documentation",
    info: "Learn C++ with in-depth guides, syntax, and best practices for efficient coding.",
  },
  {
    icon: () => <Braces />,
    title: "Java Documentation",
    info: "Explore Java fundamentals, OOP concepts, and coding patterns for scalable applications.",
  },
];

export const features = [
  {
    icon: () => <LayoutPanelTop />,
    title: "Structured Roadmap",
    info: "Step-by-step learning from basics to advanced",
  },
  {
    icon: () => <Code />, // Add missing icon
    title: "Hands-on Practice",
    info: "Real-world coding problems with solutions",
  },
  {
    icon: () => <User />, // Add missing icon
    title: "Optimized for Interviews",
    info: "Covers top FAANG coding patterns",
  },
];

export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
  },
];
