import { BrowserRouter } from "react-router-dom";

import Header from "../components/layout/header/Header";
import Body from "../components/layout/body/Body";

import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Body />
    </BrowserRouter>
  );
}

export default App;