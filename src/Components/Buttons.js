import React from "react";
import { Link } from "react-router-dom";

function Buttons({ title, route }) {
  return (
    <Link to={route}>
      <div class="bg-blue-600 inline-block rounded-md cursor-pointer hover:bg-blue-800">
        <h1 class="justify-center items-center p-3 text-white font-semibold">
          {title}
        </h1>
      </div>
    </Link>
  );
}

export default Buttons;
