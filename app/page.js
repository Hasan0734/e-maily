
import Community from "@/components/Home/Community";
import ComponentShowcase from "@/components/Home/ComponentShowcase";
import Features from "@/components/Home/Features";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import MainHeadling from "@/components/Home/MainHeadling";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-black">
      <Hero />
      <MainHeadling/>
      <Features/>
      <ComponentShowcase/>
      <Community/>
      <Footer/>
      
    </div>
  );
}
