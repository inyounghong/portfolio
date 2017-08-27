import projects from './../../data/projects.json';

class DetailController {
    constructor($stateParams, $location) {
        this.name = 'detail';
        this.projectId = $stateParams.projectId;
        this.imagePath = $location.absUrl().split('/').slice(0, 3).join("/") + "/images/" + $stateParams.projectId + "/";

        console.log(projects[this.projectId]);
    }
}
DetailController.$inject = ["$stateParams", "$location"];
export default DetailController;
