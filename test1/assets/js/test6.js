$(function(){
    $("body").append("<div class='container'></div>");
    var $container = $(".container");

    var xline = 5;
    var yline = 5;
    var scale = 100;

    for(var i =0; i<yline; i++){
        for(var n =0; n<xline; n++){
            $container.append("<div class='box box"+i+"_"+n+"'>");
            var $box = $(".box"+i+"_"+n)

            $box.css({
                "width": scale,
                "height": scale,
                "top": i * scale,
                "left": n * scale,
                "position": "absolute",
                "background": "#ccc",
                "border": "1px solid #000"
            })
        }
    }

})
