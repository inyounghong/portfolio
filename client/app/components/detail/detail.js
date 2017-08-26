import angular from 'angular';
import uiRouter from 'angular-ui-router';
import detailComponent from './detail.component';
import simplyDevious from './pages/simply-devious.html';

let detailModule = angular.module('detail', [
  uiRouter
])

.config(($stateProvider) => {
    "ngInject";
    $stateProvider
    .state('detail', {
        url: "/projects/:projectId",
        template: function($stateProvider) {
            switch($stateProvider.projectId) {
                case "simply-devious":
                    return simplyDevious;
            }
        },
    })
})

.component('detail', detailComponent)

.name;

export default detailModule;
