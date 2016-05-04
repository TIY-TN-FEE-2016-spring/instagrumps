import TwitterProvider from 'torii/providers/twitter-oauth1';

export default TwitterProvider.extend({
  fetch(data) {
    return data;
  },
});
