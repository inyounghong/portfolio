import projects from './../../data/projects.json';

class HomeController {
    constructor($http) {
        this.name = 'home';
        this.projects = projects;
    }
}

HomeController.$inject = ["$http"];

export default HomeController;
