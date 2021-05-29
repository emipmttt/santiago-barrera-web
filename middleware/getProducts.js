import axios from "axios";
export default async limit => {
  const products = await axios.get("/api/products/");

  if (limit > 0) return products.data.data.splice(0, limit);
  else return products.data.data;
};
