let isDark = false;
let font = 1;
loaded(() => {
    if(localStorage.hasOwnProperty('dark')) {
        isDark = (localStorage.getItem('dark') === 'true');
    }

    const btn = $('#access_btn');
    const dial = $('#access_dial');

    btn.addEventListener('keypress', (e) => {
        if(e.key === 'Enter' || e.key === 'Spacebar') {
            dial.style.display = 'block';
        }
    })

    btn.addEventListener('keypress', (e) => {
        if(e.key === 'Escape') {
            dial.style.display = 'none';

        }
    })
});

function darkMode() {
    localStorage.setItem('dark', isDark.toString());
    isDark = !isDark;
    if(isDark) {
        $('#colors').setAttribute('href', './style/dark.css');
        $('#dark').classList.add('on');
        $('#dark').setAttribute('aria-label', 'Mode sombre activé')
    } else {
        $('#dark').classList.remove('on');
        $('#colors').setAttribute('href', './style/colors.css')
        $('#dark').setAttribute('aria-label', 'Mode sombre désactivé')

    }
}

/* Le plus simple : feuille de css dédiée
*
* */
function zoom(val) {
    if(val > 0 || font > 1 ) {
        font += val;
        $('body').style.fontSize = font + 'em';
        if(font > 2) {
            document.documentElement.style.setProperty('--width', '98%')
        }
        if(font > 3) {
            $$('.flex-between').forEach(el => {
                el.style.display = 'block';
            })
            $$('.flex-between *').forEach(el => {
                el.style.width = '98%';
                el.style.height = 'auto';
            })
            $('#navbar').style.position = 'static';
        }
    }
}
