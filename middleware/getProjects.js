import axios from "axios";
export default async () => {
  const projects = await axios.get("/api/projects");
  return projects;
};
