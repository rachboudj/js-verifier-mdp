const inputPassword = document.querySelector("#password")
const letter = document.querySelector("#letter")
const capital = document.querySelector("#capital")
const number = document.querySelector("#number")
const length = document.querySelector("#length")

// const eye = document.querySelector(".feather-eye");
const eye = document.querySelector(".voirmdp");
const eyeoff = document.querySelector(".cachermdp");

eye.addEventListener("click", () => {
    console.log('je vois le mdp');
    eye.style.display = "none";
    eyeoff.style.display = "block";
    inputPassword.type = "text";
});

eyeoff.addEventListener("click", () => {
    console.log('je vois pas le mdp');
    eyeoff.style.display = "none";
    eye.style.display = "block";
    inputPassword.type = "password";
});

// lorsque que user clique sur input password, la boîte avec
// le message apparaît
inputPassword.onfocus = function () {
    document.querySelector("#message").style.display = "block";
    // inputPassword.type = "text"; // pour voir le mdp 
    // console.log('voir le mots de passe');
}

// qd user clique dehors, message disparaît
inputPassword.onblur = function () {
    document.querySelector("#message").style.display = "none";
}

// qd user commence à taper quelque chose dans password

inputPassword.onkeyup = function () {
    // valider lettre minuscules
    let lowerCaseLetters = /[a-z]/g
    if (inputPassword.value.match(lowerCaseLetters)) {
        // si une majuscule dans mdp affiche message en vert
        letter.classList.remove('invalid')
        letter.classList.add('valid')
    } else {
        // si non, enlever la class valid et ajouter classe invalid
        letter.classList.add('invalid')
        letter.classList.remove('valid')
    }

    // valider lettre majuscule
    let upperCaseLetters = /[A-Z]/g
    if (inputPassword.value.match(upperCaseLetters)) {
        // si une majuscule dans mdp affiche message en vert
        capital.classList.remove('invalid')
        capital.classList.add('valid')
    } else {
        // si non, enlever la class valid et ajouter classe invalid
        capital.classList.add('invalid')
        capital.classList.remove('valid')
    }

    // valider chiffre
    let numbers = /[0-9]/g
    if (inputPassword.value.match(numbers)) {
        // si un chiffre dans mdp affiche message en vert
        number.classList.remove('invalid')
        number.classList.add('valid')
    } else {
        // si non, enlever la class valid et ajouter classe invalid
        number.classList.add('invalid')
        number.classList.remove('valid')
    }

    // valider chiffre
    let respectLength = /[0-9]/g
    if (inputPassword.value.length >= 8) {
        // si un chiffre dans mdp affiche message en vert
        length.classList.remove('invalid')
        length.classList.add('valid')
    } else {
        // si non, enlever la class valid et ajouter classe invalid
        length.classList.add('invalid')
        length.classList.remove('valid')
    }
}