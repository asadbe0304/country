import React from "react";
import "./style.scss";
import { useState, useEffect } from "react";
import searchs from "./../../assets/icon-search-white.svg";
import shape from "./../../assets/Shape.svg";
import { API } from "./../../api/api";
import Card from "./../ui/Card";
// import { flushSync } from "react-dom";

const index = () => {
  // console.log(API)
  const [data, setData] = useState([]);
  const [sorts, setSort] = useState([]);
  // const [search, setSearch]=useState('')
   const [loading, setLoad] = useState(false);



  useEffect(() => {


    API.getAll().then((result) => {
      setData(result.data);
      if (result.data) {
        setLoad(true);

        result.data.forEach((e)=>{
          if(!sorts.includes(e.region)){
        sorts.push(e.region)
        setSort(sorts)
          }
        })
      }
    });
  }, []);

const filterCountry = (country)=>{
  API.filterCountry(country).then((result)=> setData(result.data))
}

const searchByName = (text)=>{
  API.searchByName(text).then((result)=> setData(result.data))
}

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
                <img src={searchs} alt="icon" />
                <input
                  type="text"
                  className="input"
                  // value={search}
                  onChange={(e)=>{
                    // setSearch(e.target.value)
                    searchByName(e.target.value)
                  }}
                  placeholder="Search for a country…"
                />
              </label>
              <select className="drop__inner" onChange={(e)=>{
                filterCountry(e.target.value)
              }}>
                <option value="Filter" selected disabled>
                  Filter by Region
                </option>
                {
                  sorts.sort().map((item)=>{
                    return(
                      <option key={item} value={item}>
                        {item}
                      </option>
                    );
                  })
                }
              </select>
            </div>
            <div className="hero__bottom">
              {data.length > 0
                ? data.map((el) => {
                    return <Card data={el} key={el.name} />;
                  })
                : "Not found"}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
