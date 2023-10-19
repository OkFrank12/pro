import axios from "axios";


const url:string= "https://eco-fund-be.onrender.com"

export const registerAPI = async (data: any) => {
  try {
    return await axios.post(`${url}/api/register`, data).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const verifyAPI = async (token: string) => {
  try {
    return await axios.get(`${url}/api/${token}/verify`).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const signInAPI = async (data: any) => {
  try {
    return await axios.post(`${url}/api/sign-in`, data).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const resetPasswordAPI = async (data: any) => {
  try {
    return await axios
      .patch(`${url}/api/reset-user-password`, data)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error: any) {
    console.log(error);
  }
};

export const changePasswordAPI = async (token: string, data: any) => {
  try {
    return await axios
      .post(`${url}/api/${token}/change-user-password`, data)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};

export const viewOneAPI = async (_id: string) => {
  try {
    return await axios.get(`${url}/api/${_id}/one`).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};
