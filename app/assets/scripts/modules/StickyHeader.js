import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints.min';
import smoothScroll from  'jquery-smooth-scroll';



class StickyHeader {
    constructor() {
        /* points to the siteheader element */
        this.siteheader = $(".site-header");
        /* This is element is going to be our trigger */
        this.headerTriggerElement = $(".large-hero__tittle");
        /* We want this waypoint object to be created to be created as soon as the page is loaded*/
        this.createHeaderWaypoint();
        /* collection of all our page-section elements */
        this.pageSections = $(".page-section");

        this.headerLinks = $(".primary-nav a");

        this.createPageSectionWaypoints();
        this.addSmoothScrolling();

    }


    addSmoothScrolling() {
        this.headerLinks.smoothScroll();
    }

    createHeaderWaypoint() {
        var that = this;
        new Waypoint({
            /* -------------------------------------------------------------
                "element" property, Waypoint is expecting a javascript native
                 DOM and jquery provides an collection object.
                 We get the DOM element by pointing to the first element
                 of this jquery collection object by adding "[0]"
               -------------------------------------------------------------*/
            element: this.headerTriggerElement[0],
            handler: (direction) => {
                if (direction == "down") {
                    that.siteheader.addClass("site-header--dark");
                } else {
                    that.siteheader.removeClass("site-header--dark");
                }
            }
        });
    }

    createPageSectionWaypoints() {
        var that = this;
        this.pageSections.each(function () {
            var currentPageSection = this;
            new Waypoint({
                element: currentPageSection,
                handler:  function(direction) {
                    if (direction=="down") {
                        var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                        that.headerLinks.removeClass("is-current-link");
                        $(matchingHeaderLink).addClass("is-current-link");
                    } else {
                        var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                        that.headerLinks.removeClass("is-current-link");
                        $(matchingHeaderLink).addClass("is-current-link");
                    }
                },
                offset: "18%"
            });

            new Waypoint({
                element: currentPageSection,
                handler:  function(direction) {
                    if (direction=="up") {
                        var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                        that.headerLinks.removeClass("is-current-link");
                        $(matchingHeaderLink).addClass("is-current-link");
                    } else {
                        var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                        that.headerLinks.removeClass("is-current-link");
                        $(matchingHeaderLink).addClass("is-current-link");
                    }
                },
                offset: "40%"
            });


        });
    }
}

export default StickyHeader;