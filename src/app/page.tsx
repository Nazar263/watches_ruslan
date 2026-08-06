import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Catalog from "@/components/Catalog";
import About from "@/components/About";
import Delivery from "@/components/Delivery";
import FAQ from "@/components/FAQ";
import OrderBanner from "@/components/OrderBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Catalog />
        <About />
        <Delivery />
        <FAQ />
        <OrderBanner />
      </main>
      <Footer />
    </>
  );
}
