import axios from 'axios';

const KEY = 'AIzaSyCXKB7B3RnE74-rxi8jKGACY2814K8XMq0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 20,
        key: KEY
    }
});
