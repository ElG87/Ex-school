$(document).ready(function () {

    //Laad artikelen uit blog_database.html
    $.ajax({
        url:'blog_database.html',
        method: 'GET',
        success: function (data){

            //HTML inhoud van blog_database ophalen
            const artikelen = $(data).find('article');

            //Alleen de eerste 3 artikelen tonen
            artikelen.slice(0,3).each(function (){
            
                // Voeg elk artikel toe aan het overzicht
                $('#blog').append(`
                    <div class="artikel">
                <h2>${$(this).find('h2').text()}</h2>
                <p>${$(this).find('p').text()}</p>
                <a href="detailpagina.html">Lees meer</a>
                </div>
                `);
            });
        },
        error: function (){
            $('blog').html('<p>Fout bij laden van artikelen.</p>');
        },
    });

});

