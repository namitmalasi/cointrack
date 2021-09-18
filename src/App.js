import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import CoinSummaryPage from "./Pages/CoinSummaryPage";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route path="/" component={CoinSummaryPage} exact />
      </BrowserRouter>
    </div>
  );
};

export default App;
