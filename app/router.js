import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('logout');
  this.route('login');
  this.route('register');

  this.route('dashboard', function() {
    this.route('posts', function() {
      this.route('new');

      this.route('edit', {
        path: '/:id'
      });
    });
  });
});

export default Router;
