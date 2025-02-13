import "./App.css";
import ButtonSection from "./components/ButtonSection";

function App() {
  return (
    <>
      <div className="relative w-screen flex items-center">
        <h1 className="text-[14vw] font-bold uppercase leading-[.8] text-center">
          Guajillo Components
        </h1>
      </div>
      <div className="relative w-screen flex items-center pt-2">
        <ButtonSection
          text="Nav - bars"
          background="bg-white"
          textColor="text-basicRed"
          textSize="text-[14vw]"
        ></ButtonSection>
        <ButtonSection
          text="Heros"
          background="bg-black"
          textColor="text-white"
          textSize="text-[14vw]"
        ></ButtonSection>
      </div>
      <div className="w-screen flex items-center pt-2">
        <ButtonSection
          text="cards & features"
          background="bg-white"
          textColor="text-black"
          textSize="text-[11vw]"
        ></ButtonSection>
        <ButtonSection
          text="Testi - monials"
          background="bg-white"
          textColor="text-basicBlue"
          textSize="text-[9vw]"
        ></ButtonSection>
      </div>
    </>
  );
}

export default App;
