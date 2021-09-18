import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import CoinSummaryPage from "./Pages/CoinSummaryPage";
import Header from "./components/Header";
import { WatchListContextProvider } from "./context/watchListContext";

const App = () => {
  return (
    <div className="App">
      <WatchListContextProvider>
        <BrowserRouter>
          <Header />
          <Route path="/" component={CoinSummaryPage} exact />
        </BrowserRouter>
      </WatchListContextProvider>
    </div>
  );
};

export default App;
