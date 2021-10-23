"use strict";

function modeUnJoueur() {
  let mots = ["pendu", "javascript"];
  let random = Math.floor(Math.random() * 2); // pour choisir un mot au hazard dans le dictionnaire

  function pendu(mot) {
    let motPendu = [];
    let vide = [];
    let lettresTentees = [];
    let nombreVies = 6;
    for (let i = 0; i < mot.length; i++) {
      motPendu.push(mot[i]);
      vide.push("_");
    }
    while (String(vide) != String(motPendu)) {
      //a défaut d'avoir un autre moyen de comparer les listes
      let lettre = prompt(
        `le mot a trouver est: ${vide} \n entrez, vous avez déja essayé: ${lettresTentees}   \n nombre de vies : ${nombreVies}`
      ).toLowerCase();
      let trouve = false;
      if (verifie(lettre)) {
        lettresTentees.push(lettre);
        for (let i = 0; i < motPendu.length; i++) {
          if (lettre == motPendu[i]) {
            vide[i] = motPendu[i];
            trouve = true;
          }
        }
        if (trouve == false) {
          nombreVies -= 1;
          if (nombreVies == 0) {
            alert(`perdu, le mot a trouver etait: ${mot}`);
            break;
          }
        }
        trouve = false;
        if (String(vide) == String(motPendu)) {
          alert(`Bravo! le mot a trouver etait: ${mot}`);
          break;
        }
      }
    }
  }
  pendu(mots[random]);

  function verifie(lettreAVerifier) {
    return true; //je pars du principe qu'on entre une lettre utilisable pour mes tests
    //on appelera cette fonction apres le prompt d'entrée de lettre, elle devra renvoyer "true" si la lettre est bonne
    //a verifier: que c'est 1 seule lettre, pas un chiffre, pas un charactere special, etc...
    if (lettreAVerifier.length == 1) {
      //si il y a qu'1 seul caractere
    } else {
      alert("n'écrit qu'une seule lettre stp");
    }
  }
}

function modeMulti() {
  let mots = ["pendu", "javascript"];
  let random = Math.floor(Math.random() * 2); // pour choisir un mot au hazard

  function pendu(mot) {
    let motPendu = [];
    let vide = [];
    let lettresTentees = [];
    let nombreVies = 6;
    let joueurs = [];
    let nombreJoueurs = +prompt("combien de joueurs ?"); // Nombre des joueurs
    let joueurActuel;

    for (let i = 0; i <= nombreJoueurs; i++) {
      joueurs.push(i);
    }
    joueurActuel = joueurs[1]; // introduire dans une variable le joueur actuel

    for (let i = 0; i < mot.length; i++) {
      motPendu.push(mot[i]);
      vide.push("_");
    }

    confirm("joueur " + joueurActuel + " c'est parti !");

    while (String(vide) != String(motPendu)) {
      //a défaut d'avoir un autre moyen de comparer les listes

      let lettre = prompt(
        `le mot a trouver est: ${vide} \n entrez, vous avez déja essayé: ${lettresTentees}   \n nombre de vies : ${nombreVies}`
      ).toLowerCase();

      if (lettre == null) {
        confirm("Vous avez arrêter la partie");
        break;
      }

      let trouve = false;

      if (verifie(lettre)) {
        lettresTentees.push(lettre);
        for (let i = 0; i < motPendu.length; i++) {
          if (lettre == motPendu[i]) {
            vide[i] = motPendu[i];
            trouve = true;
          }
        }
        if (trouve == false) {
          nombreVies -= 1;
          joueurActuel += 1; // Quand le joueur se trompe, c'est le tour du suivant
          if (joueurActuel === joueurs.length) {
            joueurActuel = joueurs[1];
          }

          if (nombreVies == 0) {
            alert(`perdu, le mot a trouver etait: ${mot}`);
            break;
          }

          confirm("Joueur " + joueurActuel + " c'est à toi !");
        }

        trouve = false;
        if (String(vide) == String(motPendu)) {
          alert(
            "Bravo! Joueur " + joueurActuel + ` le mot a trouver etait: ${mot}`
          );
          break;
        }
      }
    }
  }
  pendu(mots[random]);

  function verifie(lettreAVerifier) {
    return true; //je pars du principe qu'on entre une lettre utilisable pour mes tests
    //on appelera cette fonction apres le prompt d'entrée de lettre, elle devra renvoyer "true" si la lettre est bonne
    //a verifier: que c'est 1 seule lettre, pas un chiffre, pas un charactere special, etc...
    if (lettreAVerifier.length == 1) {
      //si il y a qu'1 seul caractere
    } else {
      alert("n'écrit qu'une seule lettre stp");
    }
  }
}
