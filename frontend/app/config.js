function config($stateProvider, $urlRouterProvider, $locationProvider) {

  $locationProvider.html5Mode({
  	enabled: true,
  	requireBase: false
  });

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('main', {
      url: '/',
      template: require('./main.page.html'),
      controller: 'MainCtrl',
      title: ''
    });
}

export default ['$stateProvider', '$urlRouterProvider', '$locationProvider', config];