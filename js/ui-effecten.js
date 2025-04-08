
$( function() {
    function runEffect() {
      let selectedEffect = $( "#effectTypes" ).val() || "scale";
 
      let options = {};
        $( "#button" ).on( "click", function() {

            $("#effect").slideToggle(500, function() {
            if ( selectedEffect === "scale" ) {
                options = { percent: 100 };
                } else if ( selectedEffect === "size" ) {
                 options = { to: { width: 200, height: 60 } };
            };
                    $( "#effect" ).animate({
                        backgroundColor: "#f5720c",
                        color: "#fff",
                        width: 300
                        }, 1000, function() {

                    $( "#effect" ).animate({ 
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
  

