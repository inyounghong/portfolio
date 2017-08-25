import angular from 'angular';
import template from './projects.html';

let projectsModule = angular.module('projects', [])
    .component('projects', {
         bindings: {
             projects: '=',
             test: '<',
         },
         template,
    })
    .name;

export default projectsModule;
