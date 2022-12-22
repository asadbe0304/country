import React from "react";
import Next from "./../assets/Shape.svg";
// import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API } from "../api/api";
import "./style.scss";

const index = () => {
  // const link = useParams();
const [data, setData]=useState([])

  const {names} = useParams()
  const back = useNavigate()
  useEffect(()=>{
    API.getItem(names).then((res)=>setData(res.data[0]))
  },[names])  


  // console.log(data.data);
  const { flag, population, capital, nativeName, subregion, currency, lang, region, name }=data;
  return (
    <>
      {/* <NavLink> */}
      <section className="read__page">
        <div className="container">
          <div className="page">
            <div className="page__top">
              <button onClick={()=> {back(-1)}} className="btn goback">
                <img src={Next} alt="" />
                Back
              </button>
            </div>
            <div className="read__countries">
              <img className="flags" src={flag} alt="flag" />
              <div className="read__information">
                <div className="title_box">
                  <h2 className="title">{name}</h2>
                </div>
                <ul className="list">
                  <li className="items">
                    <ul className="inner">
                      <li className="item">Native Name : {nativeName}</li>
                      <li className="item">Population: {population}</li>
                      <li className="item">Region : {region} </li>
                      <li className="item">Sub region : {subregion}</li>
                      <li className="item">Capital : {capital}</li>
                    </ul>
                  </li>
                  <li className="items">
                    <ul className="list__in">
                    <li className="item in__item">Top level Domains : be</li>
                    <li className="item in__item">Currencies: {currency}</li>
                    <li className="item in__item">Language: {lang} French, German</li>
                    </ul>
                  </li>
                </ul>
                <div className="page__bottom">
                  <h3 className="caption">
                    Border Countries:
                    <span className="badge">France</span>
                    <span className="badge">France</span>
                    <span className="badge">France</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
