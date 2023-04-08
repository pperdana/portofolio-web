import "./App.scss";
import "./AppQueries.scss";

import { useGlobalContext } from "./context";

import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const { inViewNav } = useGlobalContext();

  return (
    <section className={`${inViewNav ? "" : "sticky"}`}>
      <Header />
      <Main />
      <Footer />
    </section>
  );
}

export default App;
