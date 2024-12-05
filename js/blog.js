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
            
            //Haalt de bron van de afbeelding op
            const imgSrc = $(this).find('img').attr('src')
            console.log("Afbeelding pad: " + imgSrc); //Debugging regel
            const imgPath = `afbeeldingen/${imgSrc}`;

                // Voeg elk artikel toe aan het overzicht
                $('#blog').append(`
                    <div class="artikel">
                    ${imgSrc ? `<img src="${imgSrc}' alt="Artikel afbeelding">` : ''}
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

