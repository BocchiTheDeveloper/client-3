document.getElementById('toggleButton').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var button = document.getElementById('toggleButton');

    if (sidebar.classList.contains('hidden')) {
        sidebar.classList.remove('hidden');
        button.textContent = 'Close';
    } else {
        sidebar.classList.add('hidden');
        button.textContent = 'Table of Contents';
    }
});
