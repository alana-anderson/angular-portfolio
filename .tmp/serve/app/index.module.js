/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* global malarkey:false, moment:false */

	'use strict';

	var _indexConfig = __webpack_require__(1);

	var _indexRoute = __webpack_require__(2);

	var _indexRun = __webpack_require__(3);

	var _mainMainController = __webpack_require__(4);

	__webpack_require__(5);

	var _appComponentsItemsItemsController = __webpack_require__(6);

	var _appComponentsGithubContributorGithubContributorService = __webpack_require__(7);

	var _appComponentsWebDevTecWebDevTecService = __webpack_require__(8);

	var _appComponentsNavbarNavbarDirective = __webpack_require__(9);

	var _appComponentsMalarkeyMalarkeyDirective = __webpack_require__(10);

	angular.module('testPortfolio', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngRoute', 'toastr', 'items']).constant('malarkey', malarkey).constant('moment', moment).config(_indexConfig.config).config(_indexRoute.routerConfig).run(_indexRun.runBlock).service('githubContributor', _appComponentsGithubContributorGithubContributorService.GithubContributorService).service('webDevTec', _appComponentsWebDevTecWebDevTecService.WebDevTecService).controller('MainController', _mainMainController.MainController).controller('ItemDetailsController', _appComponentsItemsItemsController.ItemDetailsController).directive('acmeNavbar', _appComponentsNavbarNavbarDirective.NavbarDirective).directive('acmeMalarkey', _appComponentsMalarkeyMalarkeyDirective.MalarkeyDirective);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	config.$inject = ["$logProvider", "toastrConfig"];
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.config = config;

	function config($logProvider, toastrConfig) {
	  'ngInject';
	  // Enable log
	  $logProvider.debugEnabled(true);

	  // Set options third-party lib
	  toastrConfig.allowHtml = true;
	  toastrConfig.timeOut = 3000;
	  toastrConfig.positionClass = 'toast-top-right';
	  toastrConfig.preventDuplicates = true;
	  toastrConfig.progressBar = true;
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	routerConfig.$inject = ["$routeProvider"];
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.routerConfig = routerConfig;

	function routerConfig($routeProvider) {
	  'ngInject';
	  $routeProvider.when('/', {
	    templateUrl: 'app/main/main.html',
	    controller: 'MainController',
	    controllerAs: 'main'
	  }).otherwise({
	    redirectTo: '/'
	  });
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	runBlock.$inject = ["$log"];
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.runBlock = runBlock;

	function runBlock($log) {
	  'ngInject';
	  $log.debug('runBlock end');
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var MainController = (function () {
	  MainController.$inject = ["$timeout", "webDevTec", "toastr"];
	  function MainController($timeout, webDevTec, toastr) {
	    'ngInject';

	    _classCallCheck(this, MainController);

	    this.awesomeThings = [];
	    this.classAnimation = '';
	    this.creationDate = 1455928125598;
	    this.toastr = toastr;

	    this.activate($timeout, webDevTec);
	  }

	  _createClass(MainController, [{
	    key: 'activate',
	    value: function activate($timeout, webDevTec) {
	      var _this = this;

	      this.getWebDevTec(webDevTec);
	      $timeout(function () {
	        _this.classAnimation = 'rubberBand';
	      }, 4000);
	    }
	  }, {
	    key: 'getWebDevTec',
	    value: function getWebDevTec(webDevTec) {
	      this.awesomeThings = webDevTec.getTec();

	      angular.forEach(this.awesomeThings, function (awesomeThing) {
	        awesomeThing.rank = Math.random();
	      });
	    }
	  }, {
	    key: 'showToastr',
	    value: function showToastr() {
	      this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
	      this.classAnimation = '';
	    }
	  }]);

	  return MainController;
	})();

	exports.MainController = MainController;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	(function () {
	  'use strict';

	  angular.module('items', ['items.controller', 'items.service']);
	  angular.module('items.controller', []);
	  angular.module('items.service', []);
	})();

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	(function () {
	  'use strict';

	  ItemDetailsController.$inject = ["$state", "$timeout", "$stateParams", "itemsDataService"];
	  angular.module('items.controller').controller('ItemDetailsController', ItemDetailsController);

	  /** @ngInject */
	  function ItemDetailsController($state, $timeout, $stateParams, itemsDataService) {
	    var vm = this;
	    vm.showItemDetails = showItemDetails;
	    vm.item = itemsDataService.getById($stateParams.id);

	    $state.$current.data.pageSubTitle = vm.item.title;

	    function showItemDetails(id) {
	      $state.go('itemDetails', { id: id });
	    }
	  }
	})();

	/*
	export class ItemDetailsController {
	  constructor ($timeout, webDevTec, toastr, $state, $timeout, $stateParams, itemsDataService) {
	    'ngInject';

	    var vm = this;
	    vm.showItemDetails = showItemDetails;
	    vm.item = itemsDataService.getById($stateParams.id);

	    $state.$current.data.pageSubTitle = vm.item.title;
	  }

	  activate($timeout, itemsDataService) {
	    this.getItemsDataService(itemsDataService);
	  }

	  getItemsDataService(itemsDataService) {
	    this.item = itemsDataService.getTec();
	  }
	}
	*/

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var GithubContributorService = (function () {
	  GithubContributorService.$inject = ["$log", "$http"];
	  function GithubContributorService($log, $http) {
	    'ngInject';

	    _classCallCheck(this, GithubContributorService);

	    this.$log = $log;
	    this.$http = $http;
	    this.apiHost = 'https://api.github.com/repos/Swiip/generator-gulp-angular';
	  }

	  _createClass(GithubContributorService, [{
	    key: 'getContributors',
	    value: function getContributors(limit) {
	      var _this = this;

	      if (!limit) {
	        limit = 30;
	      }

	      return this.$http.get(this.apiHost + '/contributors?per_page=' + limit).then(function (response) {
	        return response.data;
	      })['catch'](function (error) {
	        _this.$log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
	      });
	    }
	  }]);

	  return GithubContributorService;
	})();

	exports.GithubContributorService = GithubContributorService;

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var WebDevTecService = (function () {
	  function WebDevTecService() {
	    'ngInject';

	    _classCallCheck(this, WebDevTecService);

	    this.data = [{
	      "id": "1",
	      "title": "TrustedInsight",
	      "subTitle": "Social Network",
	      "mainPictureUrl": "ti-front-portfolio.png",
	      "demoPictureUrl": "",
	      "logoPictureUrl": "",
	      "conceptPictureUrl": "",
	      "extraPictureUrl": "",
	      "url": "https://www.thetrustedinsight.com/news/",
	      "about": "The world's largest platform for institutional investors with 100,000 LP investor professionals in 98 countries and territories around the globe.",
	      "summaryOne": "Where users can subscribe to a variety of their favorite channels of topics ranging from alternative assets to venture capital. Bookmark interesting articles for later reading, or even crate your own news post. This news platform was created by finance lovers for the institutional investment world.",
	      "summaryTwo": "Investment Jobs, career opportunities and jobs postings on Trusted Insight. This career platform for institutional investors was created to aid in user discovery of  investment jobs, talent, alternative investment news, syndicates and top investment managers rankings.",
	      "contribution": "Social Network, News & Video, Jobs, Accounts & Subscriptions, Events, Catalogue",
	      "deliverables": "Website, Research, User Interface & Experience",
	      "languages": "Python, Django, Javascript, HTML5, CSS3, AJAX, JSON",
	      "displayOrder": 3
	    }, {
	      "id": "2",
	      "title": "TrustedInsight:CRM",
	      "subTitle": "Customer Relations Management",
	      "mainPictureUrl": "ti-front-portfolio.png",
	      "demoPictureUrl": "",
	      "logoPictureUrl": "",
	      "conceptPictureUrl": "",
	      "extraPictureUrl": "",
	      "url": "",
	      "about": "From a startup with zero income to $15,000/month in subscriptions, the staff quickly realized the need for a tool to help manage job posts, user subscriptions and overall user relationships. So we build our own native customer relations management tool. Hurray! I researched other CRMs and discovered what worked and what didn’t work for the staff. Staff user experience tests came in handy in creating features that never existed in the realm of current CRMs. Growing strong, the Trusted Insight staff still uses this tool today.",
	      "summaryOne": "",
	      "summaryTwo": "",
	      "contribution": "",
	      "deliverables": "Website, Research, User Interface & Experience",
	      "languages": "Python, Angular, Javascript, HTML5, CSS3, AJAX, JSON",
	      "displayOrder": 3
	    }, {
	      "id": "3",
	      "title": "MechMarket",
	      "subTitle": "Mechanical keys, keyboards & accessories",
	      "mainPictureUrl": "mech-front-portfolio.png",
	      "demoPictureUrl": "",
	      "logoPictureUrl": "",
	      "conceptPictureUrl": "",
	      "extraPictureUrl": "",
	      "about": "Always trying to get the latest mech keys on Reddit, but always the last one to arrive? Mechmarket aids in your quest for the perfect mech key, keyboard or keyboard accessory. It grabs the responce from reddit and displays to you the latest, most recent posts. All you have to do is click 'Grab list'. Happy Hunting!",
	      "summaryOne": "",
	      "summaryTwo": "",
	      "contribution": "Design, Data Parsing, End build",
	      "deliverables": "Design, Website, Research, User Interface & Experience",
	      "languages": "Node, Express, EJS, Javascript, HTML5, CSS3, JSON",
	      "displayOrder": 3
	    }, {
	      "id": "4",
	      "title": "Ground",
	      "subTitle": "News & reviews of the best coffee",
	      "mainPictureUrl": "ground-front-portfolio.png",
	      "demoPictureUrl": "",
	      "logoPictureUrl": "",
	      "conceptPictureUrl": "",
	      "extraPictureUrl": "",
	      "about": "Ground provides visitors with reviews of the best artisan coffee grounds for the coffee lover community at large. Discovered a new blend? Write a review about it and tell the world. Or maybe you just wanted to catch up on the latest reviews from your local baristas. Ground is your one stop for all things artisan coffee.",
	      "summaryOne": "",
	      "summaryTwo": "",
	      "contribution": "",
	      "deliverables": "IN-PROGRESS",
	      "languages": "",
	      "displayOrder": 3
	    }, {
	      "id": "5",
	      "title": "TableSorter",
	      "subTitle": "A news sorting test",
	      "mainPictureUrl": "sort-logo.png",
	      "demoPictureUrl": "",
	      "logoPictureUrl": "",
	      "conceptPictureUrl": "",
	      "extraPictureUrl": "",
	      "about": "The developer is to grab the list news articles and host. This is designed to test the developer in their attention to detail, skill and understanding of standards based development. This test looks to best practices and proper project structuring. Checkout the repository and serve up the results.",
	      "summaryOne": "",
	      "summaryTwo": "",
	      "contribution": "",
	      "deliverables": "Node, Express, EJS, Javascript, HTML5, CSS3, AJAX, JSON, GULP",
	      "languages": "",
	      "displayOrder": 3
	    }];
	  }

	  _createClass(WebDevTecService, [{
	    key: "getTec",
	    value: function getTec() {
	      return this.data;
	    }
	  }]);

	  return WebDevTecService;
	})();

	exports.WebDevTecService = WebDevTecService;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.NavbarDirective = NavbarDirective;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function NavbarDirective() {
	  'ngInject';

	  var directive = {
	    restrict: 'E',
	    templateUrl: 'app/components/navbar/navbar.html',
	    scope: {
	      creationDate: '='
	    },
	    controller: NavbarController,
	    controllerAs: 'vm',
	    bindToController: true
	  };

	  return directive;
	}

	var NavbarController = function NavbarController(moment) {
	  'ngInject';

	  // "this.creation" is available by directive option "bindToController: true"

	  _classCallCheck(this, NavbarController);

	  this.relativeDate = moment(this.creationDate).fromNow();
	};
	NavbarController.$inject = ["moment"];

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	MalarkeyDirective.$inject = ["malarkey"];
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	exports.MalarkeyDirective = MalarkeyDirective;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function MalarkeyDirective(malarkey) {
	  'ngInject';

	  var directive = {
	    restrict: 'E',
	    scope: {
	      extraValues: '='
	    },
	    template: '&nbsp;',
	    link: linkFunc,
	    controller: MalarkeyController,
	    controllerAs: 'vm'
	  };

	  return directive;

	  function linkFunc(scope, el, attr, vm) {
	    var watcher = undefined;
	    var typist = malarkey(el[0], {
	      typeSpeed: 40,
	      deleteSpeed: 40,
	      pauseDelay: 800,
	      loop: true,
	      postfix: ' '
	    });

	    el.addClass('acme-malarkey');

	    angular.forEach(scope.extraValues, function (value) {
	      typist.type(value).pause()['delete']();
	    });

	    watcher = scope.$watch('vm.contributors', function () {
	      angular.forEach(vm.contributors, function (contributor) {
	        typist.type(contributor.login).pause()['delete']();
	      });
	    });

	    scope.$on('$destroy', function () {
	      watcher();
	    });
	  }
	}

	var MalarkeyController = (function () {
	  MalarkeyController.$inject = ["$log", "githubContributor"];
	  function MalarkeyController($log, githubContributor) {
	    'ngInject';

	    _classCallCheck(this, MalarkeyController);

	    this.$log = $log;
	    this.contributors = [];

	    this.activate(githubContributor);
	  }

	  _createClass(MalarkeyController, [{
	    key: 'activate',
	    value: function activate(githubContributor) {
	      var _this = this;

	      return this.getContributors(githubContributor).then(function () {
	        _this.$log.info('Activated Contributors View');
	      });
	    }
	  }, {
	    key: 'getContributors',
	    value: function getContributors(githubContributor) {
	      var _this2 = this;

	      return githubContributor.getContributors(10).then(function (data) {
	        _this2.contributors = data;

	        return _this2.contributors;
	      });
	    }
	  }]);

	  return MalarkeyController;
	})();

/***/ }
/******/ ]);