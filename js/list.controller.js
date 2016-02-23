(()=>{
    'use strict'
    angular
        .module('flickrApp')
        .controller('ListController',ListController);

        ListController.$inject = ['$scope','$http','listService'];

        function ListController($scope,$http,listService){

            var vm = this;
            vm.results =[];
            vm.isSearching = false;
            vm.search = search;

            function search(){
                vm.isSearching = true;
                listService.getPhotosApi(vm.searchTerm)
                    .then(()=>{
                        vm.isSearching = false;
                        vm.results = listService.getPhotos();
                    })
            }
        }
})();
