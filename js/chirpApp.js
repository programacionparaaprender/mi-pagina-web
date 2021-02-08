


var app = angular.module('chirpApp', ['ngRoute', 'ngResource']).run(function($rootScope) {
        $rootScope.contactos = contactosjs;
});

app.controller('myCtrl', function(postService, $scope, $rootScope){
	$scope.sesion = sesionjs;
        $scope.menu = menujs;
        $scope.contactos = contactosjs;
        $scope.descripcion_p = {
            titulo:"Proyectos",
            descripcion:"Los siguientes proyectos fueron desarrollados"
        };
        $scope.proyectos = proyectosjs;
});

app.config(function($routeProvider){
	$routeProvider
		//the timeline display
		.when('/', {
			templateUrl: 'template/main.html',
			controller: 'mainController'
		})
		//the contacto luis display
		.when('/contacto_luis', {
			templateUrl: 'template/contacto_luis.html',
			controller: 'contactoLuisController'
		})
		//the contacto percy display
		.when('/contacto_percy', {
			templateUrl: 'template/contacto_percy.html',
			controller: 'contactoPercyController'
        })
        //the contacto juan display
		.when('/contacto_juan', {
			templateUrl: 'template/contacto_juan.html',
			controller: 'contactoJuanController'
		})
        //the contacto empresa
	.when('/contacto_empresa', {
			templateUrl: 'template/contacto_empresa.html',
			controller: 'contactoEmpresaController'
		})
});

app.factory('postService', function($resource){
	return $resource('/api/posts/:id');
});

app.controller('contactoEmpresaController', function(postService, $scope, $rootScope){
	$scope.sesion = sesionjs;
        $scope.menu = menujs;
        $scope.contactos = contactosjs;
        $scope.descripcion_p = {
            titulo:"Proyectos",
            descripcion:"Los siguientes proyectos fueron desarrollados"
        };
        $scope.proyectos = proyectosjs;
});

app.controller('mainController', function(postService, $scope, $rootScope){
	//$scope.sesion = sesionjs;
        $scope.menu = menujs;
        $scope.contactos = contactosjs;
        $scope.descripcion_p = {
            titulo:"Proyectos",
            descripcion:"Los siguientes proyectos fueron desarrollados"
        };
        $scope.proyectos = proyectosjs;
        $scope.proyectos_realizados_luis = proyectos_realizados_luis;
});

app.controller('contactoLuisController', function(postService, $scope, $rootScope){
	$scope.sesion = sesionjs;
        $scope.menu = menujs;
        $scope.contactos = contactosjs;
        $scope.tecnologia = []
        $scope.proyectos = servicio_comunitario_luis;
        $scope.proyectos_realizados_luis = proyectos_realizados_luis;
        $scope.trabajo_grado_luis = trabajo_grado_luis;
        $scope.obtenerDetalleTrabajoGrado = function(id){
                console.log('obtenerDetalleTrabajoGrado')
                var proyecto = {};
                for(let proyecto2 of $scope.trabajo_grado_luis){
                        if(proyecto2.id == id){
                                proyecto = proyecto2;
                        }
                }
                $scope.tecnologia = proyecto.tecnologia
                
        };
        $scope.obtenerDetalle = function(id){
                console.log('obtenerDetalle')
                var proyecto = {};
                for(let proyecto2 of $scope.proyectos_realizados_luis){
                        if(proyecto2.id == id){
                                proyecto = proyecto2;
                        }
                }
                $scope.tecnologia = proyecto.tecnologia
                
        };
});

app.controller('contactoPercyController', function(postService, $scope, $rootScope){
	$scope.sesion = sesionjs;
        $scope.menu = menujs;
        $scope.contactos = contactosjs;
        $scope.descripcion_p = {
            titulo:"Proyectos",
            descripcion:"Los siguientes proyectos fueron desarrollados"
        };
        $scope.proyectos = proyectosjs;
});

app.controller('contactoJuanController', function(postService, $scope, $rootScope){
	$scope.sesion = sesionjs;
        $scope.menu = menujs;
        $scope.contactos = contactosjs;
        $scope.descripcion_p = {
            titulo:"Proyectos",
            descripcion:"Los siguientes proyectos fueron desarrollados"
        };
        $scope.proyectos = proyectosjs;
});

app.controller('authController', function($scope, $http, $rootScope, $location){
  $scope.user = {username: '', password: ''};
  $scope.error_message = '';


});