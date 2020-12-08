/*Flèche top*/

document.addEventListener('DOMContentLoaded',function(){                   
    window.onscroll=function(){
        document.getElementById("cRetour").className=(window.pageYOffset>100)? "cVisible":"cInvisible";
    };
});

/*Connexion*/
