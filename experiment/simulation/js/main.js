//Your JavaScript goes in here

function restartexp() {
    location.reload();
}

function showtargetplant() {
    scrollBy(0, 500);
    document.getElementById("targetplantcss").style.display = "block";
    document.getElementById("btn2").setAttribute("onclick", "geneshow()");
}

function geneshow() {
    document.getElementById("genecss").style.display = "block";
    document.getElementById("btn3").setAttribute("onclick", "subclonegenevector()");
    $('#shownote').modal('show');
    $('#shownote .modal-title').text('Isolation/Synthesis of  target genes');
    $('.modal-body').text('Target plant is the one on which the gene stacking experiment is to be done. Target genes are selected on the basis of desired traits. The genes are either isolated by PCR from the cDNA of any organism, or can be synthesised commercially.  ');

    //document.getElementById("showtxt").innerText = "Isolation/Synthesis of  target genes";
    //document.getElementById("shownote").innerText = "Target plant is the one on which the gene stacking experiment is to be done. Target genes are selected on the basis of desired traits. The genes are either isolated by PCR from the cDNA of any organism, or can be synthesised commercially.  ";

}
function subclonegenevector() {
    document.getElementById("recomvecttorcss").style.display = "block";
    document.getElementById("btn4").setAttribute("onclick", "agrotume()");

     $('#shownote').modal('show');
     $('#shownote .modal-title').text('Genes cloned into plant expression vector with suitable promoter and selection marker.');
 $('.modal-body').text('The isolated/synthesised genes are subcloned into a suitable plant expression vector (e.g. pCAMBIA 1300, pCAMBIA 2300, etc) under a constitutive promoter (e.g. 2X 35S CaMV promoter) for their expression. The genes are subcloned one after the other by restriction digestion and ligation experiments.');
    
}
function agrotume() {
    scrollBy(0, 500);
    document.getElementById("agrotumefacienscss").style.display = "block";
    document.getElementById("targetplantcss").setAttribute("onclick", "plantcallusshow()");
    $('#shownote').modal('show');
$('#shownote .modal-title').text('Note');
$('.modal-body').text('The plant expression vector containing the isolated/synthesised genes was used to transform competent Agrobacterium tumefaciens cells. The actual transformed Agrobacterium tumefaciens cells were selected on the suitable antibiotic, and the presence of the genes were confirmed by PCR.');

    
}

function plantcallusshow() {
    document.getElementById("plantcalluscss").style.display = "block";
    document.getElementById("btn5").setAttribute("onclick", "coloniesshow()");
    $('#shownote').modal('show');
$('#shownote .modal-title').text('Plant callus generation');
$('.modal-body').text('The plant calli are generated on Murashige and Skoog (MS) agar plates from specific plant tissues by the action of plant hormones – auxins and cytokinis.');

    
}

function coloniesshow() {
    scrollBy(0, 500);
    document.getElementById("coloniescss").style.display = "block";
    document.getElementById("plantcalluscss").style.display = "none";
    document.getElementById("btn6").setAttribute("onclick", "genestacked()");
    $('#shownote').modal('show');
$('#shownote .modal-title').text('Plant callus infected');
$('.modal-body').text('The plant calli are infected with the transformed Agrobacterium tumefaciens harboring the Ti – plasmid based recombinant plant expression vector. These cells are able to transfer the isolated/synthesized genes to the plant cells, which thereby get integrated into the plant genome.');

   
}

function genestacked() {
    scrollBy(0, 500);
    document.getElementById("genestackedcss").style.display = "block";
    document.getElementById("btn7").setAttribute("onclick", "dnarnashow()");
    $('#shownote').modal('show');
$('#shownote .modal-title').text('Gene stacked plant (T0)');
$('.modal-body').text('The T-DNA part of Ti – plasmid containing the isolated/synthesised genes along with the antibiotic resistance gene (e.g. hptII, nptII, etc.) are transferred into the plant and thereby get integrated into the plant genome. The putative plant transformants are selected by the application of suitable antibiotic depending upon the antibiotic resistance gene present in the T-DNA (e.g. hygromycin, geneticin, etc.)');

    
}
function dnarnashow() {
    scrollBy(0, 500);
    document.getElementById("dnarnacss").style.display = "block";
    document.getElementById("dnarnacss").setAttribute("onclick", "thermalcyclershow()");
    $('#shownote').modal('show');
$('#shownote .modal-title').text('Note');
$('.modal-body').text('Genomic DNA and RNA are isolated from the transformed T0 plant lines for their molecular confirmation by PCR/qPCR');

   
    document.getElementById("btn8").setAttribute("onclick", "thermalcyclershow()");
}

function thermalcyclershow() {
    scrollBy(0, 500);
    document.getElementById("thermalcylercss").style.display = "block";
    document.getElementById("thermalcylercss").setAttribute("onclick", "dnabandshow()");
    $('#shownote').modal('show');
$('#shownote .modal-title').text('Note');
$('.modal-body').text('PCR of the isolated/synthesised genes using gene specific primers confirm from the T0 plant gDNA confirm the presence of those genes in the plant. qPCR can be done to check the expression of these transgenes in the plant.');

    
    document.getElementById("btn9").setAttribute("onclick", "westernblotimageshow()");

}

// function dnabandshow() {
//     document.getElementById("dnabandscss").style.display = "block";
//     document.getElementById("dnabandscss").setAttribute("onclick", "westernblotimageshow()");
// }

function westernblotimageshow() {
    scrollBy(0, 500);
    document.getElementById("dnabandscss").style.display = "block";
     document.getElementById("thermalcylercss").style.display = "none";
     $('#shownote').modal('show');
$('#shownote .modal-title').text('Protein expression using Western Blot');
$('.modal-body').text('Western blot is generally performed to check the expression of the genes in the protein level. Probes/antibodies specific to the proteins generated from the transgenes are used to confirm their presence.');

   
    //document.getElementById("dnabandscss").setAttribute("onclick", "confirmbandshow()");

    document.getElementById("btn10").setAttribute("onclick", "plantseedshow()");

}

// function confirmbandshow() {
//     document.getElementById("confirmbandshowcss").style.display = "block";
//     document.getElementById("genestackedcss").setAttribute("onclick", "plantseedshow()");

// }

function plantseedshow() {
    scrollBy(0, 500);
    document.getElementById("plantseedcss").style.display = "block";
   document.getElementById("dnarnacss").style.display = "none";
     document.getElementById("dnabandscss").style.display = "none";
    document.getElementById("thermalcylercss").style.display = "none";
    $('#shownote').modal('show');
$('#shownote .modal-title').text('Note');
$('.modal-body').text('Seeds collected from the T0 plant lines will be used to grow the newer generation of plants T1. Subsequently, the seeds from T1 plant lines will be used to grow newer T2 plant lines and so on.');

    
   
    document.getElementById("btn11").setAttribute("onclick", "growplant()");
}

function growplant() {
    scrollBy(0, 500);
    document.getElementById("plantseedcss").style.display = "none";
   
    // document.getElementById("westernblotimagecss").style.display = "none";
    
    // document.getElementById("confirmbandshowcss").style.display = "none";
    document.getElementById("growplantcss").style.display = "block";
    document.getElementById("btn12").setAttribute("onclick", "molepcr()");
    
}

function molepcr() {
    scrollBy(0, 700);
    document.getElementById("dnaproteinbandcss").style.display = "block";
    document.getElementById("growplantcss").style.display = "none";
    document.getElementById("btn13").setAttribute("onclick", "showimprovedtraits()");
   
}

function showimprovedtraits() {
    scrollBy(0, 700);
    document.getElementById("plantimprovetraitscss").style.display = "block";
    document.getElementById("dnaproteinbandcss").style.display = "none";
    ;
}

function hidenotemsg() {
    document.getElementById("shownote").style.display = "none";
    document.getElementById("shownote").classList.remove("show");

}
