
let btn_submit = document.getElementById("btn_submit");

function validatePassword(){

    let txtmdp = document.getElementById("mdp");
    let txtconfirm_mdp = document.getElementById("confirm-mdp");
    let mdp = txtmdp.value;
    let confirm_mdp = txtconfirm_mdp.value;

    if(mdp !== confirm_mdp){
        txtconfirm_mdp.setCustomValidity("Les champs ne correspondent pas");
    }
    else{
        txtconfirm_mdp.setCustomValidity('');

    }
}






function validateEmail(){

    let txtemail = document.getElementById("email");
    let txtconfirm_email = document.getElementById("confirm-email");
    let email = txtemail.value;
    let confirm_email = txtconfirm_email.value;

    if(email !== confirm_email){
        txtconfirm_email.setCustomValidity("Les champs ne correspondent pas");
    }
    else{
        txtconfirm_email.setCustomValidity('');

    }

    validatePassword();
}