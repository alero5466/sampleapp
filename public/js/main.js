/**
 * This function runs once the HTML document is fully loaded and parsed.
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('Application initialized.');

    const interactiveButton = document.getElementById('interactive-button');

    if (interactiveButton) {
        interactiveButton.addEventListener('click', () => {
            alert('Hello from your JavaScript file!');
        });
    } else {
        console.error('Could not find the interactive button on the page.');
    }
});
