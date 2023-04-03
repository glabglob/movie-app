import { BrowserRouter } from "react-router-dom";

import Header from "../components/layout/header/Header";
import Body from "../components/layout/body/Body";
import Footer from "../components/layout/footer/Footer";

import './app.scss';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="wrapper-header">
          <Header />
        </div>
        <div className="wrapper-main">
          <Body />
        </div>
        <div className="wrapper-footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;