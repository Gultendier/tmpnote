// script.js
document.addEventListener('DOMContentLoaded', (event) => {
	const noteArea = document.getElementById('noteArea');
	const toggleDarkModeButton = document.getElementById('toggleDarkMode');

	// Load saved note from sessionStorage when the page is loaded
	const savedNote = sessionStorage.getItem('note');
	if (savedNote) {
		noteArea.value = savedNote;
	}

	// Save the note to sessionStorage whenever the content changes
	noteArea.addEventListener('input', () => {
		const note = noteArea.value;
		sessionStorage.setItem('note', note);
	});

	toggleDarkModeButton.addEventListener('click', () => {
		document.body.classList.toggle('dark-mode');
		const isDarkMode = document.body.classList.contains('dark-mode');
		sessionStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
	});

	const darkModeSetting = sessionStorage.getItem('darkMode');
	if (darkModeSetting === 'enabled') {
		document.body.classList.add('dark-mode');
	}
});
