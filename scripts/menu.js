document.getElementById('options-icon').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});

// outtside click :3 :D
window.addEventListener('click', function(event) {
    var menu = document.getElementById('menu');
    var optionsIcon = document.getElementById('options-icon');
    if (event.target !== optionsIcon && !optionsIcon.contains(event.target)) {
        menu.style.display = 'none';
    }
});
