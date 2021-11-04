import { atom } from "recoil";

const productCounter = atom({
  key: "productCounter",
  default: 0,
});

export default productCounter;
