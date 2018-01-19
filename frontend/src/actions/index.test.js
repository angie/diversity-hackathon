import config from '../config.json';
import { fetchData, REQUEST_DATA, RECEIVE_DATA } from './index';

let DISPATCH;
beforeEach(() => {
  DISPATCH = jest.fn();
});

const url = config.sentimentAnalysisUrl;

// Mock API response
global.fetch = () =>
  Promise.resolve({
    status: 200,
    ok: true,
    headers: { get: () => 'application/json; charset=utf-8' },
    json: () =>
      Promise.resolve({
        originalText: 'brilliant!!!!@!!!!',
        sentiment: {
          sentences: [
            {
              text: { content: 'brilliant!!!!@!!!!', beginOffset: -1 },
              sentiment: { magnitude: 0.800000011920929, score: 0.800000011920929 },
            },
          ],
          documentSentiment: { magnitude: 0.800000011920929, score: 0.800000011920929 },
          language: 'en',
        },
      }),
  });

it('dispatches a request to list all images', () =>
  fetchImage()(DISPATCH).then(() => {
    expect(DISPATCH).toHaveBeenCalledTimes(2);
    expect(DISPATCH.mock.calls[0][0]).toEqual({
      type: REQUEST_DATA,
      payload: {
        endpoint: `${url}/list`,
        options: {},
      },
    });
    expect(DISPATCH.mock.calls[1][0]).toEqual({
      type: RECEIVE_DATA,
      payload: {
        endpoint: `${url}/list`,
        data: ['image1.png', 'image2.png'],
      },
    });
  }));

it('dispatches a request fetch a single image', () => {
  fetchImage('placeholder.png')(DISPATCH);

  expect(DISPATCH.mock.calls[0][0]).toEqual({
    type: REQUEST_DATA,
    payload: {
      endpoint: `${url}/placeholder.png`,
      options: {},
    },
  });
});

it('handles error fetching media', () => {
  global.fetch = () =>
    Promise.resolve({
      status: 500,
      ok: false,
      statusText: 'Something went wrong...',
    });

  const error = new Error('500: Something went wrong...');

  return fetchImage()(DISPATCH).then(() => {
    expect(DISPATCH).toHaveBeenCalledTimes(2);
    expect(DISPATCH.mock.calls[1][0]).toEqual({
      type: 'RECEIVE_ERROR',
      error,
    });
  });
});
