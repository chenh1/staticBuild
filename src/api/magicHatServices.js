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