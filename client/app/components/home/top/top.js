import angular from 'angular';
import template from './top.html';

let topModule = angular.module('top', [])
    .component('top', {
        template,
    })
    .name;

export default topModule;
