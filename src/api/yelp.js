import axios from 'axios';

const ROOT_YELP_URL = 'https://api.yelp.com/v3/businesses';
const API_KEY = 'tw7YnIY1K9lXcZ9e6J2wnEcuVLGhcv7O1JQIBQssBpSqOyDJYrJHrzdNz8WhQM2fqSytFAElqfNxaH0NgPnhocODULHMEmk9k9lJ-srM8eWhNzUES-QBKufDkt1MXXYx';

export default axios.create({
    baseURL: ROOT_YELP_URL,
    headers: {
        Authorization: `Bearer ${API_KEY}`
    }
});

