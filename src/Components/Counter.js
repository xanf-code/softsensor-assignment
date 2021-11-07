import React from "react";
//import { useRecoilState } from "recoil";
//import productCounter from "../Store/productCounter";

function Counter() {
 // const [count, setCount] = useRecoilState(productCounter);

  return (
    <div class="flex items-center pr-4">
      <div
        // onClick={() => setCount(count - 1)}
        class="rounded-md border-2 bg-blue-300"
      >
        <h1 class="text-black font-bold p-2">-</h1>
      </div>
      <h1 class="text-black font-bold px-2"> 0 </h1>
      <div
        // onClick={() => setCount(count + 1)}
        class="rounded-md border-2 bg-blue-300"
      >
        <h1 class="text-black font-bold p-2">+</h1>
      </div>
    </div>
  );
}

export default Counter;
