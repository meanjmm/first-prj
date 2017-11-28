import $ from 'jquery';


class Modal {

    //---------------------------------------
    // 1- Selecting elements from the DOM
    //---------------------------------------

    constructor() {
        this.openModalButton    = $(".open-modal");
        this.modal               = $(".modal");
        this.closeModalButton   = $(".modal__close");
        this.events();
    }

    //---------------------------------------
    // 2- Event Handling
    //---------------------------------------

    events() {

        // this.openModalButton.click(this.openModal.bind(this));
        // this.openModalButton.click(this.openModal());
        this.openModalButton.click(() => {
            this.openModal()
        });

        // clicking the X close modal button.
        // this.closeModalButton.click(this.closeModal.bind(this));
        this.closeModalButton.click(() => {
            this.closeModal()
        });

        // Clicking the ESC key
        $(document).keyup((e)=> {
            this.keyPressHandler(e)
        });
    }
    //---------------------------------------
    // 3- Defining functionality
    //---------------------------------------

    keyPressHandler(e) {
        // alert(e.keyCode);
        if (e.keyCode == 27){
            this.closeModal();
        }
    }


    openModal() {
        // alert('openModal');
        this.modal.addClass("modal--is-visible");
        // return fail to prevent the page going to the top
        // after clicking a link with # sign.
        return false;
    }

    closeModal() {
        // alert('openModal');
        this.modal.removeClass("modal--is-visible");
    }



}

export default Modal;