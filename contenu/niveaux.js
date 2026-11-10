// ============================================================================
//  Déchiffrage Guitare — les niveaux (contenu pédagogique)
//  © 2026 Mickael Le Van – Tous droits réservés (voir LICENSE).
//
//  Chaque ligne est un niveau, dans l'ordre. On peut en ajouter, en retirer ou les déplacer
//  sans toucher au code : la numérotation se refait toute seule.
//
//  LECTURE DE NOTES
//    t            : titre court du niveau
//    zones        : où jouer. Quand il y en a plusieurs, l'appli en tire une à chaque partition.
//                   p0 = 1re position (cordes à vide, cases 1 à 3), p2 = cases 2 à 5, p5 = cases 5 à 8,
//                   p7 = cases 7 à 10, p9 = cases 9 à 12, s6 à s1 = le long d'une corde (6 = Mi grave)
//    armures      : nombre d'altérations à la clé, + pour les dièses, − pour les bémols ([0, 1, -1] = C, G, F).
//                   L'appli en tire une à chaque partition. "change" = l'armure change en cours de route.
//    rythme       : valeur la plus courte. 1 rondes, 2 blanches, 3 noires, 4 croches, 6 triolets de croches,
//                   7 doubles croches, 8 tout mélangé. Les valeurs plus longues et les silences restent présents.
//    intervalle   : le plus grand saut. 1 seconde, 2 tierce, 3 quarte, 4 quinte, 5 sixte, 6 septième, 7 octave
//    modulations  : "none" aucune ; "rel" vers le relatif mineur ; "vois" relatif mineur, ton de la dominante
//                   et ton de la sous-dominante ; "tous" les cinq tons voisins. L'armure ne change pas :
//                   les notes nouvelles s'écrivent avec des altérations accidentelles.
//    articulations: "none", "stacc" (piqué), "acc" (accent), "marc" (chevron), "mix" (mélangées)
//
//  LECTURE DE GRILLE
//    accords      : 1 accords ouverts, 2 ouverts et accords 7, 3 power chords, 4 majeurs et mineurs toutes
//                   tonalités, 5 accords à 4 sons, 6 accords enrichis
//    rythme       : 1 rondes, 2 blanches, 3 noires, 4 croches, 7 doubles croches (funk)
//    parMesure    : "0.5" un accord pour 2 mesures, "1" un accord par mesure, "2" deux accords par mesure
//    ghost        : "1" = ghost notes (débit continu, joué ou étouffé), "0" = sans
//    articulations: comme ci-dessus
// ============================================================================
const NIVEAUX={
notes:[
 {t:"1re position, C, rondes",                          zones:["p0"], armures:[0], rythme:1, intervalle:1},
 {t:"1re position, C, blanches",                        zones:["p0"], armures:[0], rythme:2, intervalle:1},
 {t:"1re position, C, noires, notes voisines",          zones:["p0"], armures:[0], rythme:3, intervalle:1},
 {t:"1re position, C, noires, sauts de tierce",         zones:["p0"], armures:[0], rythme:3, intervalle:2},
 {t:"1re position, C, G ou F, noires",                  zones:["p0"], armures:[0,1,-1], rythme:3, intervalle:2},
 {t:"1re position, C, G ou F, croches",                 zones:["p0"], armures:[0,1,-1], rythme:4, intervalle:2},
 {t:"1re position, jusqu'à 2 altérations, croches",     zones:["p0"], armures:[0,1,-1,2,-2], rythme:4, intervalle:4},
 {t:"1re position, modulation au relatif mineur",       zones:["p0"], armures:[0,1,-1,2,-2], rythme:4, intervalle:4, modulations:"rel"},
 {t:"Cases 2 à 5, C, G ou D, noires",                   zones:["p2"], armures:[0,1,2], rythme:3, intervalle:2},
 {t:"Cases 2 à 5, croches, relatif mineur",             zones:["p2"], armures:[0,1,-1,2,-2], rythme:4, intervalle:4, modulations:"rel"},
 {t:"5e position, C, G ou F, noires",                   zones:["p5"], armures:[0,1,-1], rythme:3, intervalle:2},
 {t:"5e position, jusqu'à 3 altérations, croches",      zones:["p5"], armures:[0,1,-1,2,-2,3,-3], rythme:4, intervalle:4, modulations:"rel"},
 {t:"Trois zones, dominante et sous-dominante",         zones:["p0","p2","p5"], armures:[0,1,-1,2,-2,3,-3], rythme:4, intervalle:5, modulations:"vois", articulations:"mix"},
 {t:"7e position, jusqu'à 2 altérations, croches",      zones:["p7"], armures:[0,1,-1,2,-2], rythme:4, intervalle:3},
 {t:"Quatre zones, triolets, jusqu'à 4 altérations",    zones:["p0","p2","p5","p7"], armures:[0,1,-1,2,-2,3,-3,4,-4], rythme:6, intervalle:5, modulations:"vois"},
 {t:"Cases 9 à 12, jusqu'à 3 altérations, croches",     zones:["p9"], armures:[0,1,-1,2,-2,3,-3], rythme:4, intervalle:4},
 {t:"Le long d'une corde, noires",                      zones:["s1","s2","s3","s4","s5","s6"], armures:[0,1,-1], rythme:3, intervalle:3},
 {t:"Tout le manche, doubles croches",                  zones:["p0","p2","p5","p7","p9"], armures:[0,1,-1,2,-2,3,-3,4,-4], rythme:7, intervalle:5, modulations:"vois"},
 {t:"Tout le manche, 5 altérations, tous les tons voisins", zones:["p0","p2","p5","p7","p9"], armures:[0,1,-1,2,-2,3,-3,4,-4,5,-5], rythme:8, intervalle:7, modulations:"tous", articulations:"mix"},
 {t:"Tout le manche, changements d'armure",             zones:["p0","p2","p5","p7","p9"], armures:"change", rythme:8, intervalle:7, articulations:"mix"}
],
grille:[
 {t:"Accords ouverts, rondes, un accord pour 2 mesures", accords:1, rythme:1, parMesure:"0.5"},
 {t:"Accords ouverts, blanches",                         accords:1, rythme:2, parMesure:"1"},
 {t:"Accords ouverts, noires",                           accords:1, rythme:3, parMesure:"1"},
 {t:"Accords ouverts, croches",                          accords:1, rythme:4, parMesure:"1"},
 {t:"Accords ouverts et accords 7, croches",             accords:2, rythme:4, parMesure:"1"},
 {t:"Power chords, croches",                             accords:3, rythme:4, parMesure:"1"},
 {t:"Majeurs et mineurs, toutes tonalités, noires",      accords:4, rythme:3, parMesure:"1"},
 {t:"Majeurs et mineurs, croches, 2 accords par mesure", accords:4, rythme:4, parMesure:"2"},
 {t:"Accords à 4 sons, noires",                          accords:5, rythme:3, parMesure:"1"},
 {t:"Accords à 4 sons, croches, 2 accords par mesure",   accords:5, rythme:4, parMesure:"2", articulations:"mix"},
 {t:"Accords à 4 sons, doubles croches (funk)",          accords:5, rythme:7, parMesure:"0.5"},
 {t:"Funk avec ghost notes",                             accords:5, rythme:7, parMesure:"0.5", ghost:"1"},
 {t:"Accords enrichis, croches, 2 accords par mesure",   accords:6, rythme:4, parMesure:"2", articulations:"mix"},
 {t:"Accords enrichis, funk avec ghost notes",           accords:6, rythme:7, parMesure:"1", ghost:"1"}
]};
