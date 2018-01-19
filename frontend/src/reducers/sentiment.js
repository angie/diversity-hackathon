import { RECEIVE_DATA } from '../actions';

function sentimentReducer(
  state = {
    positive: false
  },
  action
) {
  switch (action.type) {
    case RECEIVE_DATA: {
      const positive = action.payload.data.sentiment.documentSentiment.score > 0.5;
      console.log(positive);
      return { positive };
    }
    default:
      return state;
  }
}

export default sentimentReducer;
