import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('create-question');
  this.route('quiz');
  this.route('edit', {path: '/edit/:question_id'});
});

export default Router;
