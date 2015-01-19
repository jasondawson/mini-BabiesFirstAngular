var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope) {

	$scope.friends = ['Tim', 'Eric', 'Ellen', 'Lynea'];

	$scope.addFriend = function() {
		$scope.friends.push($scope.newFriend);
		$scope.newFriend = '';
	};

});
