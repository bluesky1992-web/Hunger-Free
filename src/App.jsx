import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HungerSolutionsSection from "./components/HungerSolutionsSection";
import Card from "./components/Card";
import Location from "./components/Location";
import cardsData from "./assets/cardData";

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
      <Location />
    </div>
  );
}

export default App;
