```javascript
// scripts.js
document.addEventListener('DOMContentLoaded', (event) => {
    // Add any JavaScript functionality here
    console.log('Nappy Cuts Lawn Service website loaded');

    // Example: Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'