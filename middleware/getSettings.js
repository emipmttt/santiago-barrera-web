import axios from "axios";
export default async limit => {
  const c = await axios.get('api/settings/')

  if (limit > 0) return c.data.data.splice(0, limit);
  else return c.data.data;
};
