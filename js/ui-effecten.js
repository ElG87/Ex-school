
$( function() {
    function runEffect() {
      let selectedEffect = $( "#effectTypes" ).val() || "scale";
      let options = {};
        
        $( "#button" ).on( "click", function() {

            $("#effect").slideToggle(500, function() { // slideToggle animatie
            if ( selectedEffect === "scale" ) {
                options = { percent: 100 };
                } else if ( selectedEffect === "size" ) {
                 options = { to: { width: 200, height: 60 } };
            };
         $( "#effect" ).animate({ // achtergrondkleur en tekstkleur veranderen
            backgroundColor: "#f5720c",
            color: "#fff",
            width: 300
            }, 1000, function() {

        $( "#effect" ).animate({ //verandering van de achtergrondkleur en tekstkleur na de andere animatie
            backgroundColor: "#ffb489",
            color: "#000000",
            width: 480
            }, 2000 );
            });
    });
        }); 
    };
    runEffect();
});
  

