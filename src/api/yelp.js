//96b70679b512632697499dd9ba9220221e18cf0a
/* import axios from 'axios';

export default axios.create({
    baseURL:
}) */
//12cmhf2ezR16ZkcHWNYKoDpiaro1zlqUjwkA7nVxnWzryiTwFDk35PJiucoLhjjFY9ECD8GTBGaHBg5yv5YDLiszKQx8EMvm30ply0UWoHQOnYFjLozpYnZOx-UsXXYx

import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer l2cmhf2ezRl6ZkcHWNYKoDpiaro1zlqUjwkA7nVxnWzryiTwFDk35PJiucoLhjjFY9ECD8GTBGaHBg5yv5YDLiszKQx8EMvm30ply0UWoHQOnYFjLozpYnZOx-UsXXYx'
    }
});