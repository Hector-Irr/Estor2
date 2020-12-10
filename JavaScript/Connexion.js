/*Flèche top*/

document.addEventListener('DOMContentLoaded',function(){                   
    window.onscroll=function(){
        document.getElementById("cRetour").className=(window.pageYOffset>100)? "cVisible":"cInvisible";
    };
});

/*Connexion*/





function connexion(){
    var identifiants=document.getElementById("id").value
    console.log("id="+identifiants)
    var mdp=document.getElementById("mdp").value
    console.log("mdp="+mdp)

    if (identifiants=="jean"){
        console.log("jean")
        console.log(identifiants)
        if (mdp=="12345"){
            window.location.href="Accueil.html"

        }

    }
    else if (identifiants=="bob01"){
        console.log("bob01")
        if (mdp=="01bob01"){
            window.location.href="Accueil.html"

        }

    }
    else if (identifiants=="Estor"){
        console.log("Estor")
        if (mdp=="00000"){
            window.location.href="Accueil.html"

        }

    }else{alert("Identifiant ou mot de passe incorrect")}
    
    
    



}