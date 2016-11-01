// Made using the guidance of several javascript forums and stackoverflow -- will list and link sources:
// todo: link the sources for the help.

// Trigger action when the contexmenu is about to be shown
$(document).bind("contextmenu", function (event) {

    // Avoid the real one
    event.preventDefault();

    // Show contextmenu
    $(".custom-menu").finish().toggle(100).

    // Mouse Location
    css({
        top: event.pageY + "px",
        left: event.pageX + "px"
    });
});

// If the document is clicked somewhere
$(document).bind("mousedown", function (e) {
    // If the clicked element is not the menu
    if (!$(e.target).parents(".custom-menu").length > 0) {
        // Hide it
        $(".custom-menu").hide(100);
    }
});

// If the menu element is clicked
$(".custom-menu li").click(function(){

    // This is the triggered action name
    switch($(this).attr("data-action")) {

        // A case for each action. Your actions here ============================================================
        case "first": alert("Searching Current Poem"); break;
        case "second": alert("Searching All Poems"); break;
        case "third": alert("Extra Content"); break;
    }

    // Hide it AFTER the action was triggered
    $(".custom-menu").hide(100);
});