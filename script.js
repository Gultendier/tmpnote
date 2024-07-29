// script.js

// Function to set a cookie
function setCookie(name, value, days) {
	const date = new Date();
	date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
	const expires = "expires=" + date.toUTCString();
	document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
}

// Function to get a cookie
function getCookie(name) {
	const nameEQ = name + "=";
	const ca = document.cookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) === ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
	}
	return null;
}

// Function to erase a cookie
function eraseCookie(name) {
	document.cookie = name + '=; Max-Age=-99999999;';
}

document.addEventListener('DOMContentLoaded', () => {
	const noteArea = document.getElementById('noteArea');
	const toggleDarkModeButton = document.getElementById('toggleDarkMode');

	// Load saved note from cookies when the page is loaded
	const savedNote = getCookie('note');
	if (savedNote) {
		noteArea.value = savedNote;
	}

	// Save the note to cookies whenever the content changes
	noteArea.addEventListener('input', () => {
		const note = noteArea.value;
		setCookie('note', note, 30); // Cookie expires in 30 days
	});

	// Toggle dark mode
	toggleDarkModeButton.addEventListener('click', () => {
		document.body.classList.toggle('dark-mode');
		const isDarkMode = document.body.classList.contains('dark-mode');
		setCookie('darkMode', isDarkMode ? 'enabled' : 'disabled', 30);
	});

	// Load dark mode setting from cookies
	const darkModeSetting = getCookie('darkMode');
	if (darkModeSetting === 'enabled') {
		document.body.classList.add('dark-mode');
	}
});
