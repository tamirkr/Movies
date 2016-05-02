/**
 * Created by Tamir on 30/04/2016.
 */
app.component("movieRating",{
    templateUrl:"templates/movieRating.html",
    bindings:{
        value:'<', //lt is an input this value will be given to me from the outside world
        max:'<',
        setRating:'&'
    },
    controller:function () {
        var ctrl = this;
        
        
        ctrl.$onInit = function () {
            ctrl.ratings = buildRatings(ctrl.value,ctrl.max);
        }

        ctrl.$onChanges = function () {
            ctrl.ratings = buildRatings(ctrl.value,ctrl.max);

        }

        function buildRatings(value,max) {
            var ratings = [];
            for(var i=1;i<=max; i++){
                var icon = i <= value ? "glyphicon-star" :"glyphicon-star-empty";
                ratings.push(icon);
            }
            return ratings;
        }
    }
})