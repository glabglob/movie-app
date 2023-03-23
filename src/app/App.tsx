import { BrowserRouter } from "react-router-dom";

import Header from "../components/layout/header/Header";
import Body from "../components/layout/body/Body";
// import Footer from "../components/layout/footer/Footer";

import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Body />
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;