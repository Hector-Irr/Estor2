let prix=new URLSearchParams(window.location.search).get("prix");
console.log("prix:"+prix)
let enfant=new URLSearchParams(window.location.search).get("enfant");
console.log("enfant:"+enfant)
let adulte=new URLSearchParams(window.location.search).get("adulte");
console.log("adulte:"+adulte)
let dejeuner=new URLSearchParams(window.location.search).get("dejeuner");
console.log("dejeuner:"+dejeuner)
let prenom=new URLSearchParams(window.location.search).get("prenom");
console.log("prenom:"+prenom)
let nom=new URLSearchParams(window.location.search).get("nom");
console.log("nom:"+nom)
let telephone=new URLSearchParams(window.location.search).get("telephone");
console.log("telephone:"+telephone)
let email=new URLSearchParams(window.location.search).get("email");
console.log("email:"+email)
let retour=new URLSearchParams(window.location.search).get("retour");
console.log("retour:"+retour)
let depart=new URLSearchParams(window.location.search).get("depart");
console.log("depart:"+depart)
let destination=new URLSearchParams(window.location.search).get("destination");
console.log("destination:"+destination)




var vDestination=document.getElementById("destination");
vDestination.innerHTML="Votre destination est: "+destination

var vNom=document.getElementById("nom");
vNom.innerHTML="Votre commande est au nom de: "+nom+" "+prenom

var vAdulte=document.getElementById("adulte");
vAdulte.innerHTML="Vous avez réservé pour "+adulte+" adulte(s), et "+enfant+" enfant(s)"

var vEmail=document.getElementById("email");
vEmail.innerHTML="Vous receverez les informations supplémentaires par mail à l'adresse: "+email+", et par téléphone au numéro: "+telephone

var vDepart=document.getElementById("depart");
vDepart.innerHTML="Le voyage est prévu entre le, "+depart+", et le, "+retour


var vDejeuner=document.getElementById("dejeuner");
if (dejeuner==false){
    vDejeuner.innerHTML="Vous n'avez pas demandé de supplément petit-déjeuner."
}else{
    vDejeuner.innerHTML="Vous avez demandé un supplément petit-déjeuner, ce qui ajoute 12€ par personne au prix total."
}

var vPrix=document.getElementById("prix");
vPrix.innerHTML="Le prix total sera donc de: "+prix+"€"





