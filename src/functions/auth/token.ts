import axios from "axios";

export const generateToken = async (stateToken: string) => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_API_URL}/auth/token/${stateToken}`
  );
  if (data && data.status) {
    return data.data;
  }
  throw new Error(data.message);
};
