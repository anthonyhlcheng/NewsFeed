import React from 'react';
import TopNewsFeed from './NewsFeed';

const App = () => {
    return(
        <div>
            <div className="ui inverted menu">
                <h3 className="item">
                    <b>NewsFeed</b>
                </h3>
            </div>
            <div className="ui container">
                <TopNewsFeed />
            </div>
        </div>
        );
};

export default App;