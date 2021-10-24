"use strict";
function mot() {
    let listeMots = `crayon, stylo, feutre, pointe, mine, gomme, dessin, coloriage, rayure, peinture, pinceau, couleu, craie, papier, feuille, cahier, carnet, carton, ciseaux,
        découpage, pliage, pli, colle, affaire, boîte, casier, caisse, trousse, cartable, jouet, jeu, pion, dé, domino, puzzle, cube, perle, chose, carré, rond, tampon,livre, histoire, bibliothèque, image, album, titre, conte, dictionnaire, magazine, catalogue, page, ligne, mot, enveloppe, étiquette,affiche, alphabet,
        appareil, caméscope, cassette, cédé, cédérom, chaîne, chanson, chiffre, contraire, différence, doigt, écran, écriture, film, fois, idée, instrument, intrus, lettre, liste, magnétoscope,
        main, micro, modèle, musique, nom, nombre, orchestre, ordinateur, photo, point, poster, pouce, prénom, question, radio, sens, tambour, télécommande, téléphone, télévision, trait,
        trompette, voix, xylophone, zéro, chanter, chercher, choisir, chuchoter, coller, colorier, commencer, comparer, compter, construire, continuer, copier, couper, déchirer, décoller, décorer,
        découper, demander, démolir, dessiner, dire, discuter, écouter, écrire, effacer, entendre, entourer, envoyer, faire, finir, fouiller, goûter, imiter, laisser, lire, mettre,
        montrer, parler, peindre, plier, poser, prendre, préparer, ranger, réciter, recommencer, regarder, remettre, répéter, répondre, sentir, souligner, tailler,
        tenir, terminer, toucher, travailler, trier, angle, armoire, banc, bureau, cabinet, carreau, chaise, classe, clé, coin, couloir, dossier, eau, école, écriture, entrée, escalier,
        étagère, étude, extérieur, fenêtre, intérieur, lavabo, lecture, lit, marche, matelas, maternelle, meuble, mousse, mur, peluche, placard, plafond, porte, portemanteau, poubelle,
        radiateur, rampe, récréation, rentrée, rideau, robinet, salle, savon, serrure, serviette, siège, sieste, silence, sol, sommeil, sonnette, sortie, table, tableau, tabouret, tapis,
        tiroir, toilette, vitre,  ami, attention, camarade, colère, copain, coquin, dame, directeur, directrice, droit, effort, élève, enfant, fatigue, faute, fille, garçon, gardien, madame,
        maître, maîtresse, mensonge, ordre, personne, retard, sourire, travail,  blond, brun, calme, curieux, différent, doux, énervé, gentil, grand, handicapé, inséparable, jaloux, moyen, muet,
        noir, nouveau, petit, poli, propre, roux, sage, sale, sérieux, sourd, tranquille, arrosoir, assiette, balle, bateau, boîte, bouchon, bouteille, bulles, canard, casserole, cuillère,
        cuvette, douche, entonnoir, gouttes, litre, moulin, pluie, poisson, pont, pot, roue, saladier, seau, tablier, tasse, trous, verre,
        agiter, arroser, attraper, avancer, baigner, barboter, boucher, bouger, déborder, doucher, éclabousser, essuyer, envoyer, flotter, gonfler, inonder, jouer, laver, mélanger, mouiller, nager,
        patauger, pleuvoir, plonger, pousser, pouvoir, presser, recevoir, remplir, renverser, sécher, serrer, souffler, tirer, tourner, tremper, verser, vider, vouloir,
        amusant, chaud, froid, humide, intéressant, mouillé, sec, transparent, autant, beaucoup, encore, moins, peu, plus, trop,endroit, anorak, arc, bagage, baguette, barbe, bonnet, botte,
        bouton, bretelle, cagoule, casque, casquette, ceinture, chapeau, chaussette, chausson, chaussure, chemise, cigarette, col, collant, couronne, cravate, culotte, écharpe, épée, fée,
        flèche, fusil, gant, habit, jean, jupe, lacet, laine, linge, lunettes, magicien, magie, maillot, manche, manteau, mouchoir, moufle, nœud, paire, pantalon, pied, poche, prince,
        pull-over, pyjama, reine, robe, roi, ruban, semelle, soldat, sorcière, tache, taille, talon, tissu, tricot, uniforme, valise, veste, vêtement, changer, chausser, couvrir, déguiser,
        déshabiller, enlever, habiller, lacer, porter, ressembler, clair, court, étroit, foncé, joli, large, long, multicolore, nu, usé, bien, mal, mieux, presque, aiguille, ampoule, avion,
        bois, bout, bricolage, bruit, cabane, carton, clou, colle, crochet, élastique, ficelle, fil, marionnette, marteau, métal, mètre, morceau, moteur, objet, outil, peinture, pinceau,
        planche, plâtre, scie, tournevis, vis, voiture, véhicule, arracher, attacher, casser, coudre, détruire, écorcher, enfiler, enfoncer, fabriquer, mesurer, percer, pincer, réparer,
        réussir, servir, taper, trouer, adroit, difficile, dur, facile, lisse, maladroit, pointu, rugueux, tordu, accident, aéroport, auto, camion, engin, feu, frein, fusée, garage, gare,
        grue, hélicoptère, moto, panne, parking, pilote, pneu, quai, train, virage, vitesse, voyage, wagon, zigzag, arrêter, atterrir, bouder, charger, conduire, démarrer, disparaître,
        donner, écraser, garder, garer, manquer, partir, poser, reculer, rouler, tendre, transporter, voler, abîmé, ancien, blanc, bleu, cassé, cinq, dernier, deux, deuxième, dix, gris,
        gros, huit, jaune, même, neuf, pareil, premier, quatre, rouge, sept, seul, six, solide, trois, troisième, un, vert, au-dessus, autour, vite`;

    let listeMots1 = listeMots.split(", ");
    let nbrAuHazard = Math.floor(Math.random() * listeMots1.length);
    return listeMots1[nbrAuHazard];
}
const mot = mot();
function modeUnJoueur() {
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
