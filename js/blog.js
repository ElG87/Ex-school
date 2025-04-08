$(document).ready(function () {
    console.log("Document is loaded and jQuery is working");

    // Animatie voor de blog sectie
    $("#toggle-blog").click(function () {
        console.log("Toggle button clicked");
        $("#blog-content").slideToggle(500);
    });

    // Blogs worden geladen via AJAX
    $.ajax({
        url: '../html/blog_database.html', // Hier vind je de artikelen
        method: 'GET',
        success: function (data) {
            console.log("AJAX request successful");
            const artikelen = $(data).find('article');
            console.log("Found articles:", artikelen.length);
            artikelen.slice(0, 3).each(function () { // Alleen de eerste 3 artikelen worden geladen
                const imgElement = $(this).find('img');
                const imgSrc = imgElement.length ? imgElement.attr('src') : null;
                
                //De blog artikelen worden hier in de HTML gezet
                $("#blog-content").append(`
                    <div class="artikel">
                        ${imgSrc ? `<img src="${imgSrc}" alt="Artikel afbeelding">` : ''}
                        <h2>${$(this).find('h2').text()}</h2> 
                        <p>${$(this).find('.author').text()}</p>
                        
                        <p>${$(this).find('.date').text()}</p>
                        
                        <p>${$(this).find('.blogtekst').text()}</p>
                        <a class="lees-meer" href="detailpagina.html">Lees meer</a>
                    </div>
                `);
            });
        },
        //Foutmelding als de artikelen niet geladen kunnen worden
        error: function () {
            console.error("Error loading blog posts");
            $("#blog-content").append('<p>Fout bij laden van artikelen.</p>');
        },
    });


// Datepicker widget met uitsluitend 3 dagen in de week

  $(function() {
  $("#dialoog").dialog({
    autoOpen: false
  });

  $("#popup").click(function() {
    const datum = $("#datepicker").datepicker("getDate");
    const dag = datum.getDate();
    const maand = datum.getMonth() + 1;
    const jaar = datum.getFullYear();
    const datumstring = `${dag}/${maand}/${jaar}`;
    
    $("#datum").text(datumstring); // Zet datum in de <span id="datum">
    $("#dialoog").dialog("open");
  });

  $("#sluiten").click(function() {
    $("#dialoog").dialog("close");
  });

  // Zorg dat de datepicker werkt
  $("#datepicker").datepicker();
});
});

});
});