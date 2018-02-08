var image = document.getElementById("likes");

if (image.classList && image) {
    image.onmouseover = function(){
        if (this.value == 'pause') {
            image.classList.add('pause');
            this.value = 'play';
        } else {
            image.classList.remove('pause');
            this.value = 'pause';
        }
    };
}