document.addEventListener('DOMContentLoaded', () => {
    // Main scripts (Dark mode toggle removed)

    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
