import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CarouselS from "./components/CarouselS";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <CarouselS />
    </>
  );
}

export default App;
