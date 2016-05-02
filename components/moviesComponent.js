/**
 * Created by Tamir on 30/04/2016.
 */
app.component("movies",{
    templateUrl:"templates/movies.html",
    $routeConfig:[
        {path:"/list",name:"MovieList",component:"movieList",useAsDefault:true},
        {path:"/about",name:"About",component:"about"},
        {path:"/detail/:id/...",name:"Details",component:"details"},
        {path:"/**",redirectTo:["MovieList"]}
    ]
})