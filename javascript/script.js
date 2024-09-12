document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('dark');

    darkModeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        document.aboutt.classList.toggle('dark-mode');
        document.icon.classList.toggle('dark-mode');
    });
});
