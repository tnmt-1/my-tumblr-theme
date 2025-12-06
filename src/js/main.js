document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('darkToggle');

    // Initial Icon State
    const updateIcon = () => {
            const isDark = document.documentElement.classList.contains('dark');
            // Icon switching is handled by CSS classes (dark:hidden etc),
            // but if we needed logical updates, they would go here.
    }
    updateIcon();

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const isDark = document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            updateIcon();
        });
    }
});
