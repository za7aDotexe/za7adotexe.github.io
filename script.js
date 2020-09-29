let currentTheme = localStorage.getItem('theme');
let toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');


if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'blue.css') {
		toggleSwitch.checked = true;
		document.getElementById('theme-style').href = 'blue.css'
    }
}

function switchTheme(e) {
    if (e.target.checked) {
		document.getElementById('theme-style').href = 'blue.css'
        localStorage.setItem('theme', 'blue.css');
    }
    else {
		document.getElementById('theme-style').href = 'default.css'
        localStorage.setItem('theme', 'default.css');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);