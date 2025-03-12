import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Statistics from "./components/Statistics";
import Trades from "./components/Trades";

function App() {
  return (
    <div className="bg-layout-dark min-w-[375px]">
      <NavBar />
      <Hero />
      <Statistics />
      <Trades />
    </div>
  );
}

export default App;
