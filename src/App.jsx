import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [search, setSearch] = useState('Aurangabad');
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=767b974361cc02933fec22c6e391c9d6`
    )
      .then((res) => res.json())
      .then((res) => setData(res));
  });

  const clickHandler = () => {

  }


  return (
    <>
      <div className=" searchbox">
        <input
          placeholder="Search Here..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={clickHandler}>Click</button>

      </div>

      <div className="card">
        <h2>{data.name}</h2>
        <h6>Clouds</h6>

        <img src="assets\icon.png" alt="icon" />
        {/* <h1>{(data.main.temp)}<sup>&deg;</sup></h1> */}

        <div className="container">
          <div className="details">
            <p>max</p>
            {/* <span>{data.main.temp_max}<sup>&deg;</sup></span> */}
          </div>
          <div className="details">
            <p>min</p>
            {/* <span>{data.main.temp_min}<sup>&deg;</sup></span> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
