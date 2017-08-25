import angular from 'angular';
import AboutSection from './about/about';
import Home from './home/home';
import EducationSection from './home/education/education';
import ExperienceSection from './home/experience/experience';
import Project from './home/project/project';
import TopSection from './home/top/top';
import Projects from './projects/projects';
import Contact from './contact/contact';
import Sidebar from './sidebar/sidebar';

let componentModule = angular.module('app.components', [
    Home,
    AboutSection,
    EducationSection,
    ExperienceSection,
    Project,
    TopSection,
    Projects,
    Contact,
    Sidebar,
])

.name;

export default componentModule;
