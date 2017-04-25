// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado
$.get( "http://swapi.co/api/films/", function( data ) {
    console.log(data);
});
if(localStorage.getItem("episode") == null){
    $.get( "http://swapi.co/api/films/4", function( data ) {
        localStorage.setItem("episode", "Episode I");
        localStorage.setItem("film", 4);
        $( "#episode" ).text('Episode I');
        $( "#title" ).text(data.title);
        $( "#text" ).text(data.opening_crawl);
    });
}
else{
    var episode  = localStorage.getItem("episode") ;
    var film = localStorage.getItem("film");
    $.get( "http://swapi.co/api/films/" + film, function( data ) {
        $( "#episode" ).text(episode);
        $( "#title" ).text(data.title);
        $( "#text" ).text(data.opening_crawl);
    });
}

$( "#ep1" ).click(function() {
    $( "#episode" ).text('');
    $( "#title" ).text('');
    $( "#text" ).text('');
    $.get( "http://swapi.co/api/films/4", function( data ) {
        localStorage.setItem("episode", "Episode I");
        localStorage.setItem("film", 4);
        $( "#episode" ).text('Episode I');
        $( "#title" ).text(data.title);
        $( "#text" ).text(data.opening_crawl);
    });
});
$( "#ep2" ).click(function() {
    $( "#episode" ).text('');
    $( "#title" ).text('');
    $( "#text" ).text('');
    $.get( "http://swapi.co/api/films/5", function( data ) {
        localStorage.setItem("episode", "Episode II");
        localStorage.setItem("film", 5);
        $( "#episode" ).text('Episode II');
        $( "#title" ).text(data.title);
        $( "#text" ).text(data.opening_crawl);
    });
});
$( "#ep3" ).click(function() {
    $( "#episode" ).text('');
    $( "#title" ).text('');
    $( "#text" ).text('');
    $.get( "http://swapi.co/api/films/6", function( data ) {
        localStorage.setItem("episode", "Episode III");
        localStorage.setItem("film", 6);
        $( "#episode" ).text('Episode III');
        $( "#title" ).text(data.title);
        $( "#text" ).text(data.opening_crawl);
    });
});
$( "#ep4" ).click(function() {
    $( "#episode" ).text('');
    $( "#title" ).text('');
    $( "#text" ).text('');
    $.get( "http://swapi.co/api/films/1", function( data ) {
        localStorage.setItem("episode", "Episode IV");
        localStorage.setItem("film", 1);
        $( "#episode" ).text('Episode IV');
        $( "#title" ).text(data.title);
        $( "#text" ).text(data.opening_crawl);
    });
});
$( "#ep5" ).click(function() {
    $( "#episode" ).text('');
    $( "#title" ).text('');
    $( "#text" ).text('');
    $.get( "http://swapi.co/api/films/2", function( data ) {
        localStorage.setItem("episode", "Episode V");
        localStorage.setItem("film", 2);
        $( "#episode" ).text('Episode V');
        $( "#title" ).text(data.title);
        $( "#text" ).text(data.opening_crawl);
    });
});
$( "#ep6" ).click(function() {
    $( "#episode" ).text('');
    $( "#title" ).text('');
    $( "#text" ).text('');
    $.get( "http://swapi.co/api/films/3", function( data ) {
        localStorage.setItem("episode", "Episode VI");
        localStorage.setItem("film", 3);
        $( "#episode" ).text('Episode VI');
        $( "#title" ).text(data.title);
        $( "#text" ).text(data.opening_crawl);
    });
});
$( "#ep7" ).click(function() {
    $( "#episode" ).text('');
    $( "#title" ).text('');
    $( "#text" ).text('');
    $.get( "http://swapi.co/api/films/7", function( data ) {
        localStorage.setItem("episode", "Episode VII");
        localStorage.setItem("film", 7);
        $( "#episode" ).text('Episode VII');
        $( "#title" ).text(data.title);
        $( "#text" ).text(data.opening_crawl);
    });
});
