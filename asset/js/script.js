$( document ).ready(function() {

    var widthScreen = $( window ).width() - 200;
    var heightScreen = $( window ).height() - 150;
    var temp = "";
    var count = 0;
    var name = "cake"

    function make_a_cake(){
        temp = ".a" + count;
        left = Math.floor((Math.random() * widthScreen) + 1);
        topp = Math.floor((Math.random() * heightScreen) + 1);
        $( "section" ).append( "<img src='img/" + name + ".png' class='" + name + " a" + count + "' />" );
        $( ".countonme").text("Count: " + count);
        $( temp ).css( "top", topp );
        $( temp ).css( "left", left );
        count += 1;
        if(count == 50) alert("more cake!");
        else if(count == 1000) alert("WOW cake!");
        else if(count == 5000){
          name = "doge";
          heightScreen -= 50;
          widthScreen -= 30;
        }
    }

    $('.btn-cake').click(function() {
        $('.btn-cake').fadeOut();
        setInterval(make_a_cake, 100);
    });

});