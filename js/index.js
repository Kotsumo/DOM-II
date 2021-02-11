// Your code goes here

// Mouseover 
document.addEventListener("mouseover", function (event) {
    event.target.style.color = 'blue';

    setTimeout(function() {
        event.target.style.color = '';
    }, 500);
}, false);

// keydown
const introColor = document.querySelector('.main-navigation')

document.addEventListener('keydown', function (event) {
    if(event.key === 'Escape'){
         introColor.style.color = 'green';
    }
})

// scroll
let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos){

}

window.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;

    if(!ticking) {
        window.requestAnimationFrame(function() {
            doSomething(last_known_scroll_position);
            ticking = false;
        });

        ticking = true;
    }
});

// load
window.addEventListener('load', () => {
    console.log('page is fully loaded')
})

// focus
focusMethod = function getFocus() {
    document.querySelector('.btn').focus();
}

console.log(focusMethod('focusing'))

// resize

// wheel

// select


// dblclick
const funbusClicky = document.querySelector('.text-content')

document.addEventListener('dblclick', function () {
    funbusClicky.style.color = 'red';
})
console.log(funbusClicky)

// onclick
const mainNav = document.querySelector('.main-navigation')

document.addEventListener('click', (event) => {
    mainNav.style.color = 'yellow'
})

console.log('we clicked!')