import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('logout');
  this.route('login');
  this.route('register');
  this.route('posts', function() {
    this.route('create');
  });
});

export default Router;
