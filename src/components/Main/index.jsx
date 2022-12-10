import React from "react";
import "./style.scss";
import { useState, useEffect } from "react";
import search from "./../../assets/icon-search-white.svg";
import shape from "./../../assets/Shape.svg";
import { API } from "./../../api/api";
import Card from "./../ui/Card";
// import { flushSync } from "react-dom";

const index = () => {
  // console.log(API)
  const [data, setData] = useState([]);
  const [loading, setLoad] = useState(false);

  useEffect(() => {
    API.getAll().then((result) => {
      setData(result.data);
      if (result.data) {
        setLoad(true);
      }
    });
  }, []);

  if (!loading) {
    return (
      <>
        <div class="box">
          <div class="loader">
            <span></span>
          </div>
          <div class="loader">
            <span></span>
          </div>
          <div class="loader">
            <i></i>
          </div>
          <div class="loader">
            <i></i>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <section>
        <div className="container">
          <div className="hero">
            <div className="hero__top">
              <label htmlFor="" className="label-form">
                <img src={search} alt="icon" />
                <input
                  type="text"
                  className="input"
                  placeholder="Search for a country…"
                />
              </label>
              <ul className="drop">
                <li className="drop__item">
                  Filter by Region
                  <img src={shape} className="shape" alt="" />
                  <ul className="drop__inner">
                    <li className="inner__item">Africa</li>
                    <li className="inner__item">America</li>
                    <li className="inner__item">Asia</li>
                    <li className="inner__item">Europe</li>
                    <li className="inner__item">Oceania</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="hero__bottom">
              {data.length > 0
                ? data.map((el) => {
                    return <Card data={el} />;
                  })
                : "<h3>Not found </h3>"}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
