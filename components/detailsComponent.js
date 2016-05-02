/**
 * Created by Tamir on 01/05/2016.
 */
app.component("details",{
    templateUrl:"templates/movieDetail.html",
    $routeConfig:[
        {path:'/overview',component:"overview",name:"Overview"},
        {path:'/cast',component:"cast",name:"Cast"},
        {path:'/director',component:"director",name:"Director"}
    ],
    $canActivate:function ($nextInstruction,$prevInstruction) {
        console.log("$canActivate",arguments);
        return true;
    },
    controller:function () {
        var ctrl = this;

        ctrl.$routerOnActivate = function (next) {
            console.log("$routerOnActivate",this,arguments);
            ctrl.id = next.params.id;
        }

    }
})

app.component("overview",{
    template:"This is the overview"
})
app.component("cast",{
    template:"This is the cast"
})
app.component("director",{
    template:"This is the director"
})