import angular from 'angular';
import template from './education.html';

let educationModule = angular.module('education', [])
    .component('education', {
        template,
    })
    .name;

export default educationModule;
