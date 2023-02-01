import About from "../components/About";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Products from "../components/Products";

export default function Home() {
  return (
    <>
      <SeoHead title="ACE International" />
      <Layout>
        <Hero />
        <About />
        <Products />
        <Pricing />
      </Layout>
    </>
  );
}
