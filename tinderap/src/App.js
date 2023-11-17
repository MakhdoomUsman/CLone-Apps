import "./App.css";
import Header from "./components/Header";
import SwipeButton from "./components/ui/SwipeButton";
import TinderCards from "./components/ui/TinderCards";

function App() {
  return (
    <div className="">
      {/* header  */}
      <Header />

      {/* cards  */}
      <TinderCards />
      {/* footer controller  */}
      <SwipeButton />
    </div>
  );
}

export default App;
