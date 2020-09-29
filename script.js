let theme = localStorage.getItem('theme')
let toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');


if(theme == null){
	setTheme(light);
}else{
	setTheme(theme);
	toggleSwitch.checked = true;
}

function setTheme(currentTheme){
	if(currentTheme == 'light'){
		document.getElementById('theme-style').href = 'default.css'
	}
	if(currentTheme == 'blue'){
		document.getElementById('theme-style').href = 'blue.css'
	}
	localStorage.setItem('theme', currentTheme);
}

toggleSwitch.addEventListener( 'change', function() {
    if(this.checked) {
        setTheme('blue');
    } else {
	    setTheme('light');
	}
});