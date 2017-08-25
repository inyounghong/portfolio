import angular from 'angular';
import About from './about/about';
import Contact from './contact/contact';
import Home from './home/home';
import Projects from './projects/projects';
import Resume from './resume/resume';

let componentModule = angular.module('app.components', [
    Home,
    Contact,
    About,
    Projects,
    Resume,
])

.name;

export default componentModule;
