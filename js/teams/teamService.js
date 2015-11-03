var app = angular.module('nbaRoutes');

app.service('teamService', ['$http', '$q', function ($http, $q) {

	this.addNewGame = function( gameObj ) {
		var url = 'https://api.parse.com/1/classes/' + gameObj.homeTeam;

		var homeTeamScore = parseInt(gameObj.homeTeamScore);
		var opponentScore = parseInt(gameObj.opponentScore);

		if (homeTeamScore > opponentScore) {
			gameObj.won = true; 
		} else {
			gameObj.won = false;
		}

		return $http ({
			method: 'POST',
			url: url,
			data: gameObj
		}).then(function(response) {
			return response;
		});
	}	

	this.getTeamData = function(team) {
		var deferred = $q.defer();

		var url = 'https://api.parse.com/1/classes/' + team;

		$http ({
			method: 'GET',
			url = url,
		}).then(function(data) {
			var results = data.data.results;
			var wins = 0;
			var losses = 0;

			results.forEach(function(game) {
				if (game.win === true) {
					wins++;
				} else {
					losses++;
				}

				results.wins = wins;
				results.losses = losses;
			});

			deferred.resolve(results);
		})

		return deferred.promise;
	}

}]);