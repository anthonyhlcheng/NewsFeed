const feeds = {
    bbc:
        {
            label: 'BBC News',
            feeds: {
                top_stories: {label: 'Top Stories', rss: ''},
                world: {label: 'World', rss: 'world'},
                uk: {label: 'UK', rss: 'uk'},
                business: {label: 'Business', rss: 'business'},
                politics: {label: 'Politics', rss: 'politics'},
                health: {label: 'Health', rss: 'health'},
                education: {label: 'Education & Family', rss: 'education'},
                science: {label: 'Science & Environment', rss: 'science_and_environment'},
                technology: {label: 'Technology', rss: 'technology'},
                entertainment: {label: 'Entertainment & Arts', rss: 'entertainment_and_arts'}
            }
        },
    huffpost:
        {
            label: 'Huffington Post',
            feeds: {
                top_stories: {label: 'Top Stories', rss: 'front-page'},
                world: {label: 'World News', rss:'world-news'},
                us: {label:'US News', rss: 'us-news'},
                business: {label: 'Business', rss: 'business'},
                politics: {label: 'Politics', rss: 'politics'},
                crime: {label: 'Crime', rss: 'crime'},
                health: {label: 'Health', rss: 'health'},
                education: {label: 'Education', rss: 'education'},
                science: {label: 'Science', rss: 'science'},
                environment: {label: 'Environment', rss: 'green'},
                tech: {label: 'Tech', rss: 'technology'},
                entertainment: {label: 'Entertainment', rss: 'entertainment'},
                travel: {label: 'Travel', rss: 'travel'}
            }
        },
    independent: {
        label: 'Independent',
        feeds: {
            top_stories: {label: 'Headlines', rss:''},
            world: {label: 'World', rss:'news/world'},
            uk: {label:'UK', rss:'news/uk'},
            us: {label: 'US', rss:'news/world/americas'},
            business: {label: 'Business', rss:'news/business'},
            science: {label: 'Science', rss: 'news/science'},
            environment: {label: 'Environment', rss:'environment'},
            health: {label: 'Health', rss:'news/health'},
            education: {label: 'Education', rss: 'news/education'},
            tech: {label: 'Tech', rss:'life-style/gadgets-and-tech'}
        }
    }
};

export default feeds;