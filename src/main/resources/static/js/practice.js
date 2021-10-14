/*window.onload = function (){
    var items = document.getElementsByClassName("article_item");

    for (var i =0; i < items.length; i++){
        items[i].innerHTML = "this is a practice" + i;
    }
}*/
$(window).on("load", function() {
    var items = $(".article_item");
    var changeText = localStorage.getItem("changeText");
    var r = parseInt(localStorage.getItem("r"+changeText));
    var g = parseInt(localStorage.getItem("g"+changeText));
    var b = parseInt(localStorage.getItem("b"+changeText));
    $(".article_item").css("background-color", "rgb(" + r + "," + g + "," + b + ")");


    var textColorChoice = $("#colorChange");
    textColorChoice.on("change",function () {
        var textColor = $("#colorChange").val();
        localStorage.setItem("changeText",textColor);
        if(textColor=="1"){
            r = parseInt(localStorage.getItem("r1"));
            g = parseInt(localStorage.getItem("g1"));
            b = parseInt(localStorage.getItem("b1"));
            $(".article_item").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
        }else if(textColor=="2"){
            r=parseInt(localStorage.getItem("r2"));
            g=parseInt(localStorage.getItem("g2"));
            b=parseInt(localStorage.getItem("b2"));
            $(".article_item").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
        }else{
            textColor.val("저장된 색이없습니다.");
        }
     })

    for (var i = 0; i < items.length; i++) {
        $(items[i]).html("this is a practice" + i);
    }
    var search = $("#search");
    search.on("change", function () {
        var content = search.val();
        /*search.val("당신이 쓴 내용 :"  + content); /*val이라는 메서드는 사용법이 2가지, 입력파라미터에 아무것도안넣으면 누군가 입력한 값을 가져옴, 입력파라미터에 넣어주면 넣은 값이 뷰로 넘어감.*/
    })

    var chk = $("#chk");
    chk.on("change", function () {
        var checked = chk.prop("checked");
        var search1 = $("#search");
        var content = search.val();
        console.log(checked);
        if (checked == true) {

            search1.val("content you wrote " + content);

        } else {
            search1.val("당신이 쓴 내용 :" + content);
        }
    })
    //var loadViewcss = $("#article_id");
   // loadViewcss.on("click", function () {
   //     loadViewcss.css("display","none");
   // })

    var background = $("#btnChangeColor");
    background.on("click", function () {
        $.get("/random", function (data) {
            console.log(data);
            var colors = data.split(",");
            r = colors[0];
            g = colors[1];
            b = colors[2];
        }, "text");

        $(".article_item").css("background", "transparent");
        $(".article_item").css("background-color", "rgb(" + r + "," + g + "," + b + ")");

    })

    var saveColorOne = $("#saveColorOne");
    saveColorOne.on("click", function () {
        saveColor(r, g, b,"1");
        console.log(r,g,b);
    })
    var saveColortwo = $("#saveColorTwo");
    saveColortwo.on("click", function () {
        saveColor(r, g, b,"2");
        console.log(r, g, b);
    })

    var background1 = $("#gradationColor");
    background1.on("click", function () {
        $.get("/gradationrandom", function (gradtion) {
            var gradtioncolor = gradtion.split(",");
            r1 = gradtioncolor[0];
            g1 = gradtioncolor[1];
            b1 = gradtioncolor[2];
            deg = gradtioncolor[3];
        }, "text");
        $(".article_item").css("background", "linear-gradient" + "(" + deg + "deg" + "," + "rgba" + "(" + r1 + "," + g1 + "," + b1 + "," + "0.8" + ")" + "," + "rgba" + "(" + r1 + "," + g1 + "," + b1 + "0.8" + ")" + "70.71%" + ")");
    })



})


/*$(window).on("resize", function (){
    console.log(window.innerWidth);
    window.location.href=("https://www.naver.com");
})*/
