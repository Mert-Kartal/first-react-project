import "./styles/styles.scss";
import { Navbar } from "./sections/navbar/navbar.module";
import { HeroSection } from "./sections/hero_section/hero-section.module";
import { Features } from "./sections/features/features.module";
import { Footer } from "./sections/footer/footer.module";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <HeroSection />
        <Features />
      </div>
      <Footer />
    </>
  );
}

export default App;
