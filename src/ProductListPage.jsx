import React, { useState, useEffect } from 'react';
import ProductList from "./ProductList";
import { getProductList } from "./Api";
import Loading from "./Loading";
import NoMatching from "./NoMatching"
import { nextItemsData } from "./Api"


function ProductListPage(id) {
  const [loading, setLoading] = useState(true);
  const [productlist, setProductlist] = useState([]);

  useEffect(function() {
    const promise = getProductList();
    promise.then(function(products) {
      setProductlist(products);
      setLoading(false);
    }).catch(function() {
      setLoading(false);
    })

  }, []);
  const [querry, setQuerry] = useState("");
  const [sort, setSort] = useState("default");

  let data = productlist.filter(function(item) {
    return item.title.toLowerCase().indexOf(querry.toLowerCase()) != -1;
  })

  function handleQuerry(event) {
    setQuerry(event.target.value);
  }

  function handleSort(event) {
    setSort(event.target.value);
  }

  if (sort === "title") {
    data.sort(function(x, y) {
      return x.title.toLowerCase() < y.title.toLowerCase() ? -1 : 1;
    })
  } else
    if (sort === "priceLtH") {
      data.sort(function(x, y) {
        return x.price - y.price;
      })
    } else if (sort === "priceHtL") {
      data.sort(function(x, y) {
        return y.price - x.price;
      })
    }
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-gray-200 p-5">
      <div className="p-2 bg-white max-w-6xl mx-auto  py-[50px] my-[60px] px-9 ">
        <div className="min-h-screen flex flex-col justify-center p-5 ">

          <div className="sm:flex-row flex flex-col items-end  sm:justify-between">
            <div>
              <input className="border border-gray-700 mb-2 rounded-md p-2"
                type="search"
                placeholder="🔍 search"
                onChange={handleQuerry}
                value={querry} />
            </div>
            <div>
              <select className="p-2 ml-2 mb-2 font-bold text-white font-mono bg-gray-500 rounded-md "
                value={sort}
                onChange={handleSort}>
                <option value="default">Default sorting</option>
                <option value="title">sort by name(A-Z)</option>
                <option value="priceLtH">sort by price : low to high</option>
                <option value="priceHtL">sort by price : high to low</option>
              </select>
            </div>
          </div>
          {data.length > 0 && (<ProductList products={data} />
          )}

          {data.length == 0 && (<NoMatching>No Matching Product Found.</NoMatching>)}
        </div>
      </div>
    </div>
  );
}
export default ProductListPage;