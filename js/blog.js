$(document).ready(function () {
    console.log("Document is geladen en jQuery werkt");

    // Toggle animation for blog content
    $("#toggle-blog").click(function () {
        $("#blog-content").slideToggle(500); // Toggle visibility with animation
    });

    // Load blog posts dynamically
    $.ajax({
        url: 'blog_database.html',
        method: 'GET',
        success: function (data) {
            const artikelen = $(data).find('article');

            // Append the first 3 articles to the blog content
            artikelen.slice(0, 3).each(function () {
                const imgElement = $(this).find('img');
                const imgSrc = imgElement.length ? imgElement.attr('src') : null;

                $("#blog-content").append(`
                    <div class="artikel">
                        ${imgSrc ? `<img src="${imgSrc}" alt="Artikel afbeelding">` : ''}
                        <h2>${$(this).find('h2').text()}</h2>
                        <p>${$(this).find('p').text()}</p>
                        <a class="lees-meer" href="detailpagina.html">Lees meer</a>
                    </div>
                `);
            });
        },
        error: function () {
            $("#blog-content").append('<p>Fout bij laden van artikelen.</p>');
        },
    });
});