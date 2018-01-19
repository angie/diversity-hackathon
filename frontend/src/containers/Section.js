import { connect } from 'react-redux';
import { fetchSentimentAnalysis } from '../actions';
import Section from '../components/Section';

// function mapStateToProps() {
//   return {};
// }

function mapDispatchToProps(dispatch) {
  console.log('mappig');
  return {
    checkBias: () => {
      console.log('dispatching');
      // return dispatch(fetchSentimentAnalysis('shiny happy people'));
      return dispatch({
        type: 'RECEIVE_DATA',
        payload: {
          endpoint: 'something',
          data: {
            originalText: 'brilliant!!!!@!!!!',
            sentiment: {
              sentences: [
                {
                  text: { content: 'brilliant!!!!@!!!!', beginOffset: -1 },
                  sentiment: { magnitude: 0.800000011920929, score: 0.800000011920929 }
                }
              ],
              documentSentiment: { magnitude: 0.800000011920929, score: Math.random() },
              language: 'en'
            }
          }
        }
      });
    }
  };
}

export default connect(null, mapDispatchToProps)(Section);
