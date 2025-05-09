//Your JavaScript goes in here

function restartexp() {
    location.reload();
}

function showtargetplant() {
    scrollBy(0,500);
    document.getElementById("targetplantcss").style.display = "block";
    document.getElementById("btn2").setAttribute("onclick", "geneshow()");
}

function geneshow() {
    document.getElementById("genecss").style.display = "block";
    document.getElementById("btn3").setAttribute("onclick", "subclonegenevector()");

}
function subclonegenevector() {
    document.getElementById("recomvecttorcss").style.display = "block";
    document.getElementById("btn4").setAttribute("onclick", "agrotume()");
}
function agrotume() {
    scrollBy(0,500);
    document.getElementById("agrotumefacienscss").style.display = "block";
    document.getElementById("targetplantcss").setAttribute("onclick", "plantcallusshow()");
}

function plantcallusshow() {
    document.getElementById("plantcalluscss").style.display = "block";
    document.getElementById("btn5").setAttribute("onclick", "coloniesshow()");
}

function coloniesshow() {
    scrollBy(0,500);
    document.getElementById("coloniescss").style.display = "block";
    document.getElementById("btn6").setAttribute("onclick", "genestacked()");
}

function genestacked() {
    scrollBy(0,500);
    document.getElementById("genestackedcss").style.display = "block";
    document.getElementById("btn7").setAttribute("onclick", "dnarnashow()");
}
function dnarnashow() {
    scrollBy(0,500);
    document.getElementById("dnarnacss").style.display = "block";
    document.getElementById("dnarnacss").setAttribute("onclick", "thermalcyclershow()");
}

function thermalcyclershow() {
    scrollBy(0,500);
    document.getElementById("thermalcylercss").style.display = "block";
    document.getElementById("thermalcylercss").setAttribute("onclick", "dnabandshow()");
}

function dnabandshow() {
    document.getElementById("dnabandscss").style.display = "block";
    document.getElementById("dnabandscss").setAttribute("onclick", "westernblotimageshow()");
}

function westernblotimageshow() {
    document.getElementById("westernblotimagecss").style.display = "block";
    document.getElementById("westernblotimagecss").setAttribute("onclick", "confirmbandshow()");


}

function confirmbandshow() {
    document.getElementById("confirmbandshowcss").style.display = "block";
    document.getElementById("genestackedcss").setAttribute("onclick", "plantseedshow()");

}

function plantseedshow() {
    document.getElementById("plantseedcss").style.display = "block";
    document.getElementById("plantseedcss").setAttribute("onclick", "growplant()");
}

function growplant() {
    scrollBy(0,500);
    document.getElementById("plantseedcss").style.display = "none";
    document.getElementById("dnabandscss").style.display = "none";
    document.getElementById("westernblotimagecss").style.display = "none";
    document.getElementById("thermalcylercss").style.display = "none";
    document.getElementById("confirmbandshowcss").style.display = "none";
    document.getElementById("growplantcss").style.display = "block";
    document.getElementById("btn8").setAttribute("onclick", "molepcr()");
}

function molepcr() {
    scrollBy(0,700);
    document.getElementById("dnaproteinbandcss").style.display = "block";
    document.getElementById("growplantcss").style.display = "none";
    document.getElementById("btn9").setAttribute("onclick", "showimprovedtraits()");
}

function showimprovedtraits() {
    scrollBy(0,700);
    document.getElementById("plantimprovetraitscss").style.display = "block";
    document.getElementById("dnaproteinbandcss").style.display = "none";
}