var app = angular.module('Standup', []);

app.controller('FormController', function($scope, $http){
	$scope.companyData = {};

	$scope.register = function(){
		$http.post('/standup/register', $scope.companyData)
			.success(function(data){
				$scope.companyData = {};
				console.log('Data' + data);
			})
			.error(function(err){
				console.log('Error: ' + err);
			});
	};	


});