/* NAVBAR FIXED OZELLIYI*/

$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() >20){
            $('.navbar').addClass('sabitnavbar');
        }else{
            $('.navbar').removeClass('sabitnavbar');
        }
    });
});

/* SOLDAKI REKLAM DIVI FIXED OZELLIYI*/
