import React, { useState } from "react";

import "./style.css";

const stateInitial = [
  {
    id: 0,
    active: false,
    cor: "red"
  },
  {
    id: 1,
    active: false,
    cor: "yellow"
  },
  {
    id: 2,
    active: false,
    cor: "green"
  }
];

const TrafficLight = () => {
  const [data, setData] = useState(stateInitial);

  /**
   * Checagem de items ativos
   */
  function CheckIsActive() {
    return data.every(item => !item.active);
  }
  /**
   * Ativar e desativar meus tipos
   */
  function typeActive(item) {
    if (CheckIsActive()) {
      data[item.id].active = !data[item.id].active;
    } else {
      data[item.id].active = false;
    }
    setData([...data]);
  }

  function RenderizarCirculos(item) {
    return (
      <div
        onClick={() => typeActive(item)}
        key={item.id}
        className={`circle ${item.active ? item.cor : ""}`}
      />
    );
  }

  return (
    <div className="rectangle">
      {data.map(item => {
        return RenderizarCirculos(item);
      })}
    </div>
  );
};

export default TrafficLight;
