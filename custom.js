/*
 TEST - - Toggle too long desc text 
 @author LA 
*/

    const descName = '#intro-text'; // Selector of description element
    const descHeight = $(descName).height(); // full height of element
    const descHiddenHeight = 200; // default height

    if (descHeight > descHiddenHeight) {
        // set default height and overflow - max-height for working transition
        $(descName).css({"max-height": descHiddenHeight, "overflow": "hidden"});

        // add hide-it class
        $(descName).addClass("hide-it");

        // add buttons
        $(descName).after('<button class="descShow btn is--primary">Show More</button> <button class="descHide btn is--primary" style="display: none;">Show less</button>');

        // Toggle height and buttons
        $(".descShow").click(function(){
            $(descName).removeClass("hide-it");
            $(descName).css("max-height",descHeight);
            $('.descHide').toggle();
            $(this).toggle();
          });
        $(".descHide").click(function(){
            $(descName).addClass("hide-it");
            $(descName).css("max-height",descHiddenHeight);
            $('.descShow').toggle();
            $(this).toggle();
        });
    };
