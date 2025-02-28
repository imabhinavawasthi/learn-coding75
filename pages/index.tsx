import Footer from "@/components/Footer";
import Features from "@/components/HomePage/Features";
import Hero from "@/components/HomePage/Hero";
import Notes from "@/components/HomePage/Notes";
import Testimonial from "@/components/HomePage/Testimonial";
import Navbar from "@/components/Navbar";

function home() {
  return (
    <>
      <div className="bg-background min-h-screen text-white overflow-x-hidden">
        <Navbar />
        <Hero />
        <Notes />
        <Features />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
}

export default home;
