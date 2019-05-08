/* NAVBAR FIXED OZELLIYI*/

$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() >50){
            $('.navbar').addClass('sabitnavbar');
        }else{
            $('.navbar').removeClass('sabitnavbar');
        }
    });
});

/* SOLDAKI REKLAM DIVI FIXED OZELLIYI*/

$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() >580){
            $('.reklam2').addClass('sabitreklam');
        }else{
            $('.reklam2').removeClass('sabitreklam');
        }
    });
});