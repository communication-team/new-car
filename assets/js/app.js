var rad = document.querySelectorAll('.cube input');
var prev = null;
for (var i = 0; i < rad.length; i++) {
    rad[i].addEventListener('change', function() {
        (prev) ? console.log(prev.value): null;
        if (this !== prev) {
            prev = this;
        }
        if(this.value == 0) {
            document.querySelector('.car-paint').style.display = "none";
        }
        else {
            if(this.value == 1) {
                document.querySelector('.car-paint').style.display = "block";
                document.querySelector('.car-paint').style.filter = "brightness(0)";
            }
            else {
                document.querySelector('.car-paint').style.display = "block";
                document.querySelector('.car-paint').style.filter = "hue-rotate(" + this.value + "deg)";
            }
        }
    });
}

var size=25;
var postionX=50;
var postionY=50;

var sticker =document.querySelector('.car-sticker')
function sizeUp(){
    if(size < 50) size +=5
    displaySticker();
};

function sizedown(){
    if(size > 10) size -=5
    displaySticker();
};

function stickerUp(){
    if(postionY > 10) postionY -=5
    displaySticker();
};

function stickerDown(){
    if(postionY < 100) postionY +=5
    displaySticker();
};

function stickerRight(){
    if(postionX < 100) postionX +=5
    displaySticker();
};

function stickerLeft(){
    if(postionX > 10) postionX -=5
    displaySticker();
};

function displaySticker(){
    sticker.style.backgroundPosition = postionX +"% " + postionY +"%";
    sticker.style.backgroundSize = size +"%";
}