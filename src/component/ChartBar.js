import React, { useEffect, useState } from "react";
import url from "../data.json";

function ChartBar() {
  const [dataStats, setDataStats] = useState([]);

  useEffect(() => {
    setDataStats(url);
  }, []);

  const days = new Date().getDay();
  const graphBars = document.querySelectorAll(".ChartGraphBar");
  const listDays = document.getElementsByClassName("content_card_graph_day");
  const moneyDays = document.getElementsByClassName("over_money");

  graphBars.forEach((item, index) => {
    if (days != 0) {
      graphBars[days - 1].classList.add("color_this_day");
    } else {
      graphBars[6].classList.add("color_this_day");
    }
  });

  for (let index = 0; index < listDays.length; index++) {
    listDays[index].addEventListener("mouseenter", () => {
      moneyDays[index].classList.add("show_money");
    });
    listDays[index].addEventListener("mouseleave", () => {
      moneyDays[index].classList.remove("show_money");
    });
  }

  //   console.log(dataStats);
  return (
    <div className="ChartBarContainer">
      <ul className="ChartBarGraph">
        {dataStats.map((element, index) => {
          return (
            <li key={index} className="content_card_graph_day">
              <div className="over_money bar_money">${element.amount}</div>
              <div className={`ChartGraphBar bar${index + 1}`}></div>
              {element.day}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ChartBar;
