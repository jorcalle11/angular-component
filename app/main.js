import angular from 'angular';
import uiRouter from 'angular-ui-router';
import rootComponent from './app.component';
import commons  from './common';
import speakers from './components/speaker';

const root = angular
  .module('angularComponentApp',[
    uiRouter,
    commons,
    speakers
  ])
  .component('acApp', rootComponent)

document.addEventListener('DOMContentLoaded', () => {
  angular.bootstrap(document,['angularComponentApp']);
});
