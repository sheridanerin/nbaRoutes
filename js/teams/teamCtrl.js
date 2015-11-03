var app = angular.module('nbaRoutes');

// this controller needs to be injected the resolved data from the router
app.controller('teamCtrl', function ($scope, $stateParams, teamService, teamdata) {

    // controller code
    $scope.teamdata = teamdata;

    $scope.newGame = {};

    $scope.showNewGameForm = false;

    $scope.toggleNewGameForm = function() {
    	$scope.showNewGameForm = !scope.showNewGameForm;
    };

    if (stateParams.team === 'utahjazz')  {
    	$scope.homeTeam = 'Utah Jazz';
    	$scope.logoPath = 'images/jazz-logo.png';
    } else if (stateParams.team === 'losangeleslakers') {
    	$scope.homeTeam = 'Los Angeles Lakers';
    	$scope.logoPath = 'images/lakers-logo.png';
    } else if (stateParams.team === 'miamiheaet') {
    	$scope.homeTeam = 'Miami Heat';
    	$scope.logoPath = 'images/heat-logo.png';
    }

    $scope.submitGame = function() {
    	$scope.homeTeam = $scope.homeTeam.split(' ').join('').toLowerCase();

    }

    teamService.addNewGame($scope.newGame).then(function(response) {

    });




});