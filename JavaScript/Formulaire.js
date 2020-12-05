document.addEventListener('DOMContentLoaded',function(){                    
    window.onscroll=function(){
        document.getElementById("cRetour").className=(window.pageYOffset>100)? "cVisible":"cInvisible";
        
    };
});


var vDestination2=document.getElementById("lieux")


let sejour_id=new URLSearchParams(window.location.search).get("id");

if (sejour_id=="Berlin"){
    vDestination2.innerHTML="Berlin"
    vPrix=150
    
    
}if (sejour_id=="Paris"){
    vDestination2.innerHTML="Paris"
    vPrix=80



}if (sejour_id=="Corse"){
    vDestination2.innerHTML="Corse"
    vPrix=150

    
}if (sejour_id=="Madrid"){
    vDestination2.innerHTML="Madrid"
    vPrix=100

    
}if (sejour_id=="Rome"){
    vDestination2.innerHTML="Rome"
    vPrix=120

    
}if (sejour_id=="Londres"){
    vDestination2.innerHTML="Londres"
    vPrix=180

    
}if (sejour_id=="Crete"){
    vDestination2.innerHTML="Crete"
    vPrix=200

    
}if (sejour_id=="Reservation"){
    vDestination2.innerHTML="Reservation"
    vPrix=00

    
}if (sejour_id=="Varsovie"){
    vDestination2.innerHTML="Varsovie"
    vPrix=135

    
}
function changeprix(){
    var dejeuner=document.getElementById("ptidej").checked;
    let enfant = parseInt(document.getElementById("enfant").value,10);
    let adulte= parseInt(document.getElementById("adulte").value,10);
    var vPrix2=document.getElementById("total")
    
    var prix=vPrix*adulte+vPrix*enfant*0.4
    if (dejeuner==true){
        prix=prix+((enfant+adulte)*12)
    }   
    console.log(prix)



    vPrix2.innerHTML=prix


}


function soumettre(){
    console.log(vPrix)
    var prenom=document.getElementById("prenom").value
    var nom=document.getElementById("nom").value
    var depart=document.getElementById("depart").value
    var retour=document.getElementById("retour").value
    var telephone=document.getElementById("telephone").value
    var email=document.getElementById("email").value
    let enfant = parseInt(document.getElementById("enfant").value,10);
    let adulte= parseInt(document.getElementById("adulte").value,10);
    var dejeuner=document.getElementById("ptidej").checked;

    var prix=vPrix*adulte+vPrix*enfant*0.4

    console.log(prix)
    if (dejeuner==true){
        prix=prix+((enfant+adulte)*12)
    }   
    console.log(prix)

    
   
    var verif=0
    console.log(document.forms["formulaireform"].id=["prenom"])
    if(document.forms["formulaireform"].id=["enfant"].value==null){ verif=1}
    if(document.forms["formulaireform"].id=["adulte"].value==null){ verif=1}
    if(document.forms["formulaireform"].id=["prenom"].value==null){ verif=1}
    if(document.forms["formulaireform"].id=["nom"].value==null){ verif=1}
    if(document.forms["formulaireform"].id=["depart"].value==null){ verif=1}
    if(document.forms["formulaireform"].id=["arrive"].value==null){ verif=1}
    if(document.forms["formulaireform"].id=["telephone"].value==null){ verif=1}
    if(document.forms["formulaireform"].id=["email"].value==null){ verif=1}
    console.log("verif:"+verif)
    


    if(verif!=0){
        alert("Tous les champs avec une étoile doivent être remplis")
    }
    else if(adulte<1){
        alert("Il faut au moins un adulte.")
        
    }else if (retour<depart){
        alert("La date de retour doit être postérieure à celle de départ.")
    }
    else { 

    
        window.location.href="Recapitulatif.html?prix="+prix+"&enfant="+enfant+"&adulte="+adulte+"&prenom="+prenom+"&nom="+nom+"&depart="+depart+"&retour="+retour+"&telephone="+telephone+"&email="+email+"&dejeuner="+dejeuner+"&destination="+sejour_id
    }
    
}




