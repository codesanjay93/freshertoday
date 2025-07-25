import BlogLinks from "./components/BlogsParent/BlogLinks";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#f9f9f9] dark:bg-[#121212]">
      <Navbar />
      <Hero />
      <BlogLinks />
      <Footer />
    </main>
  );
}
