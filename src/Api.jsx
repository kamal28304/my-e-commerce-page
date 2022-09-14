import React from "react";
import axios from "axios";

export function getProductList() {
  return axios.get("https://dummyjson.com/products").then(function(response) {
    return response.data.products;
  });

}
export function getProductData(id) {
  return axios.get("https://dummyjson.com/products/" + id)
    .then(function(response) {
      return (response.data)
    });
}
export function nextItemsData() {
  return axios.get("https://dummyjson.com/products?limit=30&skip=30&select=title,price,thumbnail,category,id").then(function(response) {
    return response.data.products;
  });

}

export function LastFourtyItemsData() {
  return axios.get("https://dummyjson.com/products?limit=40&skip=60&select=title,price,thumbnail,category,id").then(function(response) {
    return response.data.products;
  });

}