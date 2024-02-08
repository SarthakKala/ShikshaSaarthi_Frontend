function showAllHeads(){
    if(document.getElementById("mainHeads").style.display=='none'){
        document.getElementById("mainHeads").style.display='block';
    }
    else{  
        document.getElementById("mainHeads").style.display='none';
    }
}



function catEduTxt() {
    if(document.getElementById("Nat").innerHTML==""){
        document.getElementById("specHeads").style.display='block';
        document.getElementById("Nat").innerHTML = document.getElementById("eduNat").innerHTML;
        document.getElementById("eduNat").style.display = 'block';
        document.getElementById("Stat").innerHTML = document.getElementById("eduState").innerHTML;
        document.getElementById("eduState").style.display = 'block';
        document.getElementById("ngo").innerHTML = document.getElementById("eduNgo").innerHTML; 
        document.getElementById("eduNgo").style.display = 'block';
    }
    else{
        // document.getElementById("specHeads").style.display='none';
        document.getElementById("Nat").innerHTML = "";
        document.getElementById("Stat").innerHTML = "";
        document.getElementById("ngo").innerHTML = "";
    }
}

function catHealthTxt() {

    // if(document.getElementById("Nat").innerHTML==""){
    //     document.getElementById("Nat").innerHTML = document.getElementById("eduNat").innerHTML;
    //     document.getElementById("eduNat").style.display = 'block';
    //     document.getElementById("Stat").innerHTML = document.getElementById("eduState").innerHTML;
    //     document.getElementById("eduState").style.display = 'block';
    //     document.getElementById("ngo").innerHTML = document.getElementById("eduNgo").innerHTML; 
    //     document.getElementById("eduNgo").style.display = 'block';
    // }
    // else{
    //     document.getElementById("Nat").innerHTML = "";
    //     document.getElementById("Stat").innerHTML = "";
    //     document.getElementById("ngo").innerHTML = ""; 
    // }
    hideAllTxt();
}

function catNutriTxt() {
    // if(document.getElementById("Nat").innerHTML==""){
    //     document.getElementById("Nat").innerHTML = document.getElementById("eduNat").innerHTML;
    //     document.getElementById("eduNat").style.display = 'block';
    //     document.getElementById("Stat").innerHTML = document.getElementById("eduState").innerHTML;
    //     document.getElementById("eduState").style.display = 'block';
    //     document.getElementById("ngo").innerHTML = document.getElementById("eduNgo").innerHTML; 
    //     document.getElementById("eduNgo").style.display = 'block';
    // }
    // else{
    //     document.getElementById("Nat").innerHTML = "";
    //     document.getElementById("Stat").innerHTML = "";
    //     document.getElementById("ngo").innerHTML = ""; 
    // }
    hideAllTxt();
}

function catDevTxt() {
    if(document.getElementById("Nat").innerHTML==""){
        document.getElementById("Nat").innerHTML = document.getElementById("eduNat").innerHTML;
        document.getElementById("eduNat").style.display = 'block';
        document.getElementById("Stat").innerHTML = document.getElementById("eduState").innerHTML;
        document.getElementById("eduState").style.display = 'block';
        document.getElementById("ngo").innerHTML = document.getElementById("eduNgo").innerHTML; 
        document.getElementById("eduNgo").style.display = 'block';
    }
    else{
        document.getElementById("Nat").innerHTML = "";
        document.getElementById("Stat").innerHTML = "";
        document.getElementById("ngo").innerHTML = ""; 
    }
}

function showStatTxt(ref){
    if(ref.selectedIndex==0){
        clearSelectTxt();
    }
    else if(ref.selectedIndex==20){
        clearSelectTxt();
        document.getElementById("statTxt").innerHTML=document.getElementById("PunjabTXT").innerHTML;
    }
    else if(ref.selectedIndex==1){
        clearSelectTxt();
        document.getElementById("statTxt").innerHTML="Policies in Andhra Pradesh";
    }
    else if(ref.selectedIndex==3){
        clearSelectTxt();
        document.getElementById("statTxt").innerHTML=document.getElementById("PunjabTXT").innerHTML;
    }
    else{
        document.getElementById("statTxt").innerHTML="";
    }
}

function clearSelectTxt(){
    document.getElementById("statTxt").innerHTML="";
}


function hideAllTxt(){
    document.getElementById("Nat").innerHTML = "";
    document.getElementById("Stat").innerHTML = "";
    document.getElementById("ngo").innerHTML = "";
}