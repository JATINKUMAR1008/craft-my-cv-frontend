import { loginFormSchemaType } from "@/schemas/loginFormSchema";
import axios from "axios";
import { generateToken } from "./token";
import { setCookies } from "@/lib/cookie";


export const loginUser = async (values: loginFormSchemaType) => {
  const { data } = await axios.post(
    `${import.meta.env.VITE_API_URL}/auth/login`,
    values
  );
  if (data && data.status) {
    const tokens = await generateToken(data.data.state_token);
    setCookies({
      accessToken: tokens.access_token,
      refreshToken: tokens.refresh_token,
    });
    return data.data;
  }
  throw new Error(data.message);
};
