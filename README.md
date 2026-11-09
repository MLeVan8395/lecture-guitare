# Lecture guitare

Une appli gratuite de **lecture à vue pour guitaristes** : lecture de notes sur portée et lecture de grilles d'accords en notation rythmique, toujours au métronome.

C'est la partie « Lecture » de la [Boîte à outils guitare](https://mlevan8395.github.io/toolbox-guitare/), devenue une appli à part, conçue pour les élèves de guitare musiques actuelles et jazz en conservatoire.

👉 **Utiliser l'appli :** https://mlevan8395.github.io/lecture-guitare/

## Installer l'appli

- **Android** (Chrome) : ouvre le site, puis touche **Installer l'appli** en haut de la page, ou menu ⋮ → **Installer l'application**.
- **iPhone / iPad** (Safari) : bouton Partager → **Sur l'écran d'accueil**.
- **Ordinateur** (Chrome, Edge) : icône d'installation dans la barre d'adresse.

L'appli fonctionne ensuite **hors ligne**, son compris. Elle se met à jour toute seule à chaque ouverture avec une connexion.

## Ce qu'on y trouve

| Onglet | Contenu |
|---|---|
| **Lecture de notes** | Partition générée au hasard, en position ou le long d'une corde, dans une tonalité ou avec changements d'armure ; valeur rythmique la plus courte réglable (des rondes aux doubles croches ; les valeurs plus longues et leurs silences restent présents), nombre d'attaques par mesure, intervalle maximal, articulations, sens du médiator ; réponse affichée sur le manche |
| **Lecture de grille** | Accords et notation rythmique (des accords ouverts aux accords enrichis), mêmes réglages de rythme, doubles croches en cellules funk (syncopette), ghost notes en option (débit continu en croches ou doubles croches, chaque coup joué ou étouffé), position de l'accord sur le manche, accompagnement pop, funk, reggae ou swing |

Tempo lent, moyen ou rapide, réglable de 5 en 5 ; croches droites ou swing, et clic sur 2 et 4 en option. Un bouton **Droitier / Gaucher** retourne le manche.

## Principes

- **Aucune donnée collectée.** Pas de compte, pas de publicité ; les réglages restent dans le navigateur.
- **Notation française** : notes seules en Do, Ré, Mi… ; accords et tonalités en lettres (C, Am7, « en G »).
- Les positions d'accords de la lecture de grille sont dans `contenu/formes.js`.

## Crédits

- Glyphes musicaux de la partition (clé de sol, altérations, silences) : tracés de la police GNU FreeFont (FreeSerif), utilisés selon son exception de police.
- Basse électrique (`sons/basse`) : échantillons de [Karoryfer Samples](https://www.karoryfer.com/karoryfer-samples), mis en forme par Nicholaus Brosowsky ([tonejs-instruments](https://github.com/nbrosowsky/tonejs-instruments)), licence [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/deed.fr). Fichiers raccourcis et convertis en mono.
- Batterie (`sons/batterie`) : Virtuosity Drums, domaine public ([CC0](https://creativecommons.org/publicdomain/zero/1.0/deed.fr)).
- Contrebasse en pizzicato (`sons/contrebasse`) : [VSCO 2 Community Edition](https://github.com/sgossner/VSCO-2-CE) de Versilian Studios, domaine public (CC0). Fichiers raccourcis, normalisés et convertis en mono.
- Les notes et accords, le métronome, le pad et l'orgue sont des sons de synthèse fabriqués par l'appli.

## Licence

© 2026 Mickael Le Van, **tous droits réservés** (voir [`LICENSE`](LICENSE)). Reproduction, diffusion et usage commercial interdits sans autorisation écrite de l'auteur. Les éléments de tiers cités restent sous leur propre licence.
