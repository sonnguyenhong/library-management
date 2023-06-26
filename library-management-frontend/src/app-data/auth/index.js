import { TOKEN_KEY, REQUEST_STATE } from "../../app-configs";
import { POST } from "../../app-data/fetch";
import { GET } from "../../app-data/fetch";

export const apiLogin = async (params) => {
  try {
    const response = await POST("/login", params, { isFullPath: false });
    return {
      state: REQUEST_STATE.SUCCESS,
      data: response,
    };
  } catch (error) {
    console.log("error", error);
    return {
      error: error,
      state: REQUEST_STATE.ERROR,
      data: {},
    };
  }
};
export const apiProfile = async () => {
  try {
    const response = await GET("/user", {}, { isFullPath: false });
    return {
      state: REQUEST_STATE.SUCCESS,
      data: response,
    };
  } catch (error) {
    console.log("error", error);
    return {
      error: error,
      state: REQUEST_STATE.ERROR,
      data: {},
    };
  }
};
