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

	/**
	 * Root application object, which runs all of the init/startup functions
	 * throughout the application.
	 * @type {Object}
	 */
	var application = {}

	application.deviceType = __webpack_require__(1);
	application.pageNavigationFunctions = __webpack_require__(2);
	application.magicHat = __webpack_require__(5);
	application.hoverStates = __webpack_require__(6);
	application.sendMail = __webpack_require__(4);
	application.headerDock = __webpack_require__(3);
	application.wandClick = __webpack_require__(7);

	/**
	 * Runs all inits.
	 */
	application.init = function() {
		this.deviceType.check();
		this.magicHat.init();
		this.hoverStates.init();
		this.sendMail.init();
		this.headerDock.init();
		//this.wandClick.init();
	}

	application.init();


/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * Setup deviceType object
	 * @type {Object}
	 */
	var deviceType = {};

	/**
	 * Device keywords when navigator.userAgent (a native js function which 
	 * checks the device user is using) gets called.
	 * 
	 * @type {Array}
	 */
	deviceType.devices = [
		'phone',
		'ipad',
		'android',
		'tablet',
		'kfapwi'
	];


	/**
	 * Called when deviceType.check is called. Checks the device type
	 * by using navigator.userAgent. The string that comes from it is
	 * compared against deviceType.devices and returns true (if it is
	 * found in the array) or false (not found).
	 * 
	 * @return {boolean}
	 */
	deviceType.detectDevice = function() {
		var i = 0;
		var devices = this.devices;
		var devicesLength = devices.length;
		var userAgent = navigator.userAgent.toLowerCase();

		for (i = 0; i < devicesLength; i++) {
			if(userAgent.search(devices[i]) > -1) {
				return true;
			}
		}

		return false;
	};


	/**
	 * Adds 'desktop' to the DOM's #mainContainer element.
	 */
	deviceType.addClassToDesktop = function () {
		var mainContainer = document.getElementById("mainContainer");

		if (mainContainer !== null) {
			mainContainer.classList.add('desktop');
		}
	};


	/**
	 * Calls deviceType.detectDevice which returns a boolean. If false
	 * is returned (mobile device keywords not found in navigator.userAgent),
	 * then desktop class is added to #mainContainer.
	 */
	deviceType.check = function() {
		if(!this.detectDevice()) {
			this.addClassToDesktop();
		}
	};


	module.exports = deviceType;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Setup pageNavigationFunctions object to export for access in main.js
	 * @type {Object}
	 */

	var pageNavigationFunctions = {};
	var headerDock = __webpack_require__(3);
	var sendMail = __webpack_require__(4);

	var mainContent = document.getElementById('mainContent');

	//History API
	$(function (event) {
	    //Binds about email link if it exists
	    sendMail.getAboutMailLinkAndBindClick();

	    var load = function (url) {
	    	var assembledUrl = url + 'index.html';

	        $.ajax({
	        	url: assembledUrl,
	        	dataType: 'html'
	        }).done(function(data) {
	        	var html = $($.parseHTML(data)).find("#mainContent").html();
	        	$("#mainContent").html(html);

	            //Google Analytics virtual pageview
	            ga('set', 'page', url);
	            ga('send', 'pageview');

	            headerDock.hardUndock();

	            headerDock.searchPath();

	        	pageNavigationFunctions.animateFadeIn();

	            //Binds about email link if it exists
	            sendMail.getAboutMailLinkAndBindClick();
	        }).fail(function() {
	        	console.log('failed');
	        });
	    };

	    //Set history uid to track if page is visited for state loading
	    if (history.uid === undefined) {
	        history.uid = 1;
	    }

	    //push state on load:
	    if (history.state === null) {
	        var currentUrl = window.location.href;

	        history.createdState = {};
	        history.createdState.url = currentUrl;
	    }

	    $(document).on('click', '.page-link', function (e) {
	        e.preventDefault();

	        var $this = $(this),
	            url = $this.attr("href"),
	            title = $this.attr('data-title');

	        if (!this.hasAttribute('data-link-type')) {
	            pageNavigationFunctions.animateFadeOut();

	            setTimeout(function() {
	    			history.pushState({
	    	            url: url,
	    	            title: title
	    	        }, title, url);

	    	        document.title = title;

	    	        window.scrollTo(0, 0);

	                load(url);
	            }, 300);
	        } else {
	            var externalLink = this.getAttribute('href');
	            var newPage = window.open(externalLink, '_blank');

	            if (newPage) {
	                newPage.focus();
	            } else {
	                alert('Please enable popups to view page');
	            }
	        }
	    });

	    $(window).on('popstate', function (e) {
	        var state = e.originalEvent.state;
	        var createdState = history.createdState;

	        if (state !== null) {
	            document.title = state.title;
	            load(state.url);
	        } else if (history.uid !== null && history.createdState !== undefined) {
	            load(history.createdState.url);
	        } else {
	            load("/");
	        }

	        //Binds about email link if it exists
	        sendMail.getAboutMailLinkAndBindClick();
	    });
	});

	/**
	 * Adds page fade when user clicks on a link
	 */
	pageNavigationFunctions.animateFadeOut = function() {
		mainContent.classList.add('page-fade');
	}


	/**
	 * Removes page fade when user lands on new page
	 */
	pageNavigationFunctions.animateFadeIn = function() {
		mainContent.classList.remove('page-fade');
	}

	module.exports = pageNavigationFunctions;

/***/ },
/* 3 */
/***/ function(module, exports) {

	var headerDock = {};

	var mainContainer;
	var $header; //use jquery for easy, concise animation code
	var body;
	var finalSection;
	var triggerHeight;

	var workStudyPages = {
		amma : 'amma',
		dignityMeals: 'dignity-meals'
	};

	/**
	 * When the user clicks on a link, call this function to interrupt undockHeader
	 * and prevent fade bug
	 * @return {[type]}
	 */
	headerDock.hardUndock = function() {
		$header = $('#header');
		mainContainer.classList.remove('header-docked');
		$header.stop().removeClass('docked').show();
		$header.css({'opacity': '.9'}); //fixes partial fade in bug
	}

	headerDock.undockHeader = function() {
		//turn off scroll out
		document.removeEventListener('scroll', headerDock.checkPositionForUndock);

		$header.stop().fadeOut(400, function() {
			//turn on scroll into
			document.addEventListener('scroll', headerDock.checkPositionForDock);

			$header.removeClass('docked').show();
			mainContainer.classList.remove('header-docked');
		});
	};

	headerDock.dockHeader = function() {
		//turn off scroll into
		document.removeEventListener('scroll', headerDock.checkPositionForDock);

		$header.stop().hide().addClass('docked').fadeIn(400, function() {
			//turn on scroll out
			document.addEventListener('scroll', headerDock.checkPositionForUndock);
		});

		mainContainer.classList.add('header-docked');
	};

	headerDock.checkPositionForUndock = function() {
		triggerHeight = window.innerHeight/2;

		if (body.scrollTop < (finalSection.offsetTop - triggerHeight)) {
			//undock header
			headerDock.undockHeader();
		}
	};

	headerDock.checkPositionForDock = function() {
		triggerHeight = window.innerHeight/2;

		if (body.scrollTop > (finalSection.offsetTop - triggerHeight)) {
			//dock header
			headerDock.dockHeader();
		}

	};

	headerDock.getMainContainer = function() {
		mainContainer = document.getElementById('mainContainer');
	};

	/**
	 * This function is also accessed in pageNavigationFunctions.js, when
	 * a page link is clicked.
	 * @return {[type]}
	 */
	headerDock.searchPath = function() {
		var currentUrl = window.location.href;
		var currentPath = currentUrl.split('/')[3];

		for (key in workStudyPages) {
			if (workStudyPages[key] === currentPath) {
				headerDock.bindEventListenersAndGetElements();
				return;
			} else {
				//This is in case the scroll event is already active and the user
				//ajax's the new page in that isn't a work study. Scroll listener
				//has to turn off on non work study pages.
				document.removeEventListener('scroll', headerDock.checkPositionForDock);
				document.removeEventListener('scroll', headerDock.checkPositionForUndock);
			}
		}
	};

	headerDock.checkLocationAndBindLinks = function() {
		//Check url on initial load
		$(document).ready(function() {
			headerDock.searchPath();
		});

		//Check url when use pops state
		$(window).on('popstate', function (e) {
			headerDock.searchPath();
		});
	};

	headerDock.bindEventListenersAndGetElements = function() {
		$header = $('#header');
		body = document.querySelector('body');
		finalSection = document.getElementById('finalSection');

		document.removeEventListener('scroll', headerDock.checkPositionForDock);
		document.addEventListener('scroll', headerDock.checkPositionForDock);
	};

	headerDock.init = function() {
		this.getMainContainer();
		this.checkLocationAndBindLinks();
	};

	module.exports = headerDock;

/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * Setup sendMailSetup object
	 * @type {Object}
	 */
	var sendMailSetup = {};

	var mailLink;
	var aboutMailLink;

	/**
	 * Sets up the string needed for mailto to run and opens native email app
	 * @param {object} e - event object to prevent default for clicked email link
	 */
	sendMailSetup.sendMail = function(e) {
		e.preventDefault();

		var name = 'traysheeshee';
		var service = 'gmail.com';
		var subject = '?Subject=Hello';

		parent.location = 'mail'+'to:'+name+'@'+service+subject;
	};

	/**
	 * Populates email address in about section.
	 */
	sendMailSetup.populateEmail = function(emailElement) {
		var name = 'traysheeshee';
		var service = 'gmail.com';

		emailElement.innerHTML = name + '@' + service;
	};

	/**
	 * Standard get element function to get all elements needed in this file
	 */
	sendMailSetup.getElements = function() {
		mailLink = document.getElementById('mailLink');
	};

	/**
	 * Gets the email link if user is on the about me page
	 */
	sendMailSetup.getAboutMailLinkAndBindClick = function() {
		aboutMailLink = document.getElementById('aboutMailLink');

		if (aboutMailLink !== null) {
			aboutMailLink.addEventListener('click', sendMailSetup.sendMail);		
			sendMailSetup.populateEmail(aboutMailLink);
		}
	};

	/**
	 * Binds event listener click of email link
	 */
	sendMailSetup.bindEventListeners = function() {
		mailLink.addEventListener('click', sendMailSetup.sendMail);
	};


	/**
	 * Initialization
	 */
	sendMailSetup.init = function() {
		sendMailSetup.getElements();
		sendMailSetup.bindEventListeners();
	};

	module.exports = sendMailSetup;

/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Setup magicHatAnimations object to export for access in main.js
	 * @type {Object}
	 */
	var magicHatAnimations = {};

	var magicHatContainer;
	var magicHat;
	var mainContainer;
	var rabbitWindow;
	var desktopClass; 
	var removeStarsOverlay;

	/**
	 * Adds spin-hat class to magicHatContainer
	 */
	magicHatAnimations.animateSpin = function() {
		magicHatContainer.classList.add('spin-hat');
	};


	/**
	 * Creates the animation of making the hat fade into the transparent
	 * version (using two images; one superimposed ontop of another and
	 * fading the top image)
	 */
	magicHatAnimations.emptyHat = function() {
		var emptyHat = document.createElement("img");

		emptyHat.setAttribute('id', 'emptyHat');
		emptyHat.setAttribute('src', '../assets/empty-hat.png');

		magicHat.classList.add('move-hat-over-empty-hat');
		magicHatContainer.appendChild(emptyHat);
		magicHat.classList.add('empty-out-hat');
	};


	/**
	 * Removes all star overlays and terminates the starFall animation,
	 * rotating the hat back to normal upright position
	 */
	magicHatAnimations.removeStarsOverlay = function() {
		clearTimeout(removeStarsOverlay);

		[].slice.call(document.querySelectorAll('.js-overlay'))
			.forEach(function (element) {
				element.parentNode.removeChild(element);
			});

		magicHatContainer.classList.remove('spin-hat');

		mainContainer.removeEventListener('click', magicHatAnimations.removeStarsOverlay);
	};


	/**
	 * Terminates the rabbit animation, rotating the hat back to normal 
	 * upright position.
	 */
	magicHatAnimations.removeRabbit = function() {
		rabbitWindow.removeChild(document.querySelector('.js-rabbit'));

		magicHatContainer.classList.remove('spin-hat');
	};


	/**
	 * Sets the 20 second cooldown before the user is allowed to play the 
	 * animation again.
	 */
	magicHatAnimations.setCooldown = function() {
		setTimeout(function() {
			var emptyHat = document.getElementById('emptyHat');

			magicHat.classList.remove('move-hat-over-empty-hat');
			magicHat.classList.remove('empty-out-hat');

			emptyHat.parentNode.removeChild(emptyHat);
			magicHatContainer.addEventListener('click', magicHatAnimations.startAnimation);
		}, 20000);
	};


	/**
	 * Function to draw 18 stars with random dimensions and locations, and
	 * then append them onto the canvas being passed into it.
	 *
	 * @param {object} canvasElement - The canvas where the stars will be drawn on
	 */
	magicHatAnimations.drawStars = function(canvasElement) {
		for (var i = 0; i < 18; i++) {
			var locationX = Math.floor((Math.random() * 100) + 1);
			var locationY = Math.floor((Math.random() * 100) + 1);
			var dimensions = Math.floor((Math.random() * 5) + 1);
			var star = document.createElement("div");
			
			star.style.height = dimensions + "px";		
			star.style.width = dimensions + "px";

			star.style.top = locationY + "%";
			star.style.left = locationX + "%";

			star.setAttribute('class', 'star');

			canvasElement.appendChild(star);
		}

		return canvasElement;
	}


	/**
	 * Initializes the starFall animation, creating the canvasses and setting
	 * the appropriate classes as well as removing them when time's up.
	 */
	magicHatAnimations.starFall = function() {
		var canvasForeground = document.createElement("div");
		var canvasBackground = document.createElement("div");

		canvasForeground.setAttribute('class', 'stars-overlay foreground js-overlay');
		canvasBackground.setAttribute('class', 'stars-overlay background js-overlay');

		mainContainer.appendChild(magicHatAnimations.drawStars(canvasForeground));
		mainContainer.appendChild(magicHatAnimations.drawStars(canvasBackground));

		removeStarsOverlay = setTimeout(function() {
			magicHatAnimations.removeStarsOverlay();
		}, 6000);

		setTimeout(function() {
			canvasForeground.classList.add('move-canvas');
			canvasBackground.classList.add('move-canvas');

			mainContainer.addEventListener('click', magicHatAnimations.removeStarsOverlay);
		}, 200);

		setTimeout(function() {
			canvasForeground.classList.add('fade-canvas');
			canvasBackground.classList.add('fade-canvas');
		}, 4000);
	};


	/**
	 * Initializes the rabbit coming out of the hat animation by creating
	 * the image and loading its src.
	 */
	magicHatAnimations.rabbitPop = function() {
		var rabbitImage = document.createElement("img");

		rabbitImage.setAttribute('src', '../assets/white-bunny-V3.png');
		rabbitImage.classList.add('js-rabbit');
		rabbitWindow.appendChild(rabbitImage);

		setTimeout(function() {
			magicHatAnimations.removeRabbit();
		}, 6000);

		setTimeout(function() {
			rabbitImage.classList.add('rabbit-move');
		}, 200);

		setTimeout(function() {
			if (rabbitImage !== null) {
				rabbitImage.classList.remove('rabbit-move');
			}
		}, 5000);
	};


	/**
	 * Before any animation is loaded, we have to first determine which
	 * animation will be run here in this function. If the user is viewing
	 * on a desktop, the starFall animation will run. Otherwise, the
	 * rabbitPop animation (on mobile) will run.
	 */
	magicHatAnimations.determineAnimation = function() {
		desktopClass = document.querySelector('.desktop');

		if (desktopClass !== null) {
			magicHatAnimations.starFall();
		} else {
			magicHatAnimations.rabbitPop();
		}

		magicHatAnimations.setCooldown();
	};


	/**
	 * First function to run when the hat is clicked on. Click is disabled
	 * to prevent repeated spamming. The hat turns, starts to fade into the
	 * empty hat, and then determines which animation to play.
	 */
	magicHatAnimations.startAnimation = function() {
		magicHatContainer.removeEventListener('click', magicHatAnimations.startAnimation);
		magicHatAnimations.animateSpin();
		magicHatAnimations.emptyHat();
		magicHatAnimations.determineAnimation();
	};


	/**
	 * Standard get element function to get all elements needed in this file
	 */
	magicHatAnimations.getElements = function() {
		magicHatContainer = document.getElementById('magicHatContainer');
		magicHat = document.getElementById('magicHat');
		mainContainer = document.getElementById('mainContainer');
		rabbitWindow = document.getElementById('rabbitWindow');
	};


	/**
	 * Binds event listener for click on the magic hat
	 */
	magicHatAnimations.bindEventListeners = function() {
		if (magicHatContainer !== null) {
			magicHatContainer.addEventListener('click', magicHatAnimations.startAnimation);
		}
	};


	/**
	 * Initialization
	 */
	magicHatAnimations.init = function() {
		this.getElements();
		this.bindEventListeners();
	}

	module.exports = magicHatAnimations;

/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * Setup hoverStates object to export for access in main.js
	 * @type {Object}
	 */
	var hoverStates = {};

	var logo;
	var logoImage;
	var footerLinks;

	/**
	 * Changes logo image to pink version when mouse hovers over
	 */
	hoverStates.mouseOverLogo = function() {
		logoImage.setAttribute('src', '../assets/logo-pink.png');
	};


	/**
	 * Changes logo image to default version when mouse leaves
	 */
	hoverStates.mouseLeaveLogo = function() {
		logoImage.setAttribute('src', '../assets/logo.png');
	};

	/**
	 * Changes footer icon to pink version when hovered
	 * @param  {Object}
	 * @return {[type]}
	 */
	hoverStates.mouseOverFooterLink = function(element) {
		var mouseOverSrc = element.getAttribute('data-src');
		var mouseLeaveSrc = element.getAttribute('src');
		
		element.setAttribute('src', mouseOverSrc);

		element.setAttribute('data-src', mouseLeaveSrc);
	};

	/**
	 * Changes footer icon to default navy when mouse leaves
	 * @param  {Object}
	 * @return {[type]}
	 */
	hoverStates.mouseLeaveFooterLink = function(element) {
		var mouseOverSrc = element.getAttribute('data-src');
		var mouseLeaveSrc = element.getAttribute('src');
		
		element.setAttribute('src', mouseOverSrc);

		element.setAttribute('data-src', mouseLeaveSrc);
	};


	/**
	 * Standard get element function to get all elements needed in this file
	 */
	hoverStates.getElements = function() {
		logo = document.getElementById('logo');
		logoImage = document.querySelector('#logo img');
		footerLinks = document.querySelectorAll('.footer-links img');
	};


	/**
	 * Binds event listener for mouseover and mouseleave of the logo.
	 */
	hoverStates.bindEventListeners = function() {
		logo.addEventListener('mouseover', hoverStates.mouseOverLogo);
		logo.addEventListener('mouseleave', hoverStates.mouseLeaveLogo);

		[].slice.call(footerLinks).forEach(function(element) {
			element.addEventListener('mouseover', function(e) {
				hoverStates.mouseOverFooterLink(this);
			});

			element.addEventListener('mouseleave', function(e) {
				hoverStates.mouseLeaveFooterLink(this);
			});
		});
	};


	/**
	 * Initialization
	 */
	hoverStates.init = function() {
		hoverStates.getElements();
		hoverStates.bindEventListeners();
	};


	module.exports = hoverStates;

/***/ },
/* 7 */
/***/ function(module, exports) {

	var wandClick = {};
	var body = document.getElementsByTagName('body')[0];

	wandClick.getCursorLocation = function(e) {
		var cursorLocationX = e.clientX + window.scrollX;
		var cursorLocationY = e.clientY + window.scrollY;

		wandClick.markSparkleLocations(cursorLocationX, cursorLocationY);
	};

	wandClick.markSparkleLocations = function(coordinateX, coordinateY) {
		var sparkles = {}
		sparkles.pinkSparkle = {};
		sparkles.blueSparkle = {};
		sparkles.yellowSparkle = {};

		//Top left
		sparkles.pinkSparkle.X = coordinateX - 8;
		sparkles.pinkSparkle.Y = coordinateY - 8;
		sparkles.pinkSparkle.className = 'pink-sparkle';

		//Bottom left
		sparkles.blueSparkle.X = coordinateX - 8;
		sparkles.blueSparkle.Y = coordinateY + 8;
		sparkles.blueSparkle.className = 'blue-sparkle';

		//Directly right
		sparkles.yellowSparkle.X = coordinateX + 8;
		sparkles.yellowSparkle.Y = coordinateY;
		sparkles.yellowSparkle.className = 'yellow-sparkle';

		wandClick.createSparkleObjects(sparkles);
	};

	wandClick.createSparkleObjects = function(sparkles) {
		for (sparkle in sparkles) {
			var sparkleElement = document.createElement('div');
			sparkleElement.classList.add(sparkles[sparkle].className);
			sparkleElement.style.left = sparkles[sparkle].X + 'px';
			sparkleElement.style.top = sparkles[sparkle].Y + 'px';
			body.appendChild(sparkleElement);
			wandClick.animateFade(sparkleElement);
		}
	}

	wandClick.animateFade = function(sparkleElement) {
		setTimeout(function() {
			sparkleElement.classList.add('sparkle-fade');	
		}, 200)
		
		setTimeout(function() {
			sparkleElement.parentNode.removeChild(sparkleElement);
		}, 2000);
	};

	wandClick.bindEventListeners = function() {
		document.addEventListener('click', wandClick.getCursorLocation);
	};

	wandClick.init = function() {
		this.bindEventListeners();
	};

	module.exports = wandClick;

/***/ }
/******/ ]);