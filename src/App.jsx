import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
// import Nav from "./components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Nav /> */}
      <Counter />
    </>
  );
}

export default App;
