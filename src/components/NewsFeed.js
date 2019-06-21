import React from 'react';
import {connect} from "react-redux";
import {resetFeed, fetchFeed} from "../actions";
import newsFeeds from './feeds.js';
import './NewsFeed.css';
import NewsFeedStory from "./NewsFeedStory";
import NewsFeedSearch from "./NewsFeedSearch";

class NewsFeed extends React.Component {
    state = {newsOutlet: '', newsTopic: ''};

    /**
     * This function is passed onto other components to help alter the state in this component
     */
    changeState = (state, value, callback, ...arg) => {
        switch (state) {
            case 'newsOutlet':
                this.setState({newsOutlet: value}, () => {
                    callback(arg);
                });
                break;
            case 'newsTopic':
                this.setState({newsTopic: value}, () => {
                    callback(arg);
                });
                break;
            default:
                return;
        }
    };

    /**
     * Resets Redux Store for newsFeed.
     */
    resetNewsFeedOnSelect = () => {
        this.props.resetFeed();
    };

    /**
     * Fetches the news feed from the provider upon selection
     */
    fetchNewsFeedOnSelect = (topic) => {
        let rss;
        if (this.state.newsOutlet !== '' && this.state.newsTopic !== '') {
            if (topic !== '') {
                this.setState({newsTopic: newsFeeds[this.state.newsOutlet].feeds[topic].label});
                rss = newsFeeds[this.state.newsOutlet].feeds[topic].rss;
            }
            if (this.state.newsOutlet !== '' && rss !== undefined) {
                this.props.fetchFeed(this.state.newsOutlet, rss);
            }
        }
    };

    /**
     * Renders the News Providers Name
     */
    renderNewsOutlet() {
        if (this.state.newsOutlet !== '') {
            return (
                <h2 className={`valign newsOutlet ${this.state.newsOutlet}`}>
                    <b>{newsFeeds[this.state.newsOutlet].label}</b>
                </h2>
            );
        }
    }

    /**
     * Renders the topic that is available on the provider's feed
     */
    renderNewsTopic() {
        if (this.state.newsOutlet !== '' && this.state.newsTopic !== '') {
            return (
                <h2 className="valign newsTopic"><b>{this.state.newsTopic}</b></h2>
            );
        }
    }

    render() {
        return (
            <React.Fragment>
                <NewsFeedSearch changeState={this.changeState} newsOutlet={this.state.newsOutlet}
                                newsTopic={this.state.newsTopic} fetchNewsFeedOnSelect={this.fetchNewsFeedOnSelect}
                                resetNewsFeedOnSelect={this.resetNewsFeedOnSelect}/>
                <div className="ui grid centered">
                    <div className="row">
                        <div className="five wide column" style={{textAlign: 'center', paddingRight: '0'}}>
                            {this.renderNewsOutlet()}
                        </div>
                        <div className="seven wide column" style={{textAlign: 'center', paddingLeft: '0'}}>
                            {this.renderNewsTopic()}
                        </div>
                    </div>
                    <NewsFeedStory outlet={this.state.newsOutlet} topic={this.state.newsTopic}/>

                </div>
            </React.Fragment>);
    }
}

const mapStateToProps = (state) => {
    return {newsOutlet: state.newsOutlet};
};

export default connect(mapStateToProps, {fetchFeed, resetFeed})(NewsFeed);