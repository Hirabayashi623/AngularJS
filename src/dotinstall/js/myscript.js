angular.module('myapp', [])
    .controller('MainController', ['$scope', function($scope) {
        $scope.users = [
            {"name":"ryo", "age": 24},
            {"name":"emi", "age": 25},
            {"name":"ru-", "age": 3}
        ];
    }])
    .controller('userItemCtrl', ['$scope', function($scope){
    	$scope.increment = function(){
    		$scope.user.age++;
    	};
    }]);


angular.module('sample_2', [])
	.controller('mainCtrl', ['$scope', function($scope) {
	    $scope.users = [
	        {"name":"ryo", "age": 24},
	        {"name":"emi", "age": 25},
	        {"name":"ru-", "age": 3}
	    ];
	    $scope.add = function(){
	    	$scope.users.push($scope.user);
	    }
	}]);