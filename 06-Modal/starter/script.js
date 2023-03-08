'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClosedModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
console.log(btnShowModal);



    const   openModel =  function(){
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

    document,addEventListener('keydown', function(e){     //naming this function and calling it it will give us the key that was pressed
        console.log(e.key);

        if(e.key === 'Escape' && !modal.classList.contains('hidden' )){
                                                        //we can aggregate these two if by using &&
                closedModel();
         }
        
    });