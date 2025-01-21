import axios from "axios";
export const axiosURL = import.meta.env.VITE_MICROSERVICES_API;

const axiosAPI = {
  get: async (ref, params) => {
    return await axios
      .get(
        `${axiosURL}${ref}`,
        {
          params: params,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Accept: "Application/json",
          },
        }
      )
      .then((res) => {
        return res.data.data;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        return error;
      });
  },
  post: async (ref, params) => {
    return await axios
      .post(`${axiosURL}${ref}`, params, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .catch((error) => {
        const errorCode = error?.code;
        const errorMessage = error?.message;
        console.error(errorCode, errorMessage);
        return errorCode, errorMessage, error?.response?.data;
      });
  },
  put: async (ref, params) => {
    return await axios
      .put(`${axiosURL}${ref}`, params, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        return error;
      });
  },
  delete: async (ref, params) => {
    return await axios
      .delete(
        `${axiosURL}${ref}`,
        {
          params: params,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      )
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        return error;
      });
  },
};

export default axiosAPI;