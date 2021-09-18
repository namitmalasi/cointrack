import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import CoinSummaryPage from "./Pages/CoinSummaryPage";
import CoinDetailPage from "./Pages/CoinDetailPage";
import Header from "./components/Header";
import { WatchListContextProvider } from "./context/watchListContext";

const App = () => {
  return (
    <div className="container">
      <WatchListContextProvider>
        <BrowserRouter>
          <Header />
          <Route path="/" component={CoinSummaryPage} exact />
          <Route path="/coins/:id" component={CoinDetailPage} exact />
        </BrowserRouter>
      </WatchListContextProvider>
    </div>
  );
};

export default App;
