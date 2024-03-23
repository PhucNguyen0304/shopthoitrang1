import NavBar from "./components/navbar/NavBar";
import Banner from "./components/banner/Banner";
import Product from "./components/product/Product";
import Feature from "./components/feature/Feature";
import Event from "./components/Event/Event";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";

import "./App.css";
const App = () => {
  return (
    <>
      <div className="body">
          <NavBar></NavBar>
          <Banner></Banner>
        <Product></Product>
        <Feature></Feature>
        <Event></Event>
        <About> </About>
          <Footer></Footer>
      </div>
    </>
  );
};

export default App;
