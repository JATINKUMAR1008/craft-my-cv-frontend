import apiClient from "@/lib/axios";

export const getUser = async () => {
  const { data } = await apiClient.get("/user");
  if (data) {
    console.log(data);
    return data.data;
  }
  throw new Error(data.message);
};
