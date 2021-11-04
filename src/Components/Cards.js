import React from "react";
import Buttons from "./Buttons";
import Counter from "./Counter";

function Cards({ props }) {
  return (
    <div class="flex-col border-2 h-full cursor-pointer transform transition duration-200 ease-in-out translate-y-0 hover:translate-y-1">
      <div class="px-3 py-2 flex justify-between">
        <div class="flex">
          <div class="bg-red-500 rounded-md">
            <h1 class="font-bold text-white pr-2 pl-1">
              ⭐ {props.rating.rate}
            </h1>
          </div>
          <span class="font-semibold pl-2 text-gray-500">
            {props.rating.count} Reviews
          </span>
        </div>
        <h1 class="font-semibold capitalize">
          {props.category == "women's clothing" ? "Women's" : props.category}
        </h1>
      </div>
      <div class="p-3 flex justify-center items-center">
        <img class="pb-2 h-52" src={props.image} alt={props.title} />
      </div>
      <h1 class="px-3 font-bold">{props.title.slice(0, 30)}...</h1>
      <h1 class="p-3 font-normal">
        {props.description.slice(0, 50)}
        <span class="text-gray-500 cursor-pointer">....more</span>
      </h1>
      <h1 class="font-semibold pl-3 pb-2">
        Cost: <span class="font-bold">{props.price}</span>
      </h1>
      <div class="pl-3 pb-2 flex justify-between">
        <Buttons title="Add To Cart" route="/cart" />
        <div class="flex items-center">
          <Counter />
        </div>
      </div>
    </div>
  );
}

export default Cards;
