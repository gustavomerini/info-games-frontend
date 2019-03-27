import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const fetchFreeWeekFail = error => {
  return {
    type: actionTypes.FETCH_FREE_WEEK_FAIL,
    error: error
  };
};

export const fetchFreeWeekStart = () => {
  return {
    type: actionTypes.FETCH_FREE_WEEK_START
  };
};

export const fetchFreeWeekSuccess = freeWeek => {
  return {
    type: actionTypes.FETCH_FREE_WEEK_SUCCESS,
    freeWeek
  };
};

export const fetchFreeWeek = () => {
  return dispatch => {
    dispatch(fetchFreeWeekStart());
    axios.get("/free-week")
      .then(res => dispatch(fetchFreeWeekSuccess(res)))
      .catch(err => {
        dispatch(fetchFreeWeekFail(err));
      });
  };
};
