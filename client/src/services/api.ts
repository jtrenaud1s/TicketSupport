import axios from "axios";
const client = axios.create();
const refreshClient = axios.create();
client.defaults.withCredentials = true;
refreshClient.defaults.withCredentials = true;

const setToken = (token: string) => {
  client.interceptors.request.use((config) => {
    // add token to request headers
    if (!config?.headers) {
      throw new Error(
        `Expected 'config' and 'config.headers' not to be undefined`
      );
    }

    config.headers["Authorization"] = token;
    return config;
  });
};

const createRefreshInterceptor = (
  setter: (token: string) => void,
  history: any
) => {
  client.interceptors.response.use(
    (response) => response,
    (error) => {
      // Reject promise if usual error
      if (error.response.status !== 401) {
        return Promise.reject(error);
      }

      const originalConfig = error.config;
      /*
       * When response code is 401, try to refresh the token.
       * Eject the interceptor so it doesn't loop in case
       * token refresh causes the 401 response
       */

      if (!originalConfig._retry) {
        originalConfig._retry = true;
        console.log("auto-refresh");
        return refreshClient
          .get("http://localhost:5000/auth/refresh")
          .then((response) => {
            setter(response.data.access_token);
            return axios(error.response.config);
          })
          .catch((error) => {
            setter("");
            history.push("/login");
            return Promise.reject(error);
          });
      }
    }
  );
};

const API = { client, refreshClient, setToken, createRefreshInterceptor };

export default API;
