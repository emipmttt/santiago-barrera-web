import axios from "axios";
export default async limit => {
  const projects = await axios.get("/api/projects");

  if (limit > 0) return projects.data.data.splice(0, limit);
  else return projects.data.data;
};
