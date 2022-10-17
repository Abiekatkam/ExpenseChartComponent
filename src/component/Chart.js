import React from "react";
import ChartBar from "./ChartBar";

function Chart() {
  return (
    <div className="ChartContainer">
      <h1>Spending - Last 7 days</h1>

      <ChartBar />

      <p className="divider"></p>

      <div className="ChartFooter">
        <div className="ChartTotal">
          <small>Total this month</small>
          <h1>$478.33</h1>
        </div>
        <div className="ChartHint">
          <strong>+2.4%</strong>
          <small>from last month</small>
        </div>
      </div>
    </div>
  );
}

export default Chart;
