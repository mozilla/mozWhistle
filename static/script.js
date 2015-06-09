(function app() {
	'use strict';

	function ready() {
		// Online and not waiting for a pending Web Activity
		if (!navigator.onLine) {
			return;
		}

		var url = 'http://juneworkweekwhistler2015.sched.org/';
		if (window.matchMedia('(max-width: 800px)').matches) {
			url += 'mobile/';
		}
		location.replace(url);
	}

	// Called on start and on every offline/online event
	function onlineCheck() {
		if (navigator.onLine) {
			document.body.classList.remove('is-offline');
			ready();
		} else {
			document.body.classList.add('is-offline');
		}
	}

	// Called on load to ensure splashscreen
	window.addEventListener('load', function() {
		window.addEventListener('online', onlineCheck);
		window.addEventListener('offline', onlineCheck);
		onlineCheck();
	});

})();
