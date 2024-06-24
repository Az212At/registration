import API from "@/package/axios";

export const apiGetPosts = () => {
  return API.get("posts");
};

export const apiEditPosts = (id, params) => {
  return API.put(`posts/${id}`, params);
};
