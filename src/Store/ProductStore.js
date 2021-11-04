import { atom } from "recoil";

const productList = atom({
  key: "products",
  default: [],
});

export default productList;
