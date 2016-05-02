/**
 * Created by Tamir on 30/04/2016.
 */
var app = angular.module("app",['ngComponentRouter','ngAnimate']);

app.value("$routerRootComponent","movies");




app.component("about",{
        template:"This is the about page"
});