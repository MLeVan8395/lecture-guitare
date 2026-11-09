// =====================================================================
//  Lecture guitare — positions d'accords de la lecture de grille (contenu pédagogique)
//  © 2026 Mickael Le Van – Tous droits réservés (voir LICENSE). Extrait de la Boîte à outils guitare.
//
//  Chaque forme est une liste de notes [corde, case, intervalle] :
//   - corde : 1 = Mi aigu … 6 = Mi grave ;
//   - case : décalage en cases par rapport à la tonique « 1 » la plus grave
//     (0 = même case, -1 = une case plus bas vers le sillet, 2 = deux cases plus haut).
//     Pour les formes « fixe » (accords ouverts), c'est le vrai numéro de case (0 = corde à vide) ;
//   - intervalle : 1, ♭2, 2, ♭3, 3, 4, ♯4, ♭5, 5, ♯5, ♭6, 6, 𝄫7, ♭7, 7, 9, ♭9, ♯9, ♯11, 13, ♭13.
//  x : cordes non jouées. groupe : sous-titre. acc : suffixe d'accord (C + "m7" = Cm7).
// =====================================================================
const CHAPITRES=[
{id:"ouverts",titre:"Accords ouverts",intro:"O = corde à vide, X = corde étouffée. Ces accords ne se transposent pas : ils utilisent les cordes à vide.",formes:[
  {"n":"C","notes":[[5,3,"1"],[4,2,"3"],[3,0,"5"],[2,1,"1"],[1,0,"3"]],"x":[6],"fixe":true},
  {"n":"D","notes":[[4,0,"1"],[3,2,"5"],[2,3,"1"],[1,2,"3"]],"x":[5,6],"fixe":true},
  {"n":"E","notes":[[6,0,"1"],[5,2,"5"],[4,2,"1"],[3,1,"3"],[2,0,"5"],[1,0,"1"]],"fixe":true},
  {"n":"G","notes":[[6,3,"1"],[5,2,"3"],[4,0,"5"],[3,0,"1"],[2,0,"3"],[1,3,"1"]],"fixe":true},
  {"n":"A","notes":[[5,0,"1"],[4,2,"5"],[3,2,"1"],[2,2,"3"],[1,0,"5"]],"x":[6],"fixe":true},
  {"n":"Am","notes":[[5,0,"1"],[4,2,"5"],[3,2,"1"],[2,1,"♭3"],[1,0,"5"]],"x":[6],"fixe":true},
  {"n":"Dm","notes":[[4,0,"1"],[3,2,"5"],[2,3,"1"],[1,1,"♭3"]],"x":[5,6],"fixe":true},
  {"n":"Em","notes":[[6,0,"1"],[5,2,"5"],[4,2,"1"],[3,0,"♭3"],[2,0,"5"],[1,0,"1"]],"fixe":true},
  {"n":"C7","notes":[[5,3,"1"],[4,2,"3"],[3,3,"♭7"],[2,1,"1"],[1,0,"3"]],"x":[6],"fixe":true},
  {"n":"D7","notes":[[4,0,"1"],[3,2,"5"],[2,1,"♭7"],[1,2,"3"]],"x":[5,6],"fixe":true},
  {"n":"E7","notes":[[6,0,"1"],[5,2,"5"],[4,0,"♭7"],[3,1,"3"],[2,0,"5"],[1,0,"1"]],"fixe":true},
  {"n":"G7","notes":[[6,3,"1"],[5,2,"3"],[4,0,"5"],[3,0,"1"],[2,0,"3"],[1,1,"♭7"]],"fixe":true},
  {"n":"A7","notes":[[5,0,"1"],[4,2,"5"],[3,0,"♭7"],[2,2,"3"],[1,0,"5"]],"x":[6],"fixe":true},
  {"n":"B7","notes":[[5,2,"1"],[4,1,"3"],[3,2,"♭7"],[2,0,"1"],[1,2,"5"]],"x":[6],"fixe":true}
]},
{id:"power",titre:"Power chords et octaves",intro:"Formes déplaçables sur 2 cordes. Les power chords n'ont pas de tierce : ils ne sont ni majeurs ni mineurs.",formes:[
  {"n":"Power chord, fondamentale sur la corde de Mi grave (6)","notes":[[6,0,"1"],[5,2,"5"]],"x":[1,2,3,4]},
  {"n":"Power chord, fondamentale sur la corde de La (5)","notes":[[5,0,"1"],[4,2,"5"]],"x":[1,2,3,6]},
  {"n":"Octave depuis le Mi grave (corde 6)","notes":[[6,0,"1"],[4,2,"1"]],"x":[1,2,3,5]},
  {"n":"Octave depuis le La (corde 5)","notes":[[5,0,"1"],[3,2,"1"]],"x":[1,2,4,6]},
  {"n":"Octave depuis le Ré (corde 4)","notes":[[4,0,"1"],[2,3,"1"]],"x":[1,3,5,6]},
  {"n":"Octave depuis le Sol (corde 3)","notes":[[3,0,"1"],[1,3,"1"]],"x":[2,4,5,6]}
]},
{id:"positions",titre:"Positions transposables (accords)",intro:"Accords complets, fondamentale sur la corde de Mi grave ou de La.",formes:[
  {"n":"Majeur (fondamentale corde 6)","notes":[[6,0,"1"],[5,2,"5"],[4,2,"1"],[3,1,"3"],[2,0,"5"],[1,0,"1"]],"groupe":"Fondamentale sur la corde de Mi","acc":""},
  {"n":"Mineur (fondamentale corde 6)","notes":[[6,0,"1"],[5,2,"5"],[4,2,"1"],[3,0,"♭3"],[2,0,"5"],[1,0,"1"]],"groupe":"Fondamentale sur la corde de Mi","acc":"m"},
  {"n":"Maj7 (fondamentale corde 6)","notes":[[6,0,"1"],[4,1,"7"],[3,1,"3"],[2,0,"5"]],"x":[1,5],"groupe":"Fondamentale sur la corde de Mi","acc":"Maj7"},
  {"n":"7 (fondamentale corde 6)","notes":[[6,0,"1"],[4,0,"♭7"],[3,1,"3"],[2,0,"5"]],"x":[1,5],"groupe":"Fondamentale sur la corde de Mi","acc":"7"},
  {"n":"m7 (fondamentale corde 6)","notes":[[6,0,"1"],[4,0,"♭7"],[3,0,"♭3"],[2,0,"5"]],"x":[1,5],"groupe":"Fondamentale sur la corde de Mi","acc":"m7"},
  {"n":"6 (fondamentale corde 6)","notes":[[6,0,"1"],[4,-1,"6"],[3,1,"3"],[2,0,"5"]],"x":[1,5],"groupe":"Fondamentale sur la corde de Mi","acc":"6"},
  {"n":"m6 (fondamentale corde 6)","notes":[[6,0,"1"],[4,-1,"6"],[3,0,"♭3"],[2,0,"5"]],"x":[1,5],"groupe":"Fondamentale sur la corde de Mi","acc":"m6"},
  {"n":"m7♭5 (fondamentale corde 6)","notes":[[6,0,"1"],[4,0,"♭7"],[3,0,"♭3"],[2,-1,"♭5"]],"x":[1,5],"groupe":"Fondamentale sur la corde de Mi","acc":"m7♭5"},
  {"n":"dim7 (fondamentale corde 6)","notes":[[6,0,"1"],[4,-1,"𝄫7"],[3,0,"♭3"],[2,-1,"♭5"]],"x":[1,5],"groupe":"Fondamentale sur la corde de Mi","acc":"dim7"},
  {"n":"Majeur (fondamentale corde 5)","notes":[[5,0,"1"],[4,2,"5"],[3,2,"1"],[2,2,"3"],[1,0,"5"]],"x":[6],"groupe":"Fondamentale sur la corde de La","acc":""},
  {"n":"Mineur (fondamentale corde 5)","notes":[[5,0,"1"],[4,2,"5"],[3,2,"1"],[2,1,"♭3"],[1,0,"5"]],"x":[6],"groupe":"Fondamentale sur la corde de La","acc":"m"},
  {"n":"Maj7 (fondamentale corde 5)","notes":[[5,0,"1"],[4,2,"5"],[3,1,"7"],[2,2,"3"]],"x":[1,6],"groupe":"Fondamentale sur la corde de La","acc":"Maj7"},
  {"n":"7 (fondamentale corde 5)","notes":[[5,0,"1"],[4,2,"5"],[3,0,"♭7"],[2,2,"3"]],"x":[1,6],"groupe":"Fondamentale sur la corde de La","acc":"7"},
  {"n":"m7 (fondamentale corde 5)","notes":[[5,0,"1"],[4,2,"5"],[3,0,"♭7"],[2,1,"♭3"]],"x":[1,6],"groupe":"Fondamentale sur la corde de La","acc":"m7"},
  {"n":"6 (fondamentale corde 5)","notes":[[5,0,"1"],[4,2,"5"],[3,-1,"6"],[2,2,"3"]],"x":[1,6],"groupe":"Fondamentale sur la corde de La","acc":"6"},
  {"n":"m6 (fondamentale corde 5)","notes":[[5,0,"1"],[4,2,"5"],[3,-1,"6"],[2,1,"♭3"]],"x":[1,6],"groupe":"Fondamentale sur la corde de La","acc":"m6"},
  {"n":"m7♭5 (fondamentale corde 5)","notes":[[5,0,"1"],[4,1,"♭5"],[3,0,"♭7"],[2,1,"♭3"]],"x":[1,6],"groupe":"Fondamentale sur la corde de La","acc":"m7♭5"},
  {"n":"dim7 (fondamentale corde 5)","notes":[[5,0,"1"],[4,1,"♭5"],[3,-1,"𝄫7"],[2,1,"♭3"]],"x":[1,6],"groupe":"Fondamentale sur la corde de La","acc":"dim7"}
]},
{id:"enrichis",titre:"Accords enrichis",intro:"Voicings shell enrichis d'une extension sur la corde 2. À transposer en suivant le cycle des quartes.",formes:[
  {"n":"7","notes":[[6,0,"1"],[4,0,"♭7"],[3,1,"3"]],"x":[1,2,5],"groupe":"Dominante, fondamentale corde 6","acc":"7"},
  {"n":"13","notes":[[6,0,"1"],[4,0,"♭7"],[3,1,"3"],[2,2,"13"]],"x":[1,5],"groupe":"Dominante, fondamentale corde 6","acc":"13"},
  {"n":"7♭13","notes":[[6,0,"1"],[4,0,"♭7"],[3,1,"3"],[2,1,"♭13"]],"x":[1,5],"groupe":"Dominante, fondamentale corde 6","acc":"7♭13"},
  {"n":"7♯11","notes":[[6,0,"1"],[4,0,"♭7"],[3,1,"3"],[2,-1,"♯11"]],"x":[1,5],"groupe":"Dominante, fondamentale corde 6","acc":"7♯11"},
  {"n":"7","notes":[[5,0,"1"],[4,-1,"3"],[3,0,"♭7"]],"x":[1,2,6],"groupe":"Dominante, fondamentale corde 5","acc":"7"},
  {"n":"9","notes":[[5,0,"1"],[4,-1,"3"],[3,0,"♭7"],[2,0,"9"]],"x":[1,6],"groupe":"Dominante, fondamentale corde 5","acc":"9"},
  {"n":"7♭9","notes":[[5,0,"1"],[4,-1,"3"],[3,0,"♭7"],[2,-1,"♭9"]],"x":[1,6],"groupe":"Dominante, fondamentale corde 5","acc":"7♭9"},
  {"n":"7♯9","notes":[[5,0,"1"],[4,-1,"3"],[3,0,"♭7"],[2,1,"♯9"]],"x":[1,6],"groupe":"Dominante, fondamentale corde 5","acc":"7♯9"},
  {"n":"Maj7","notes":[[5,0,"1"],[4,-1,"3"],[3,1,"7"]],"x":[1,2,6],"groupe":"Maj9 et m9, fondamentale corde 5","acc":"Maj7"},
  {"n":"Maj9","notes":[[5,0,"1"],[4,-1,"3"],[3,1,"7"],[2,0,"9"]],"x":[1,6],"groupe":"Maj9 et m9, fondamentale corde 5","acc":"Maj9"},
  {"n":"m7","notes":[[5,0,"1"],[4,-2,"♭3"],[3,0,"♭7"]],"x":[1,2,6],"groupe":"Maj9 et m9, fondamentale corde 5","acc":"m7"},
  {"n":"m9","notes":[[5,0,"1"],[4,-2,"♭3"],[3,0,"♭7"],[2,0,"9"]],"x":[1,6],"groupe":"Maj9 et m9, fondamentale corde 5","acc":"m9"}
]}
];
