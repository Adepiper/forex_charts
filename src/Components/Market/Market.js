import React from "react";
import Chart from "../MarketFeatures/Chart/Chart";
import OrderBook from "../MarketFeatures/OrderBook/OrderBook";
import OrderTable from "../MarketFeatures/OrderTable/OrderTable";
import PairInfo from "../MarketFeatures/PairInfo/PairInfo";
import Pairs from "../MarketFeatures/Pairs/Pairs";
import TradeTab from "../MarketFeatures/TradeTab/TradeTab";
import "./Market.css";

const Market = () => {
  return (
    <div className=" market py-1 m-0 p-0">
      <div className="left col-lg-8">
        <div className="col-">
          <Pairs />
        </div>
        <div className="col- my-1 mx-0">
          <PairInfo />
        </div>
        <div className="col- my-1 mx-0">
          <Chart />
        </div>
      </div>
      <div className="right col-md-4 m-0 p-0">
        <div className="right-1 col-lg-6">
          <OrderBook />
          <OrderTable />
        </div>
        <div className="col-lg-6 right-2">
          <TradeTab />
        </div>
      </div>
    </div>
  );
};

export default Market;
