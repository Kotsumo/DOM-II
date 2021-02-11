// Your code goes here

// Mouseover 
document.addEventListener("mouseover", function (event) {
    event.target.style.color = 'blue';

    setTimeout(function() {
        event.target.style.color = '';
    }, 500);
}, false);

// keydown
document.addEventListener('keydown', function (event) {
    if(event.key === 'Escape'){
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

// focus

// resize

// wheel

// select

// dblclick

const funbusClicky = document.querySelector('.main_navigation')

funbusClicky.addEventListener('dblclick', function (event) {
    funbusClicky.setAttribute.color = 'green';
})

// drag/drop