
$(document).ready(function () {
    $('#submit').on('click', function () {

        const naam = document.getElementById('koptekst').value;

        let boodschap = '';

        if (naam.length <= 15) {
        } else {
            alert ('Uw koptekst is te lang');
        }
    });

    $('#submit').on('click', function () {
        const naam = document.getElementById('blog_tekst').value;

        let boodschap = '';

        if (naam.length <= 10) {
        } else {
            alert('Uw tekst is te lang');
        }
    });

    $("#artikelen").load("../html/blog_artikelen.html", function(respons,status,xhr){
        if(status == "error"){
            const msg = "Er is een fout opgetreden:";
            
            $("#blog-posts").html(msg + xhr.status + "" + xhr.statusText);
        }
    });
    });