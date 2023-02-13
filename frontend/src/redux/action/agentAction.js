import GlobalTypes from "./GlobalTypes";
import { postDataAPI } from "../../utils/API";


export const register = (data) => async (dispatch) => {
    try {
      const res = await postDataAPI("user/register", data);
      if (res.data.status === 1) {
      }
      dispatch({
        type: GlobalTypes.AUTH,
        payload: {
          data: res.data,
        },
      });
    } catch (err) {
      dispatch({
        type: GlobalTypes.NOTIFY,
        payload: {
          error: err,
        },
      });
    }
  };
  
  export const login = (data) => async (dispatch) => {
    try {
      dispatch({ type: GlobalTypes.NOTIFY, payload: { loading: true } });
  
      const res = await postDataAPI("user/login", {
        ...data,
      });
      if (res.data.status === 1) {
      }
      dispatch({
        type: GlobalTypes.AUTH,
        payload: {
          data: res.data,
        },
      });
      dispatch({ type: GlobalTypes.NOTIFY, payload: { loading: false } });
    } catch (err) {
      dispatch({
        type: GlobalTypes.NOTIFY,
        payload: {
          error: err.response.data.msg,
        },
      });
    }
  };