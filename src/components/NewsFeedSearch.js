import React from 'react';
import newsFeeds from "./feeds";

class NewsFeedSearch extends React.Component {
    /**
     * Renders the News Topic DropDown box once a News Outlet has been selected
     */
    renderNewsTopicDropDown() {
        //Map and render the available feeds / topics
        const options = (outlet) => {
            return (
                Object.keys(newsFeeds[outlet].feeds).map(feed => {
                    return (
                        <option value={feed} key={feed}>{newsFeeds[outlet].feeds[feed].label}</option>
                    );
                })
            );
        };

        //Render the topics drop down input box
        if (this.props.newsOutlet !== '') {
            return (
                <select className="ui selection dropdown" onChange={(event) => {
                    const topic = event.target.value;
                    this.props.changeState('newsTopic', topic, this.props.fetchNewsFeedOnSelect, topic);
                }}>
                    <option value="" selected={this.props.newsTopic === ''}>News Topic</option>
                    {options(this.props.newsOutlet)}
                </select>
            );
        } else {
            return (
                <select className="ui selection dropdown" disabled>
                    <option value="">News Topic</option>
                </select>
            );
        }
    }

    /**
     * Renders the Dropdown input box for news outlets
     */
    render() {
        //Grab all available news outlets and their names
        const options = () => {
            return(
                Object.keys(newsFeeds).map(outlet => {
                    return(
                        <option value={outlet} key={outlet}>{newsFeeds[outlet].label}</option>
                    );
                })
            );
        };
        //Render the drop down box
        return (
            <div className="ui grid centered">
                <div className="five wide column" style={{textAlign: 'center'}}>
                    <select className="ui selection dropdown" onChange={(event) => {
                        if(this.props.outlet !== event.target.value && this.props.newsTopic !== ''){
                            this.props.changeState('newsTopic', '', this.props.resetNewsFeedOnSelect);
                        }
                        this.props.changeState('newsOutlet', event.target.value, ()=>{});

                    }}>
                        <option value="">News Outlet</option>
                        {options()}
                    </select>
                </div>
                <div className="seven wide column" style={{textAlign: 'center'}}>
                    {this.renderNewsTopicDropDown()}
                </div>
            </div>
        );
    }
}

export default NewsFeedSearch;