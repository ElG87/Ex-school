$(document).ready(function () {
$("#postblog1").load("blog_artikelen.html", function(response, status, xhr){
    if(status === "error"){
        const msg = "Er is een fout opgetreden: ";
        $("#postblog1").html(msg + xhr.status + "" + xhr.statusText);

    }
  });
  
  $('#preview-blog2').load('archief.html #blog-2 #img-blog2, #tweede-p, #date2');
 
        $('#knop-blog-2').on('click', function(){
            window.location.href='detailpagina.html';
        });
    
    $('#huidige-blog').load('archief.html #blog-2');
    ;
/*Artikelen toevoegen aan blog*/
const artikelen = [{
    title: "blog1",
    content: "Inhoud van artikel 1",
    date: "2024-12-01"
},
{
    title: "blog2",
    content: "Inhoud van artikel 2",
    date: "2024-12-02"},
];
/*Artikelen ophalen*/
application.get('/artikelen', (req, res) => {
    res.json(artikelen);
});

  /*Formulier*/
  $('#blogFormBtn').click(function(){
    $.ajax({
        url: 'html/blog_artikelen.html',
        method: 'GET',
        success: function(data){
            let content = $ (data).find("#blogdiv1").html();
            $("postblog1").html(content);
        }
    })
})
});

console.log("Hello")

function getBlogs() {
    let blogs = [];
    let x = Math.floor((Math.random() * 5) + 1);
    let numbers = [];

    while (blogs.length < 3) {

        if (numbers.includes(x) === false) {
            numbers.push(x);
            blogs.push('#blog' + x);
        }

        else {
            x = Math.floor((Math.random() * 5) + 1);
        }
    }
    console.log(blogs)
    return blogs
}

function postBlogs(data) {
    blogs = getBlogs()
    const blogArchive = {};

    for (let i = 0; i < blogs.length; i++) {
        let j = i + 1;
        blogDiv = '#postblog' + j;

        blogArchive[blogDiv] = blogs[i];

        let postblog = '../html/blog_artikelen.html ' + blogs[i].toString();

        $(blogDiv).load(postblog, function () {
            $('.truncate').each(function () {
                $(this).html($(this).html().substring(0, 500) + '...');
            })
        });
    }
    $('.readbtn').each(function(){
        $(this).html("<strong class='read'>Lees verder</strong>")

    })
    console.log(blogArchive)

    $('.truncate').on('click', function () {
        let getDivID = '#' + $(this).attr('id');
        getSelectedBlog(getDivID, blogArchive[getDivID]);
        deleteBlogs(getDivID)

    })
}

function getSelectedBlog(selectedBlog, blog) {

    $.ajax({
        url: '../html/blog_artikelen.html',
        success: function (data) {
            $(selectedBlog).load('../html/blog_artikelen.html ' + blog);
        },
        error: function (jqXhr, textStatus, errorThrown) {
            alert('FOUT: ' + textStatus + errorThrown);
        }
    });
}



jQuery.validator.setDefaults({
    debug: true,
    success: 'valid'
})

$('#blogform').validate({
    rules:{
        titel: {
            required: true,
            minlength: 3,
            maxlength: 100,
        },
        auteur: {
            required: true,
            minlength: 3,
            maxlength: 100,
        },
        postdatum: {
            required: true,
            date: true
        },
        blog: {
            required: true,
            minlength: 100
        }
    }
})

