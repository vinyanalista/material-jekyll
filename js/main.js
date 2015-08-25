$(document).ready(function(){
    $.material.init();

    /* Search form */

    $('#search-form').find('input').keypress(function(event) {
        if (event.which == 10 || event.which == 13) {
            this.form.submit();
        }
    });
});