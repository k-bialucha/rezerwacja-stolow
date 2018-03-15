var app = angular.module('reservation', []).config(function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken'
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken'
});	

app.controller('reservationController', function($scope, $http) {

	$http.get('/testsite/api/').then(function(response){
		$scope.reservationsList = [];
		for (var i = 0; i < response.data.length; i++) { 
		
		var reservation = {};
		reservation.reservationText = response.data[i].reservations
		reservation.done = response.data[i].done
		$scope.reservationsList.push(reservation);
	
		}
	});
	$scope.saveData = function() {
	var data = {reservations: $scope.reservationInput, done: false}
	$http.put('/testsite/api/', data)
	};
	$scope.reservationAdd = function() {
	  $scope.reservationsList.push({reservationText: $scope.reservationInput, done: false});
	  $scope.reservationInput = '';	
	};
	$scope.remove = function() {
	var oldList = $scope.reservationsList;
	$scope.reservationsList = [];
	angular.forEach(oldList, function(x) {
	 if (!x.done) $scope.reservationsList.push(x);
	})

	}
})