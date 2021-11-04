import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import productList from "../Store/ProductStore";
import { useRecoilState } from "recoil";
import Cards from "./Cards";

function Content() {
  const [products, setProducts] = useRecoilState(productList);
  const [limit, setLimit] = useState(8);

  useEffect(() => {
    const url = `https://fakestoreapi.com/products?limit=${limit}`;

    axios
      .get(url)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [limit]);

  const handleLoadMore = () => {
    setLimit(limit + 8);
  };

  window.onscroll = function () {
    // Height of the window and height of scroll bar is equal to the offset height
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      handleLoadMore();
    }
  };

  if (products.length === 0)
    return (
      <div>
        <h1>Loading..</h1>
      </div>
    );

  return (
    <div class="md:grid md:grid-cols-4 md:gap-3">
      {products &&
        products.map((product) => {
          return (
            <div class="pb-3 md:pb-0" key={product.id}>
              <Cards props={product} />
            </div>
          );
        })}
    </div>
  );
}

export default Content;
