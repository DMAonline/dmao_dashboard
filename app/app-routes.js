app.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/landing', { templateUrl: 'app/public/landing.html' })
		//.when('/landing', { templateUrl: 'app/tables/storage-table.html' })
		//.when('/landing', { templateUrl: 'app/tables/dmp-table.html' })
		//.when('/landing', { templateUrl: 'app/statistics/statistic-compilation.html' })
		.when('/', { templateUrl: 'app/public/landing.html' })
		.when('/all', { templateUrl: 'app/public/landing.html' })
		.when('/stats', { 	templateUrl: 'app/statistics/statistic-compilation.html'})
		.when('/login', { templateUrl: 'app/auth/login.html' })
		.when('/datasets', { templateUrl: 'app/tables/datasets-table.html' })
		.when('/datasetsRCUK', { templateUrl: 'app/tables/datasets-rcuk-table.html' })
		.when('/dmp', { templateUrl: 'app/tables/dmp-table.html' })
		.when('/nodmp', { templateUrl: 'app/tables/no-dmp-table.html' })
		.when('/dmps', { templateUrl: 'app/tables/dmp-status-table.html' })
		.when('/storage', { templateUrl: 'app/tables/storage-table.html' })
		.when('/compliance', { templateUrl: 'app/tables/rcuk-access-compliance-table.html' })
		.when('/data', { templateUrl: 'app/charts/data-access-chart.html' })
		.when('/metadata', { templateUrl: 'app/charts/metadata-access-chart.html' })
		// .when('/index.html', { templateUrl: 'app/components/statistic/statisticCompilationView.html' })
		.otherwise({ templateUrl: 'app/messages/error.html' });
	})
    // use the HTML5 History API to get clean URLs and remove the hashtag from the URL
    // $locationProvider.html5Mode(true);
.run(function ($rootScope, $location) {
  $rootScope.$on('$routeChangeStart', function (event, newUrl, oldUrl) {
        // console.log(newUrl);
        // console.log(oldUrl);
        if ($rootScope.loggedInUser) {
        	// console.log('logged in');
        	if (newUrl.templateUrl === 'app/public/landing.html'){
        		// console.log('attempting public page');
        		$location.path('/stats');
        	}
        }
      }
    );
  });

	// .run(function($rootScope, $location, $cookies) {
	// 	$rootScope.$on( "$routeChangeStart", function(event, next, current) {
	// 		//console.log('apikey $routeChangeStart1', ApiService.apikey);
	// 		$cookies.put('lastRoute', $location.path());

	// 		//console.log('Current route name: ' + $location.path());
	// 		//console.log('$rootScope.loggedInUser ', $rootScope.loggedInUser);

	// 		if (!$cookies.get('username')){
	// 		//if ($rootScope.loggedInUser == null) {
	// 			// no logged user, redirect to /login
	// 			//if ($location.path() === '/landing' ||
	// 			//	next.templateUrl === 'app/auth/login.html') {
	// 			//} else {
	// 			//	$location.path("/landing");
	// 			//}
	// 			$location.path("/");
	// 		} else {
	// 			if (next.templateUrl === 'app/public/landing.html') {
	// 				$location.path('/stats'));
	// 			} 
	// 			// else {
	// 				// $location.path($cookies.get('lastRoute'));
	// 			// }
	// 		}
	// 		//console.log('apikey $routeChangeStart2', ApiService.apikey);
	// 	});
	// 	//console.log('apikey $routeChangeStart3', ApiService.apikey);
	// });
