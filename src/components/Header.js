import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">
        <h1 className="text-center text-warning mt-3 mb-4">CoinTrack</h1>
      </Link>
    </div>
  );
};

export default Header;
