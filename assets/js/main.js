function random_number(first, last) {
    return Math.floor((Math.random() * (last - first + 1))) + first;
}

$(document).ready(function(){
    $('body').bootstrapMaterialDesign();

    $('#fab').click(function(){
        var enterDesignMode = ($('#fab button i').text() == "visibility");
        $('#fab button i').text(enterDesignMode ? "edit" : "visibility");
        document.designMode = enterDesignMode ? "on" : "off";
    });
});
