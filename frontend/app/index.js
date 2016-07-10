require('../styles/reset.less');

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import MainCtrl from './main.ctrl.js';
import appConfig from './config.js';

console.log("ecoooo!");
angular.module('app', [uiRouter])
  .controller('MainCtrl', MainCtrl)
  .config(appConfig);
