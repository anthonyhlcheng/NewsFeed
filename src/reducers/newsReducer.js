export default (state = {}, action) => {
    switch(action.type){
        case 'RESET':
            return {};
        case 'FETCH_BBC_FEED':
        return {...state, 'BBC': action.payload.rss.channel[0]};
        case 'FETCH_HUFFPOST_FEED':
            return {...state, 'HUFFPOST': action.payload.rss.channel[0]};
        case 'FETCH_INDEPENDENT_FEED':
            return{...state, 'INDEPENDENT': action.payload.rss.channel[0]};
        default:
            return state;
    }
}