import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GlobalStyle from "./GlobalStyles";
import useEffect from "react";

function App() {
  useEffect(() => {
    document.title = "Webull Mockup";
  }, []);
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero />
    </>
  );
}

export default App;
