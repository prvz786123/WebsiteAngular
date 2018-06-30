var app = angular.module("computer",["ngRoute"])

.config(function($routeProvider){
  $routeProvider.
  when("/main",{ 
    templateUrl:"main.html",
    controller:'MainCtrl'
  })
  .when("/about",{ 
    templateUrl:"about.html",
    controller:'MainCtrl'
  })
  .when("/services",{ 
    templateUrl:"services.html",
    controller:'ServiceCtrl'
  })
  .when("/contact",{ 
    templateUrl:"contact.html",
    controller:'ContactCtrl'
  })
  .otherwise({redirectTo:"/main"})
}) 

app.controller('MainCtrl',["$scope",function($scope){
  $scope.person="John Doe"
}])

app.controller("ServiceCtrl",["$scope","$http",function($scope,$http){
  $http.get("services.json").then(function(response){
    $scope.services=response.data;
  })
}])

app.controller("ContactCtrl",["$scope","$http",function($scope,$http){
  $http.get("locations.json").then(function(response){
    $scope.locations=response.data;
  })
}])