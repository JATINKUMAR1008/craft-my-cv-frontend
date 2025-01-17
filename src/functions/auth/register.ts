import { registerFormSchemaType } from "@/schemas/registerFormSchema";
import axios from "axios";
import { generateToken } from "./token";
import { setCookies } from "@/lib/cookie";

export const registerUser = async (values: registerFormSchemaType) => {
  const { data } = await axios.post(
    `${import.meta.env.VITE_API_URL}/user`,
    values
  );
  if (data && data.status) {
    console.log(data.data);
    const tokens = await generateToken(data.data.state_token);
    setCookies({
      accessToken: tokens.access_token,
      refreshToken: tokens.refresh_token,
    });
    return data.data;
  }
  throw new Error(data.message);
};
