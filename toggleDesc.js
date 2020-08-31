/*
 Toggle too long desc text 
 @author https://github.com/lennartalbrecht
 req: https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
*/

function toggleDesc(descName,descHiddenHeight) {

    const descHeight = $(descName).height(); // full height of element

    if (descHeight > descHiddenHeight) {
        // set default height and overflow - max-height for working transition
        $(descName).css({"max-height": descHiddenHeight, "overflow": "hidden"});

        // add hide-it class
        $(descName).addClass("hide-it");

        // add buttons
        $(descName).after('<button class="descShow btn is--primary">show more</button> <button class="descHide btn is--primary" style="display: none;">show less</button>');

        // Toggle height and buttons
        $(".descShow").click(function () {
            $(descName).removeClass("hide-it");
            $(descName).css("max-height", descHeight);
            $('.descHide').toggle();
            $(this).toggle();
        });
        $(".descHide").click(function () {
            $(descName).addClass("hide-it");
            $(descName).css("max-height", descHiddenHeight);
            $('.descShow').toggle();
            $(this).toggle();
        });
    }
    ;
}
