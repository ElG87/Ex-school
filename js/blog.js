$(document).ready(function () {
    console.log("Document is geladen en jQuery werkt");
    console.log("blog.js is geladen"); // Debugging regel

    // Laad artikelen uit blog_database.html
    $.ajax({
        url: 'blog_database.html',
        method: 'GET',
        success: function (data) {
            console.log("Opgehaalde HTML:", data); // Debugging regel

            // HTML inhoud van blog_database ophalen
            const artikelen = $(data).find('article');

            // Alleen de eerste 3 artikelen tonen
            artikelen.slice(0, 3).each(function () {
                // Haalt de bron van de afbeelding op
                const imgElement = $(this).find('img');
                let imgSrc = null;

                if (imgElement.length === 0) {
                    console.error("Geen afbeelding gevonden in artikel");
                } else {
                    imgSrc = new URL(imgElement.attr('src'), window.location.href).href;
                    console.log("Afbeelding pad:", imgSrc); // Debugging regel
                }

                // Voeg elk artikel toe aan het overzicht
                $('#blog').append(`
                    <div class="artikel">
                        ${imgSrc ? `<img src="${imgSrc}" alt="Artikel afbeelding">` : ''}
                        <h2>${$(this).find('h2').text()}</h2>
                        <p>${$(this).find('p').text()}</p>
                        <a class='lees-meer' href="detailpagina.html">Lees meer</a>
                    </div>
                `);
            });
        },
        error: function () {
            $('#blog').append('<p>Fout bij laden van artikelen.</p>');
        },
    });
});