'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClosedModal = document.querySelector('.closed-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
console.log(btnShowModal);



    const   openModel =  function(){
        console.log('Button Clicked');
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
}

const closedModel = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}




for (let i = 0; i < btnShowModal.length; i++)
    btnShowModal[i].addEventListener
        ('click', openModel);

    

    btnClosedModal.addEventListener('click', closedModel);

    overlay.addEventListener('click', closedModel); 