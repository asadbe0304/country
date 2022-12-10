import axios from "axios";

const baseURl ="https://restcountries.com/v2"

export const API = {
    getAll: async()=>axios.get(`${baseURl}/all`),
    getItem:async (title)=> axios.get(`${baseURl}/name/${title}`)
};