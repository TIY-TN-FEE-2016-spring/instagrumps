import Loopback from 'ember-simple-auth-loopback/authenticators/loopback';
import config from 'instagrump/config/environment';

export default Loopback.extend({
  loginEndpoint: `${config.apiHost}/api/users/login?include=user`,
});
