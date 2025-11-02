import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Features from "./components/Features";
import Trainers from "./components/Trainers";
import Courses from "./components/Courses";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text)]">
  <Hero />
  <AboutUs />
  <Features />
  <Trainers />
  <Courses />
    </div>
  );
}
