import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  promotions: [
    {
      name: "Ezreal Pulsefire",
      price: 3250,
      img: "https://picsum.photos/200/300/?random"
    },
    {
      name: "Caitlyn Pulsefire",
      price: 1820,
      img: "https://picsum.photos/200/300/?random"
    },
    {
      name: "Darius Deus-Rei",
      price: 1820,
      img: "https://picsum.photos/200/300/?random"
    },
    {
      name: "Zoe Cibernética",
      price: 1350,
      img: "https://picsum.photos/200/300/?random"
    },
    {
      name: "Brenon Linux Boy",
      price: 3250,
      img: "https://picsum.photos/200/300/?random"
    }
  ],
  loading: false
};

const fetchPromotionsStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchPromotionsSuccess = (state, action) => {
  return updateObject(state, {
    promotions: action.promotions,
    loading: false
  });
};

const fetchPromotionsFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PROMOTIONS_FAIL:
      return fetchPromotionsFail(state, action);
    case actionTypes.FETCH_PROMOTIONS_START:
      return fetchPromotionsStart(state, action);
    case actionTypes.FETCH_PROMOTIONS_SUCCESS:
      return fetchPromotionsSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
