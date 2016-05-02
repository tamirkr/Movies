/**
 * Created by Tamir on 30/04/2016.
 */
app.component("movieList",{
    templateUrl:"templates/movieList.html",
    bindings:{
        $router:'<'
    },
    controller:function($http){
        var ctrl = this;
        
        ctrl.$onInit = function () {
            ctrl.movies = [];
            fetchMovies().then(function (movies) {
                ctrl.movies = movies;
            });
        };
        
        function fetchMovies() {
            return $http.get('data/movies.json').then(function (response) {
                return response.data;
            });
        };

        ctrl.setRating = function (movie,newRating) {
            movie.rating = newRating;
        }

        ctrl.goTo = function (id) {
            ctrl.$router.navigate(["Details",{id:id},"Overview"]);
        }

        ctrl.upRating = function (movie) {
            if(movie.rating < 5 ){
                movie.rating += 1;
            }
        };

        ctrl.downRating = function (movie) {
            if(movie.rating > 1){
                movie.rating -= 1;
            }
        };
    }
})