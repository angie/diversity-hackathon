import { RECEIVE_DATA } from '../actions';

function sentimentReducer(
  state = {
    positive: false
  },
  action
) {
  switch (action.type) {
    case RECEIVE_DATA: {
      return { ...action.payload };
    }
    default:
      return state;
  }
}

export default sentimentReducer;
