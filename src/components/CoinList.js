import React, { useState, useEffect, useContext } from "react";
import coinGecko from "../api/coinGecko";
import { WatchListContext } from "../context/watchListContext";
import Coin from "./Coin";

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const { watchList } = useContext(WatchListContext);
  console.log(watchList);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const response = await coinGecko.get("/coins/markets", {
        params: {
          vs_currency: "usd",
          ids: watchList.join(","),
        },
      });
      setCoins(response.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  const renderCoins = () => {
    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <ul className="coinlist list-group mt-2">
        {coins.map((coin) => {
          return <Coin key={coin.id} coin={coin} />;
        })}
      </ul>
    );
  };

  return <div>{renderCoins()}</div>;
};

export default CoinList;
