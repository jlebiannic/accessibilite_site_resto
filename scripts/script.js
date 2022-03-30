function $(selector) {
    return document.querySelector(selector);
}

function loaded(func) {
    return document.addEventListener('DOMContentLoaded', func);
}

function $$(selector) {
    return document.querySelectorAll(selector);
}

function clic(el, callback) {
    return el.addEventListener('click', callback)
}

function enter(callback) {
    return document.addEventListener('keypress', (event) => {
        if(event.key === 'Enter') {
            (callback ())
        }
    });
}
