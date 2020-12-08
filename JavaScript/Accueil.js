/*Flèche top*/

document.addEventListener('DOMContentLoaded',function(){                   
    window.onscroll=function(){
        document.getElementById("cRetour").className=(window.pageYOffset>100)? "cVisible":"cInvisible";        
    };
});

/*API*/

const APIKEY = '02f21d0d378b0b1e03e1ef6795e0d878';

/*Objet ville*/

arrivee = function (x){
    if (x==1){
        return [{nom: "Berlin", prix: "92€/pers.", video: "https://www.youtube.com/embed/C10cmiOH0mo?start=20"}, apiCall("Berlin")];
    }
    if (x==2){
        return [{nom: "Corse", prix: "88€/pers.", video: "https://www.youtube.com/embed/VBgX0NIY4_I?start=6"}, apiCall("Corse")];
    }
    if (x==3){
        return [{nom: "Paris", prix: "124€/pers.", video: "https://www.youtube.com/embed/-d0ZFJ2gpOo?start=22"}, apiCall("Paris")];
    }
    if (x==4){
        return [{nom: "Rome", prix: "108€/pers.", video: "https://www.youtube.com/embed/oSexfR0Ubzw?start=15"}, apiCall("Rome")];
    }
    if (x==5){
        return [{nom: "Londres", prix: "118€/pers.", video: "https://www.youtube.com/embed/rDfKWDPaxBA?start=10"}, apiCall("Londres")];
    }
    if (x==6){ 
        return [{nom: "Madrid", prix: "98€/pers.", video: "https://www.youtube.com/embed/HEylg-d-nGk?start=5"}, apiCall("Madrid")];
    }
}

/*Slider*/

var compteurImage = 1;
var totalImage = 6;

function slider(x){

    var image = document.getElementById('img');
    var videoVille = document.getElementById('video');

    compteurImage = compteurImage+x;

    if (compteurImage > totalImage){
        compteurImage = 1;
    }

    if (compteurImage < 1){
        compteurImage = totalImage;
    }

    image.src = "../Photos/ville"+compteurImage+".jpg";
    document.querySelector("#city").href = "Formulaire.html?id="+arrivee(compteurImage)[0].nom;
    document.querySelector("#city").innerHTML = arrivee(compteurImage)[0].nom;
    document.querySelector("#price").innerHTML = arrivee(compteurImage)[0].prix;
    videoVille.src = arrivee(compteurImage)[0].video;
}

/*Appel API météo*/

let apiCall = function(city){

    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

    fetch(url)
        .then((response) => {
            response.json()
                .then((data) => {
                console.log(data.main.temp);
                document.querySelector("#meteo").innerHTML = parseInt(data.main.temp)+" °C"
            })
        })
}

apiCall("Berlin");





