$(document).ready(function() {
    // When the DOM is fully loaded
    $("#artikelen").load("../html/blog_artikelen.html", function(respons, status, xhr) {
        // Load the content of blog_artikelen.html into the element with ID 'artikelen'
        if (status == "error") {
            // If there is an error, display an error message in the element with ID 'blog-posts'
            const msg = "Er is een fout opgetreden:";
            $("#blog-posts").html(msg + xhr.status + " " + xhr.statusText);
        }
    });
});