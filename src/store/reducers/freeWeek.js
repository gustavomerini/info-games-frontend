import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  freeWeek: [
    {
      name: "ezreal",
      img: "https://picsum.photos/200/300/?random"
    },
    {
      name: "ezreal",
      img: "https://picsum.photos/200/300/?random"
    },
    {
      name: "ezreal",
      img: "https://picsum.photos/200/300/?random"
    },
    {
      name: "ezreal",
      img: "https://picsum.photos/200/300/?random"
    },
    {
      name: "ezreal",
      img: "https://picsum.photos/200/300/?random"
    }
  ],
  loading: false
};

const fetchFreeWeekStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchFreeWeekSuccess = (state, action) => {
  return updateObject(state, {
    freeWeek: action.freeWeek,
    loading: false
  });
};

const fetchFreeWeekFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_FREE_WEEK_FAIL:
      return fetchFreeWeekFail(state, action);
    case actionTypes.FETCH_FREE_WEEK_START:
      return fetchFreeWeekStart(state, action);
    case actionTypes.FETCH_FREE_WEEK_SUCCESS:
      return fetchFreeWeekSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
