// Made using the guidance of several javascript forums and stackoverflow -- will list and link sources:
// todo: link the sources for the help.

var selected_text = "";

// Trigger action when the contexmenu is about to be shown
$(document).bind("contextmenu", function (event) {
    console.log('I was clicked!');
    selected_text = window.getSelection().toString()

    console.log('Selected text is: ' + selected_text);

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
    var poem_results;

    // This is the triggered action name
    switch($(this).attr("data-action")) {

        // A case for each action. Your actions here ==========================
        case "first":
            //alert("Searching Current Poem for: " + selected_text);
            console.log("first clicked");
            poem_results = searchPoem(selected_text);
            console.log(poem_results);

            //document.getElementById("resultSection").innerHTML = poem_results;

            for(var index = 0; index < poem_results.length; index++){
                document.getElementById("resultSection").innerHTML = poem_results[index];
            }

            break;
        case "second":
            //alert("Searching All Poems");
            console.log("Second was clicked");
            poem_results = searchLexicon(selected_text);
            console.log(poem_results);
            document.getElementById("resultSection").innerHTML = poem_results;

            break;
        case "third":
            console.log("third was clicked");
            alert("Extra Content");
            break;
    }

    // Hide it AFTER the action was triggered
    $(".custom-menu").hide(100);
});