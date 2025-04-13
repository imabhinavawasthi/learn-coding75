import LandingPage from '@/components/LandingPage'
import React from 'react'

const index = () => {
  return (
    <>
     <LandingPage 
     icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
     title="Master Java with Ease"
     subtitle="OOP, JVM, Classes, Exceptions – all in one place."
     codeSnippet={`public class Main {
    public static void main(String[] args) {
      System.out.println("Hello, Java World!");
    }
   }`}
     features={[
       { title: "Object-Oriented Programming", icon: "https://img.icons8.com/fluency/48/000000/settings.png" },
       { title: "Platform Independent (JVM)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
       { title: "Robust & Secure", icon: "https://img.icons8.com/emoji/48/000000/rocket-emji.png" }
     ]}
     ctaLink="/java/java-syllabus"
     ctaText="Start Learning Java"
     />
  </>
  )
}

export default index