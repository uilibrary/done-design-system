var tour;
$(document).ready(function() {
    tour = {
        id: "demo-tour",
        showPrevButton: !0,
        steps: [{
            title: "Notofication",
            content: "This is the Notificaton for the theme where you can check notification.",
            target: "dropdownMenuButton",
            placement: "left"
        }, {
            title: "search bar",
            content: "Search here for anything",
            target: "search-bar",
            placement: "bottom"
        }, {
            title: "Create your Tour",
            content: "Create new tour easily",
            target: "create-tour",
            placement: "top"
        }]
    }

});
$("#startTourBtn").on("click", function(t) {
    hopscotch.startTour(tour)
});