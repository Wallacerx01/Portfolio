import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Hero2 } from "@/components/hero2";
import { Portfolio } from "@/components/portfolio";

export default function Home() {
  return (
    <main className="w-full relative">
      {/* BACKGROUND GLOBAL */}
      <div
        className="fixed inset-0 -z-10
    [background-image:linear-gradient(#ffffff05_1px,transparent_1px),linear-gradient(90deg,#ffffff05_1px,transparent_1px)]
    [background-size:30px_30px]"
      ></div>

      <section className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 lg:px-25 pt-20 lg:pt-10">
        <div className="flex items-center justify-center">
          <Hero />
        </div>

        <div className="flex items-center justify-center">
          <Hero2 />
        </div>
      </section>

      <About />
      <Portfolio />
      <Footer />
    </main>
  );
}
