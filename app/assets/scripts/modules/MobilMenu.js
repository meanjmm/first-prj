import $ from 'jquery';

class MobilMenu {
    constructor() {
        //---------------------------------------------------
        //
        //  The "Old Way"
        //
        //
        // 1- Selecting elements from the DOM
        // 2- Event Handling
        // 3- Defining functionality
        //
        // $(".site-header__menu-icon").click(function() {
        //     console.log("Lanzamos el event click");
        // });
        //---------------------------------------------------

        // 1- Selecting elements from the DOM
        this.siteHeader     = $(".site-header");
        this.menuIcon       = $(".site-header__menu-icon");
        this.menuContent    = $(".site-header__menu-content");
        this.events();
    }


    // 2- Event Handling
    events() {
        this.menuIcon.click(() => this.toggleMenu());
        // console.log(this);

    }

    // 3- Defining functionality
    toggleMenu() {
        this.menuContent.toggleClass("site-header__menu-content--is-visible");
        this.siteHeader.toggleClass("site-header--is-expanded");
        this.menuIcon.toggleClass("site-header__menu-icon--close-x");
    }

}

export default  MobilMenu;