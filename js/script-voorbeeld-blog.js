$(document).ready(function(){
    $("#artikelen").load("../html/blog_artikelen.html", function(respons,status,xhr){
        if(status == "error"){
            const msg = "Er is een fout opgetreden:";
            $("#blog-posts").html(msg + xhr.status + "" + xhr.statusText);
        }
    });
});