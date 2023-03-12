import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HungerSolutionsSection from "./components/HungerSolutionsSection";
import Card from "./components/Card";
import cardsData from "./assets/cardData";
import WhereWeAre from "./components/WhereWeAre";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HungerSolutionsSection />
      <h2 className="text-center pt-6 text-3xl font-sans pb-4">Facts</h2>
      <div className="flex flex-row justify-center items-center flex-wrap  mb-4 ">
        {cardsData.map((card) => {
          return (
            <Card
              imageUrl={card.imageUrl}
              title={card.title}
              description={card.description}
            />
          );
        })}
      </div>

      <WhereWeAre />
      <Footer />
    </div>
  );
}

export default App;
