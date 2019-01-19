
var co = [
"Atak",
"Spisek",
"Inwazja",
"Terror",
"Napad",
"Tragedia"
];

var jakich = [
"morderczych",
"niebezpiecznych",
"nieprzewidywalnych",
"szalonych",
"pokręconych",
"śmiertelnych",
"głupich",
"nadętych",
"dziwnych",
"parabolicznych",
"sinokoperkowych",
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
	"dzików",
	"chrząszczy",
	"kurtek",
	"opon",
	"dzbanów",
	"kości",
	"butelek",
	"jednorożców",
	"okien",
	"jeleni"
];

function losuj(tablica){
	return tablica[Math.floor(Math.random()*tablica.length)];
}



function generuj(){
	var zdanie = losuj(co) + " " + losuj(jakich) + " " + losuj(czego);
	document.getElementById("gen").innerText = zdanie;
}


