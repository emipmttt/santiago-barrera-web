import axios from "axios";
export default async limit => {
  const projects = await axios.get("/api/article/");

  if (limit > 0) return projects.data.data.splice(0, limit);
  else return projects.data.data;
};
