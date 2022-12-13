window.addEventListener('DOMContentLoaded', () => {
    const navLinks = Array.from(document.querySelectorAll('nav a'));
    const sections = Array.from(document.querySelectorAll('section'));

    function updateSelection(selectedId) {
        navLinks.forEach((link) => {
            if (link.getAttribute('aria-controls') === selectedId) {
                link.classList.add('active');
                link.setAttribute('aria-selected', 'true')
            } else {
                link.classList.remove('active');
                link.removeAttribute('aria-selected');
            }
        });
        sections.forEach((section) => {
            if (section.id === selectedId) {
                section.classList.remove('hidden');
            } else {
                section.classList.add('hidden');
            }
        });
    }

    Array.from(document.querySelectorAll('nav a')).forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            updateSelection(link.getAttribute('aria-controls'));
        });
    });

    updateSelection('home');
});