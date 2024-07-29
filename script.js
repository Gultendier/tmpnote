// script.js
document.addEventListener('DOMContentLoaded', (event) => {
	const noteArea = document.getElementById('noteArea');
	const toggleDarkModeButton = document.getElementById('toggleDarkMode');

	// Load saved note from localStorage when the page is loaded
	const savedNote = localStorage.getItem('note');
	if (savedNote) {
		noteArea.value = savedNote;
	}

	// Save the note to localStorage whenever the content changes
	noteArea.addEventListener('input', () => {
		const note = noteArea.value;
		localStorage.setItem('note', note);
	});

	// Toggle dark mode
	toggleDarkModeButton.addEventListener('click', () => {
		document.body.classList.toggle('dark-mode');
		const isDarkMode = document.body.classList.contains('dark-mode');
		localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
	});

	// Load dark mode setting from localStorage
	const darkModeSetting = localStorage.getItem('darkMode');
	if (darkModeSetting === 'enabled') {
		document.body.classList.add('dark-mode');
	}
});
