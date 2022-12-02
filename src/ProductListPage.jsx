import React, { useState, useEffect } from 'react';
import ProductList from "./ProductList";
import { getProductList } from "./Api";
import Loading from "./Loading";
import NoMatching from "./NoMatching"
import { Link,useSearchParams } from 'react-router-dom';
import { range } from "lodash"
import Input from "./Input"
import { HiArrowCircleRight,HiArrowCircleLeft } from "react-icons/hi";


function ProductListPage() {
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState();
  
  const [searchParams,setSearchParams]=useSearchParams()
const params=Object.fromEntries([...searchParams])
  let {query,sort,page}=params;
  query=query||'';
  sort=sort || 'default'
  page = +page || 1;

  // nextPage() {
//setSearchParams({page:page+1});
 // }
  useEffect(function() {
   let sortType;
   let sortBy;

    if(sort==="title"){
      sortBy="title"
    }else if(sort==="priceLtH"){
      sortBy="price"
    }else if(sort==="priceHtL"){
      sortBy="price"
      sortType="desc"
    }
    getProductList(sortBy,query,page,sortType).then(
      function(products) {
    setProductData(products);
        console.log(products)
      setLoading(false);
    }).catch(()=>(setLoading(false)));

  }, [sort,query,page]);
  

  
  function handlequery(event) {
    setSearchParams({...params,query:event.target.value,page:1},{replace:false});
  }

  function handleSort(event) {
    setSearchParams({...params,sort:event.target.value},{replace:false});
  }

  
  if (loading) {
    return <Loading />;
  }
  

  return (
    
      <div className="p-2 bg-white max-w-6xl mx-auto  py-[50px] my-[60px] px-9 ">

        <div className="flex flex-col justify-center p-5 ">

          <div className="sm:flex-row flex flex-col sm:justify-between">
            <div>
              <Input className="border border-gray-700 mb-2 rounded-md p-2"
                type="search"
                placeholder="🔍 search"
                onChange={handlequery}
                value={query} />
            </div>
            <div>
              <select className="p-2 font-bold text-white font-mono bg-gray-500 rounded-md"
                value={sort}
                onChange={handleSort}>
                <option value="default">Default sorting</option>
                <option value="title">sort by name(A-Z)</option>
                <option value="priceLtH">sort by price : low to high</option>
                <option value="priceHtL">sort by price : high to low</option>
              </select>
            </div>
          </div>

          {productData.data.length > 0 && (<ProductList products={productData.data} />)}
{productData.data.length ==0 && (<NoMatching>No Matching Product Found.</NoMatching>)}
        </div>

       
        <div className="flex space-x-2">
          {page>1&& <button onClick={()=>{setSearchParams({page:page-1})} } className="text-4xl text-green"><HiArrowCircleLeft/></button>}
                {range(1,productData.meta.last_page +1).map((pageNum)=> <Link
    key={pageNum} className={"m-1 p-2 " + (pageNum === page ? "bg-red-500" : "bg-indigo-500")} to={"?" + new URLSearchParams({...params,page:pageNum})}>{pageNum}</Link>)}
          
          {page<productData.meta.last_page && <button onClick={()=>{setSearchParams({page:page+1})} } className="text-4xl text-green"><HiArrowCircleRight/></button>}
    
      </div>
      </div>
      
  );
}
export default ProductListPage;