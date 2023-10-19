import axios from "axios";

const url: string = `https://eco-fund-be.onrender.com`;

export const profileAPI = async (data: any, userID: string) => {
  try {
    const config: any = {
      "content-type": "multipart/form-data",
    };

    return await axios
      .post(`${url}/api/${userID}/create-profile`, data, config)
      .then((res: any) => {
        console.log(res.data.data);
        return res.data.data;
      });
  } catch (error: any) {
    console.log(error);
  }
};

export const updateProfileAPI = async (data: any, profileID: string) => {
  try {
    return await axios
      .patch(`${url}/api/${profileID}/update-profile`, data)
      .then((res: any) => {
        console.log(res.data.data);
        return res.data.data;
      });
  } catch (error: any) {
    console.log(error);
  }
};

export const profileAPIGet = async (userID: string) => {
  try {
    return await axios
      .get(`${url}/api/${userID}/find-profile`)
      .then((res: any) => {
        return res.data.data.profile[0];
      });
  } catch (error: any) {
    console.log(error);
  }
};
