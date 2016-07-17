var $search_input = null;
var do_search = false;

function hide_search_input() {
    $('#search-input').animate({
        'width': 0,
        'opacity': 0
    }, 200);
}

function random_number(first, last) {
    return Math.floor((Math.random() * (last - first + 1))) + first;
}

function submit_search_form() {
    do_search = true;
    $('#search-form').submit();
}

$(document).ready(function(){
    $.material.init();

    /* Search form */

    $search_input = $('#search-input');

    $('#search-button').click(function(event) {
        event.preventDefault();
        if ($search_input.width() > 0) {
            if ($search_input.val()) {
                submit_search_form();
            } else {
                hide_search_input();
            }
        } else {
            $search_input.animate({
                'width': '182px',
                'opacity': 1
            }, 300, function() {
                $search_input.focus();
            });
        }
    });

    $search_input.keypress(function(event) {
        if (event.which == 10 || event.which == 13) {
            submit_search_form();
        }
    }).blur(function() {
        if (!$search_input.val() && !do_search) {
            hide_search_input();
        }
    });
});