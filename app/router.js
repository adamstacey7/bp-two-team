import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

// eslint-disable-next-line array-callback-return
Router.map(function() {
  this.route('core-team');
  this.route('not-found', { path: '/*path' });
  this.route('member', function() {
    this.route('show', { path: '/:member_id' });
    this.route('edit', { path: '/:member_id/edit' });
    this.route('create');
  });
});

export default Router;
