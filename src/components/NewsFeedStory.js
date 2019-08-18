import React from 'react';
import {connect} from "react-redux";
import _ from "lodash";

class NewsFeedStory extends React.Component {
    renderNewsStory = () => {
        //Check to see if a news provider has been selected or loaded
        if (_.isEmpty(this.props.newsOutlet)) {
            if (this.props.topic !== '' && this.props.outlet !== '') {
                return (
                    <div className="row">
                        <div className="column">
                            <div className="ui active inverted dimmer">
                                <div className="ui text loader">Loading...</div>
                            </div>
                        </div>
                    </div>
                );
            } else {
                return;
            }
        }

        //Render the news headlines. Each RSS provider has slightly different tags so must be treated separately.
        if (this.props.topic !== '') {
            switch (this.props.outlet) {
                case 'bbc': {
                    const items = this.props.newsOutlet.BBC.item;
                    return (items.splice(0, 10).map(item => {
                            return (
                                <div className="row" key={item.guid[0]['_']}>
                                    <div className="twelve wide column">
                                        <h3><a href={item.link[0]} target='_blank'
                                               rel='noopener noreferrer'>{item.title[0]}</a>
                                        </h3>
                                        <p>{item.description[0]}</p>
                                        <p>Published On: {item.pubDate[0]}</p>
                                    </div>
                                </div>


                            );
                        })
                    );
                }
                case 'huffpost': {
                    const items = this.props.newsOutlet.HUFFPOST.item;
                    return (items.splice(0, 10).map(item => {
                            return (
                                <div className="row" key={item.guid[0]['_']}>
                                    <div className="five wide column">
                                        <img src={item['enclosure'][0].$.url} alt="thumbnail"/>
                                    </div>
                                    <div className="seven wide column">
                                        <h3><a href={item.link[0]} target='_blank'
                                               rel='noopener noreferrer'>{item.title[0]}</a>
                                        </h3>
                                        <p>{item.description[0]}</p>
                                        <p>Published On: {item.pubDate[0]}</p>
                                    </div>
                                </div>


                            );
                        })
                    );
                }
                case 'independent':
                {
                    const items = this.props.newsOutlet.INDEPENDENT.item;
                    return (items.splice(0, 10).map(item => {
                            return (
                                <div className="row" key={item.guid[0]}>
                                    <div className="five wide column">
                                        <img src={item['media:thumbnail'][0].$.url} alt="thumbnail"/>
                                    </div>
                                    <div className="seven wide column">
                                        <h3><a href={item.link[0]} target='_blank'
                                               rel='noopener noreferrer'>{item.title[0]}</a>
                                        </h3>
                                        <p>{item.description[0]}</p>
                                        <p>Published On: {item.pubDate[0]}</p>
                                    </div>
                                </div>


                            );
                        })
                    );
                }
                default:
                    return;
            }
        }
    };

    render(){
        return(
            <React.Fragment>
                {this.renderNewsStory()}
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {newsOutlet: state.newsOutlet}
};
export default connect(mapStateToProps)(NewsFeedStory);