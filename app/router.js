import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('admin', function() {
    this.route('login');
    this.route('homepage', function() {
      this.route('announcements');
    });
  });
  this.route('register');
  this.route('calendar', function() {
    this.route('detail');
  });
});

export default Router;
