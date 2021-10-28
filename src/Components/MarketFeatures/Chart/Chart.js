import React from "react";
import "./Chart.css";
import TradeViewChart from "react-crypto-chart";

const Chart = () => {
  return (
    <div className="chart">
      <TradeViewChart pair={"EOSUSDT"} />
    </div>
  );
};

export default Chart;
