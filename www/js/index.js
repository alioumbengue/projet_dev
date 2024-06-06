function calculerImc() {
    var poids = parseFloat(document.getElementById('poids').value);
    var taille = parseFloat(document.getElementById('taille').value);
    
    if (isNaN(poids) || isNaN(taille) || poids <= 0 || taille <= 0) {
        alert("Veuillez entrer des valeurs valides pour le poids et la taille.");
        return;
    }

    var imc = poids / (taille * taille);
    var interpretation = "";

    if (imc < 18.5) {
        interpretation = "Maigreur";
    } else if (imc >= 18.5 && imc < 24.9) {
        interpretation = "Corpulence normale";
    } else if (imc >= 25 && imc < 29.9) {
        interpretation = "Surpoids";
    } else {
        interpretation = "Obésité";
    }

    document.getElementById('interpretation').innerText = `Votre IMC est ${imc.toFixed(2)}: ${interpretation}`;
    document.getElementById('interpretation-fieldset').hidden = false;
}
