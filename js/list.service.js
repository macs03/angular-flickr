(()=>{
    'use strict'
    angular
        .module('flickrApp')
        .factory('listService',listService);

        listService.$inject =['$http'];

        function listService($http) {
            var photos = []
            var service = {
                getPhotosApi: getPhotosApi,
                getPhotos: getPhotos
            }

            return service;

            function getPhotosApi(searchTerm) {
                return $http({
                    method:'GET',
                    url:'https://api.flickr.com/services/rest',
                    params: {
                        method:'flickr.photos.search',
                        api_key:'b16e55e395ccfcb10fbb0ca0ac9b3fcf',
                        text: searchTerm,
                        per_page:20,
                        format: 'json',
                        nojsoncallback: 1
                    }
                })
                .then(getPhotosComplete)
                .catch(getPhotosFailed)

                function getPhotosComplete(response) {
                    console.log("success");
                    console.log(response.data);
                    photos = response.data;
                }

                function getPhotosFailed(response) {
                    console.log("error");
                    console.log(response);
                }

            }

            function getPhotos() {
                return photos;
            }

        }
})();
