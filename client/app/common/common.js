import angular from 'angular';
import Experience from './experience/experience';
import Sidebar from './sidebar/sidebar';
import Project from './project/project';

let commonModule = angular.module('app.common', [
    Experience,
    Sidebar,
    Project,
])

.name;

export default commonModule;
