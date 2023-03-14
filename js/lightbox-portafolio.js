// <!-- Script mosaico portafolio -->

// Get the modal //
var modal = document.getElementById("myModal");

//Coge el valor para luego devolverlo al hacer onclick

var myArray = ['automocion-hermanos-rico', 'desdelcallejon', 'fotodisea', 'jose-carlos' ];
//var myArray = ['azul', 'amarillo', 'verde', 'rojo' ];


var images = document.querySelectorAll(".lista4 > li");

for (i = 0; i < images.length; i++) {
        images[i].addEventListener("click", function(){
            //alert(this.children[0].getAttribute('src'));
            modal.style.display = "flex";
            modalImg.src = this.children[0].getAttribute('src');
            captionText.innerHTML = this.children[0].getAttribute('alt');
       });
        
    }


var modalImg = document.getElementById("img-modal-grande");
var captionText = document.getElementById("caption");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

