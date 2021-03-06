import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints.min'

class RevealOnScroll {
    constructor(elements, offset) {
        this.itemsToReveal = elements;
        this.offsetPercentage = offset;
        this.hideInitially();
        this.createWaypoints();
    }

    hideInitially() {
        this.itemsToReveal.addClass("reveal-item");
    }

    createWaypoints() {
        var that = this.offsetPercentage;
        this.itemsToReveal.each(function () {
            var currentItem = this;
            $(currentItem).removeClass("reveal-item--is-visible");
            new Waypoint({
                element: currentItem,
                handler: function () {
                    $(currentItem).addClass("reveal-item--is-visible");
                },
                offset: that
            });
        });
    }
}

export default RevealOnScroll;