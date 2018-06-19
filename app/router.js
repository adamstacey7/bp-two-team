import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('core-team');
  this.route('create-member', { path: '/member/create' });
  this.route('edit-member', { path: '/member/:member_id/edit' });
  this.route('not-found', { path: '/*path' });
});

export default Router;
