import axios from "axios";

const baseURl = "https://restcountries.com/v2";

export const API = {
  getAll: async () => axios.get(`${baseURl}/all`),
  getItem: async (title) => axios.get(`${baseURl}/name/${title}`),
  filterCountry: async (region) => axios.get(`${baseURl}/region/${region}`),
  searchByName: async (name) => axios.get(`${baseURl}/name/${name}`)
};
