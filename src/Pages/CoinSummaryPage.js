import React from "react";
import CoinList from "../components/CoinList";
import AddCoin from "../components/AddCoin";

const CoinSummaryPage = () => {
  return (
    <div>
      <AddCoin />
      <CoinList />
    </div>
  );
};

export default CoinSummaryPage;
