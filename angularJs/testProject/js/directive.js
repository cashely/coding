var app = angular.module('directive',[]);
app
.directive('myDirective',function(){
    return {
        replace:true,
        restrict:'A',
        scope:{
            myDlass:'=myClass',
            myId:'@'
        },
        template:'<input type="text" ng-model="myDlass"/><div class="{{myDlass}}" id="{{myId}}">test directive</div>'
    }
});