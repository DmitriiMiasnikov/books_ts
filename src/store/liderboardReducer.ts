const SET_LIDERBOARD = "SET_LIDERBOARD";

interface InitalStates {
  liderboard: { name: string; rating: number }[];
}

const initialStates: InitalStates = {
  liderboard: [],
};

const liderboardReducer = (state = initialStates, action: any) => {
  switch (action.type) {
    case SET_LIDERBOARD: {
      return { ...state, liderboard: action.list };
    }
    default:
      break;
  }
  return state;
};

export const setLiderboardList = (list: { name: string; rating: number }[]) => {
  return { type: SET_LIDERBOARD, list };
};

export default liderboardReducer;
