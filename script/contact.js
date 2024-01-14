/*
let bIndex = 0;
let load = 0;

let close_condition = 0;
let close_box = document.getElementsByClassName("close-box-contact");
*/


function openContact(n){
    let i;
    /*bIndex = n;*/

    let boxes = document.getElementsByClassName("affichage-box");
    
    for (i = 0; i < boxes.length; i++) {
        boxes[i].style.display = "none";
    }

    boxes[n].style.display = "block"
}




function closeContact(n){
    let boxes = document.getElementsByClassName("affichage-box");

    /*
    for (i = 0; i < boxes.length; i++) {
        boxes[i].style.display = "none";
    }
    */

    boxes[n].style.display = "none";

    /*bIndex = 0;*/
}


/*
function eraseBoxes(){
    let boxes = document.getElementsByClassName("affichage-box");
    console.log(load);

    if(load == 0){
        for (i = 0; i < boxes.length; i++) {
            boxes[i].style.display = "none";
        }
    }

    load = 1;
    console.log(load);
}
*/
