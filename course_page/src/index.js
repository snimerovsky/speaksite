import './scss/app.scss';


let ico = document.getElementById('open-left');
let left = document.getElementsByClassName('left-pannel')[0];
let left_block = document.getElementsByClassName('main')[0];
let left_box = document.getElementsByClassName('box-end')[0];
let sel = document.getElementsByClassName('default-select')[0];
let sel_items = document.querySelector('.header>.centre-box>.select-box');
let left_sel = document.querySelector('.header>.right-box>.box-name');
let left_sel_av = document.querySelector('.header>.right-box>.avatar');
let left_sel_items = document.querySelector('.header>.right-box');
let ava = document.getElementsByClassName('avatar-box')[3];

ico.addEventListener('click', () => {
    left.classList.toggle('active')
    left_box.classList.toggle('active')
    left_block.classList.toggle('active')
})

sel.addEventListener('click', () => {
    sel_items.classList.toggle('active')
})

left_sel.addEventListener('click', () => {
    left_sel_items.classList.toggle('active')
})

left_sel_av.addEventListener('click', () => {
    left_sel_items.classList.toggle('active')
})

// ava.addEventListener('click', () => {
//     ava.classList.add('hide');
// })

let more_select = document.getElementsByClassName('more-select')[0];
let more_select_box = document.getElementsByClassName('left-sideDiv-more-box')[0];

more_select.addEventListener('click', () => {
    more_select_box.classList.toggle('active')
})