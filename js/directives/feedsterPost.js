/**
 * Created by edgilmore on 6/16/2015.
 */
app.directive('feedsterPost', function () {
    return{
        restrict: 'E',
        scope: {
            post: '='
        },
        templateUrl: 'js/directives/html/feedsterPost.html'
    };
});
