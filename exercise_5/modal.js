const openModalButton = document.getElementById('openModal');
const modalWrapper = document.querySelector('.modal-wrapper');

openModalButton.onclick = function() {
  modalWrapper.classList.remove('invisible')
}

document.addEventListener('keydown', function(event) {
    const isEscKey = event.key === 'Escape';
    const isInvisibleAdded = modalWrapper.classList.contains('insivible')
    
    if (isEscKey && !isInvisibleAdded) {
        modalWrapper.classList.add('invisible')
    }
})