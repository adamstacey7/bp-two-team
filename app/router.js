import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('core-team');
  this.route('not-found', { path: '/*path' });
  this.route('member', function() {
    this.route('show', { path: '/:member_id' }, function() {
      this.route('create');
    });
    this.route('create');
  });
});

export default Router;
