import axios from "axios";
export default async limit => {
  const users = await axios.get('api/user/getAllUsers')

  if (limit > 0) return users.data.data.splice(0, limit);
  else return users.data.data;
};
