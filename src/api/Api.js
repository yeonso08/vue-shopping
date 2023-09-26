import axios from "axios";

export const Api = {
  getAllCategories: function () {
    return axios.get("https://fakestoreapi.com/products/categories");
  },

  getCategoryProducts: function (payload) {
    return axios.get(`https://fakestoreapi.com/products/category/${payload}`);
  },
};
