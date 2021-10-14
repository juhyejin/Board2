function loadView(id) {
    $.get("/view?id=" + id, function (jqXHR) {
        $("#article_" + id).html(jqXHR)
    }, "html");

    if($("#article_"+id).css("display")=="none"){
        $("#article_"+id).css("display","block")
    }else {
        $("#article_" + id).css("display", "none")
    }

}
