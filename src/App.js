import "./App.css";
import Card from "./Components/card/Card";
import sedanSrc from "./images/icon-sedans.svg";
import suvSrc from "./images/icon-suvs.svg";
import luxurySrc from "./images/icon-luxury.svg";

function App() {
  const sedanHeader = "SEDANS";
  const sedanTxt =
    "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip";
  const suvHeader = "SUVS";
  const suvTxt =
    "Take an SUV for its spacious interior, power, and versatility. Perfect for your next fa,ily vacation and off-road adventures.";
  const luxuryHeader = "LUXURY";
  const luxuryTxt =
    "Cruise in the best car brands without the boated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.";
  return (
    <>
      <main className="main__card-container">
        <div className="sedan__container">
          <Card imgSrc={sedanSrc} header={sedanHeader} text={sedanTxt} />
        </div>
        <div className="suv__container">
          <Card imgSrc={suvSrc} header={suvHeader} text={suvTxt} />
        </div>
        <div className="luxury__container">
          <Card imgSrc={luxurySrc} header={luxuryHeader} text={luxuryTxt} />
        </div>
      </main>
    </>
  );
}

export default App;
