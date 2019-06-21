import xml2js from 'xml2js';
import bbc from '../api/bbc';
import huffpost from '../api/huffpost';
import independent from "../api/independent";

const fetchBBCFeed = (feedExtension) => {
    return async (dispatch) => {
        const response = await bbc.get(feedExtension + '/rss.xml');
        xml2js.parseString(response.data, (err, result) => {
            dispatch({
                type: 'FETCH_BBC_FEED', payload: result
            })
        });

    };
};

const fetchHuffpostFeed = (feedExtension) => {
    return async (dispatch) => {
        const response = await huffpost.get(feedExtension + '/feed');
        xml2js.parseString(response.data, (err, result) => {
            dispatch({
                type: 'FETCH_HUFFPOST_FEED', payload: result
            })
        });

    };
};

const fetchIndependentFeed = (feedExtension) => {
    return async (dispatch) => {
        const response = await independent.get(feedExtension + '/rss');
        xml2js.parseString(response.data, (err, result) => {
            dispatch({
                type: 'FETCH_INDEPENDENT_FEED', payload: result
            })
        });

    };
};

export const fetchFeed = (outlet, feedExtension) => {
  switch(outlet){
      case 'bbc':
          return fetchBBCFeed(feedExtension);
      case 'huffpost':
          return fetchHuffpostFeed(feedExtension);
      case 'independent':
          return fetchIndependentFeed(feedExtension);
      default:
          return;
  }
};

export const resetFeed = () => {
    return (dispatch) => {
        dispatch({type: 'RESET'});
    }
};