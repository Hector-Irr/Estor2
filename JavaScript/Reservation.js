/*Destinations*/

let destinations = [
     {
         'nom': 'Berlin',
         'prix': 92,
         'animaux': 'oui',
         'dejeuner': 'oui'
     },
     {
        'nom': 'Corse',
        'prix': 88,
        'animaux': 'non',
        'dejeuner': 'oui'
    },
    {
        'nom': 'Paris',
        'prix': 92,
        'animaux': 'oui',
        'dejeuner': 'oui'
    },
    {
        'nom': 'Rome',
        'prix': 92,
        'animaux': 'oui',
        'dejeuner': 'non'
    },
    {
        'nom': 'Londres',
        'prix': 92,
        'animaux': 'non',
        'dejeuner': 'non'
    },
    {
        'nom': 'Madrid',
        'prix': 92,
        'animaux': 'oui',
        'dejeuner': 'non'
    }
];

/*Carte SVG*/

var map = document.querySelector('#map');
var disques = map.querySelectorAll(".image a");
var liens = map.querySelectorAll(".liste a");

if (NodeList.prototype.forEach === undefined){
    NodeList.prototype.forEach = function(callback){
        [].forEach.call(this. callback);
    }
}

var active = function(id){

    map.querySelectorAll(".is-active").forEach(function(item){
        item.classList.remove("is-active");
    })

    if (id !== undefined){

    document.querySelector("#ville"+id).classList.add("is-active");
    document.querySelector("#city"+id).classList.add("is-active");
    }
}

disques.forEach(function (disques){

    disques.addEventListener("mouseenter", function (e){
        var id = this.id.replace("ville","");
        active(id);
    })
})

liens.forEach(function(liens){

    liens.addEventListener("mouseenter", function (e){
        var id = this.id.replace("city","");
        active(id);
    })
})

map.addEventListener("mouseover", function(){
    active();
})

/*Filtre*/

var min = document.getElementById('min').value

function prix(element){

};
