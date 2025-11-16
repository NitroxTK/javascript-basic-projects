// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay


//specifies css classes to be referenced as queries
const modalBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.close-btn');
const modalOverlay = document.querySelector('.modal-overlay');


// add event listener for open modal
modalBtn.addEventListener('click', function() {
    modalOverlay.classList.add ('open-modal');
    console.log(modalOverlay.classList); 

})



//add event listener for close modal
closeBtn.addEventListener('click', function() {
    modalOverlay.classList.remove ('open-modal');
    console.log(modalOverlay.classList);
})
