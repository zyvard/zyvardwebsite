import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-zyvard-charcoal">
      <Header />
      <main>
        <section id="hero" className="min-h-screen">
          <Hero />
        </section>
        <section id="products" className="min-h-screen">
          <ProductGrid />
        </section>
        <section id="about" className="min-h-screen">
          <About />
        </section>
        <section id="contact" className="min-h-screen flex flex-col">
          <Contact />
          <Footer />
        </section>
      </main>
    </div>
  );
}