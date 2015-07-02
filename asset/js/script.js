$( document ).ready(function() {

    var widthScreen = $( window ).width() - 200;
    var heightScreen = $( window ).height() - 150;
    var temp = "";
    var count = 140;
    var name = "cake"
    var intervalId;
    var hey = 0

    function make_a_cake(){
        temp = ".a" + count;
        left = Math.floor((Math.random() * widthScreen) + 1);
        topp = Math.floor((Math.random() * heightScreen) + 1);
        count += 1;
        if(count == 50) alert("more cake!");
        else if(count == 100) alert("WOW cake!");
        else if(count == 150){
            clearInterval(window.intervalId);
            $( "h3").text("Click me plz Senpai!");
            alert("Need your clicks for CAKE!");
            $('.btn-cake').fadeIn();
            name = "cake2";
            heightScreen -= 30;
            widthScreen -= 30;
        }
        else if(count == 200){
            $( "h3").text("WOW Click! much cake!");
            name = "doge";
            heightScreen -= 50;
            widthScreen -= 30;
        }
        $( "section" ).append( "<img src='img/" + name + ".png' class='" + name + " a" + count + "' />" );
        $( ".countonme").text("Count: " + count);
        $( temp ).css( "top", topp );
        $( temp ).css( "left", left );
    }

    $('.btn-cake').click(function() {
        if(hey == 0){
            $('.btn-cake').fadeOut();
            window.intervalId = setInterval(make_a_cake, 100);
            hey = 1;
        }
        else{
            make_a_cake();
        }
    });

});