/**
 * Created by Tamir on 01/05/2016.
 */
app.component("accordion",{
    transclude:true,
    template:"<div class='panel-group' ng-transclude></div>",
    controller:function () {
        var ctrl = this;
        var panels = [];

        ctrl.selectPanel = function (panel) {
            for(var i in panels){
                if(panel === panels[i]){
                    panels[i].turnOn();
                }else {
                    panels[i].turnOff();
                }
            }
        }

        ctrl.addPanel = function (panel) {
            panels.push(panel);
            if(panels.length > 0 ){
                panels[0].turnOn();
            }
        }
    }
})

app.component("accordionPanel",{
    template:'<div class="panel panel-default">' +
                '<div class="panel-heading" ng-click="$ctrl.select()">' +
                '<h4 class="panel-title">{{$ctrl.heading }}</h4>' +
                '</div>'+
                '<div ng-if="$ctrl.selected" class="panel-body" ng-transclude>' +
            
                '</div> '+
                '</div>',
    transclude:true,
    bindings:{
      heading:'@'
    },
    require:{
        "parent":'^accordion'
    },
    controller:function () {
        var ctrl = this;
         ctrl.selected = false;
        
        ctrl.$onInit = function () {
            ctrl.parent.addPanel(ctrl);
        }

        ctrl.turnOn = function () {
            ctrl.selected = true;
        }

        ctrl.turnOff = function () {
            ctrl.selected = false;
        }

        ctrl.select = function () {
            ctrl.parent.selectPanel(ctrl);
        }
    }
})
