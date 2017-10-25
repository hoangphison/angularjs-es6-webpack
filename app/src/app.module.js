'use strict';

import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import uiBootstrap from 'angular-ui-bootstrap';

const APP_NAME = 'ngSampleApp';

angular.module(APP_NAME, [
  uiRouter,
  uiBootstrap,
])

.constant('appConfig', {
  backendUrl: '/api/v1',
  debug: true,
  env: 'local',
  defaultTimezone: 'Asia/Ho_Chi_Minh',
})

.config(/* @ngInject */($stateProvider, $urlRouterProvider) => {

  $urlRouterProvider.when('', '/');
  $urlRouterProvider.when('/', 'dashboard');

  $stateProvider
  .state('root', {
    abstract: true,
    url: '/',
    template: '',
  })
  .state('admin', {
    abstract: true,
    url: '/admin',
    template: '',
  });



})

;

export default APP_NAME;