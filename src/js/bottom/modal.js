export function openModal() {

    var modalButtons = $('.block-modal-button');
    var modal = $('.modal');
    var elements = Array.from(modalButtons);

    elements.forEach((element) => {
        element.addEventListener('click', function () {
            modal.addClass('modal-open');
        });
    });
    
}

export function closeModal() {

    var closeBtn = $('.modal-close-btn');
    
    closeBtn.on('click', function() {
        var theModal = $('.modal');
        theModal.removeClass('modal-open');
    });
}