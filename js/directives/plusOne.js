/**
 * Created by edgilmore on 6/16/2015.
 */
app.directive('plusOne', function(){
    return{
        restrict: 'E',
        scope: {},
        templateUrl: 'js/directives/html/plusOne.html',
        link: function like (scope, element, attrs) {
            scope.like = function (){
                element.toggleClass('btn-like');
            };
        }
    };
});
