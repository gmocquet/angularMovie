"use strict";

angular.module('myApp').controller('EditMovieController', ['$scope', 'Movie', '$routeParams', '$location', function($scope, Movie, $routeParams, $location){

    var movieId = $routeParams.id;

    Movie.fetchOne(movieId).success(function(movie){
        $scope.movie = movie;
    });

    $scope.updateMovie = function(movie){
        Movie.update(movie)
            .success(function(){
                $location.path('/movies');
            })
            .error(function(resp){
                console.log(resp);
            });
    };
}]);