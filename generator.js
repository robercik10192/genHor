
var co = [
"Atak",
"Spisek",
"Inwazja",
];

var jakich = [
"morderczych",
"niebezpiecznych",
"nieprzewidywalnych",
"szalonych",
"pokręconych",
"śmiertelnych",
"głupich",
"śmiesznych",
"ciekawych"
];

var czego = [
	"pomarańczy",
	"bananów",
	"jabłek",
	"królików",
	"kotów",
	"psów",
	"samochodów",
	"kamieni",
	"koni",
	"krów",
	"jeleni"
];

function losuj(tablica){
	return tablica[Math.floor(Math.random()*tablica.length)];
}



function generuj(){
	var zdanie = losuj(co) + " " + losuj(jakich) + " " + losuj(czego);
	document.getElementById("gen").innerText = zdanie;
}


