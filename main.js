let card = document.querySelectorAll(".card");
card.forEach(function(item,index){
    item.id = "card-"+index;
    console.log(item);
});

var looper;
var degrees = 0;
function rotateAnimation(el,speed) {
    var elem = document.getElementById(card-0);
    elem.style.transform = "rotateY("+degrees+",deg)";
    
   
    looper = setTimeout('rotateAnimation(\''+el+'\','+speed+')',speed);
    degrees++;
    if(degrees > 179){
        degrees = 1;
    }

}
    rotateAnimation("card-0", 150);

/*var ornek = card;
function ornek(){
    setInterval(card, 5000)
};*/