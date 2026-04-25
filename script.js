
document.getElementById("monForm").addEventListener("submit", function(e) {

    let valide = true;

    if (document.getElementById("noms").value.trim() === "") {
        document.getElementById("text1").innerText = "Nom requis";
        valide = false;
    }

    if (document.getElementById("mail").value.trim() === "") {
        document.getElementById("text2").innerText = "Email requis";
        valide = false;
    }

    if (document.getElementById("sujet").value.trim() === "") {
        document.getElementById("text3").innerText = "Sujet requis";
        valide = false;
    }

    if (document.getElementById("message").value.trim() === "") {
        document.getElementById("text4").innerText = "Message requis";
        valide = false;
    }

    // 🚨 bloque seulement si erreur
    if (!valide) {
        e.preventDefault();
    }

});