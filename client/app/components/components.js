import angular from 'angular';
import AboutSection from './about/about';
import Home from './home/home';
import EducationSection from './home/education/education';
import ExperienceSection from './home/experience/experience';
import ProjectsSection from './home/projects/projects';
import TopSection from './home/top/top';
import Projects from './projects/projects';
import Contact from './contact/contact';

let componentModule = angular.module('app.components', [
    Home,
    AboutSection,
    EducationSection,
    ExperienceSection,
    ProjectsSection,
    TopSection,
    Projects,
    Contact,
])

.name;

export default componentModule;
