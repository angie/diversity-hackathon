import config from '../config.json';

export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';

export const receiveData = (endpoint, data) => ({
  type: RECEIVE_DATA,
  payload: {
    endpoint,
    data
  }
});

export const receiveError = (endpoint, error) => ({
  type: RECEIVE_ERROR,
  error
});

export const fetchData = (endpoint, options = {}) => dispatch => {
  const defaultOptions = {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  };

  dispatch({
    type: REQUEST_DATA,
    payload: { endpoint, options }
  });

  return fetch(endpoint, { ...defaultOptions, ...options })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(`${res.status}: ${res.statusText}`);
    })
    .then(jsonData => {
      dispatch(receiveData(endpoint, jsonData));
      return Promise.resolve(jsonData);
    })
    .catch(err => dispatch(receiveError(endpoint, err)));
};

export const fetchSentimentAnalysis = text => dispatch => {
  const url = config.sentimentAnalysisUrl;
  return fetchData(url, { method: 'POST', body: { text } })(dispatch);
};
