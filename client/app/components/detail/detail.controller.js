class DetailController {
    constructor($stateParams) {
        this.name = 'detail';
        console.log($stateParams.projectId);
        this.projectId = $stateParams.projectId;
    }
}
DetailController.$inject = ["$stateParams"];
export default DetailController;
