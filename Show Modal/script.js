'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.close-modal');
const showModal = document.querySelectorAll('.show-modal');
console.log(showModal);

for (let i = 0; i < showModal.length; i++) {
    // console.log(showModal[i].textContent);
    showModal[i].addEventListener('click', function() {
        // console.log('button click');
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}

//can also implement open modal
//below is close modal
const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// fucntion(event) is a global function
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        if (!modal.classList.contains('hidden')) {
            closeModal();
        }
    }
});