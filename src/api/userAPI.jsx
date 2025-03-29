import { http } from "../utils/setting";

export const getAllUserAPI = async () => {
  const res = await http.get(
    "https://apistore.cybersoft.edu.vn/api/Users/getAll"
  );
  return res.data.content;
};

export const registerAPI = async (userRegister) => {
  const res = await http.post(
    "https://apistore.cybersoft.edu.vn/api/Users/signup",
    userRegister
  );
  return res.data.content;
};

export const getAllUserPagingAPI = async (query) => {
  const pageSize = query.queryKey[2];
  const pageIndex = query.queryKey[1];
  console.log(query);
  const res = await http.get(
    `https://apistore.cybersoft.edu.vn/api/Users/paging?pageIndex=${pageIndex}&pageSize=${pageSize}`
  );

  return res.data.content;
};
