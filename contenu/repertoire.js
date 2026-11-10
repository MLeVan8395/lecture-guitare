// ============================================================================
//  Déchiffrage Guitare — répertoire : passages à lire tels qu'ils sont écrits
//
//  Musique : Jean-Sébastien Bach (1685-1750), Sonates et Partitas pour violon seul, domaine public.
//  Saisie des notes : Mutopia Project (www.mutopiaproject.org)
//    - Partita n° 1 (BWV 1002) : Erik Sandberg, d'après l'autographe, saisie versée au domaine public ;
//    - Sonate n° 3 (BWV 1005) et Partita n° 3 (BWV 1006) : Hajo Dezelski, d'après l'édition
//      Bach-Gesellschaft (1879), licence Creative Commons Attribution-ShareAlike 3.0.
//  Ce fichier, qui en est tiré, est partagé sous la même licence CC BY-SA 3.0
//  (https://creativecommons.org/licenses/by-sa/3.0/deed.fr). Le reste de l'appli n'est pas concerné.
//
//  Comment lire un passage :
//    met   : chiffrage affiché [haut, bas] ; temps : nombre de noires par mesure (métronome et décompte)
//    sig   : armure (+ dièses, − bémols)
//    n     : les mesures, séparées par « | ». Chaque note s'écrit Hauteur.Durée :
//            hauteur telle qu'elle est écrite sur la portée (C4 = Do sous la portée, # dièse, b bémol),
//            durée en douzièmes de noire (3 double croche, 6 croche, 12 noire, 24 blanche, 48 ronde),
//            r = silence, ~ à la fin = liée à la note suivante.
//    Quand le passage commence par une levée, la première mesure est complétée par des silences.
// ============================================================================
const REPERTOIRE=[
 {id:"p1-corrente",c:"J.-S. Bach",t:"Partita n° 1 en Si mineur, Corrente",ref:"BWV 1002",mes:"mesures 1 à 8",met:[3, 4],temps:3,sig:2,
  src:"saisie Erik Sandberg, Mutopia Project (d'après l'autographe), domaine public",
  n:"r.12 r.12 r.6 B4.6 | B4.6 B3.6 D4.6 F#4.6 B4.6 D5.6 | C#5.6 F#4.6 A#3.6 E4.6 D4.6 C#4.6 | B3.6 D4.6 F#4.6 B4.6 D5.6 F#5.6 | E5.6 A4.6 C#4.6 G4.6 F#4.6 E4.6 | D4.6 F#4.6 A4.6 D5.6 F#5.6 A5.6 | G5.6 B4.6 E4.6 D5.6 C#5.6 B4.6 | A#4.6 G5.6 F#5.6 E4.6 D#4.6 A4.6 | G#4.6 F#5.6 E5.6 D4.6 C#4.6 E4.6"},
 {id:"p1-borea-double",c:"J.-S. Bach",t:"Partita n° 1 en Si mineur, Double de la Bourrée",ref:"BWV 1002",mes:"mesures 1 à 16",met:[2, 2],temps:4,sig:2,
  src:"saisie Erik Sandberg, Mutopia Project (d'après l'autographe), domaine public",
  n:"r.12 r.12 r.6 B4.6 D5.6 F#5.6 | B5.6 F#5.6 D5.6 B4.6 D5.6 F#5.6 B5.6 F#5.6 | G5.6 F#5.6 E5.6 D5.6 C#5.6 B4.6 A#4.6 G5.6 | F#5.6 D5.6 C#5.6 E5.6 D5.6 B4.6 F#4.6 C#5.6 | E5.6 D5.6 C#5.6 D5.6 B4.6 F#4.6 B4.6 C#5.6 | D5.6 B4.6 F#4.6 D4.6 B3.6 D4.6 G4.6 B4.6 | C#5.6 G4.6 A3.6 G4.6 C#5.6 E5.6 A5.6 E5.6 | C#5.6 A4.6 E4.6 C#4.6 A3.6 C#4.6 F#4.6 A4.6 | B4.6 F#4.6 G3.6 F#4.6 B4.6 D5.6 F#5.6 A5.6 | B5.6 G5.6 E5.6 G5.6 E5.6 C#5.6 E5.6 C#5.6 | G4.6 A4.6 B4.6 C#5.6 D5.6 E5.6 F#5.6 G5.6 | A5.6 F#4.6 A4.6 D5.6 G4.6 E5.6 A4.6 C#5.6 | D5.6 A4.6 B3.6 A4.6 D5.6 B5.6 D5.6 G#4.6 | C#5.6 G4.6 A3.6 G4.6 C#5.6 A5.6 C5.6 F#4.6 | G4.6 B4.6 D5.6 F#4.6 E4.6 C#5.6 D5.6 E5.6 | G4.6 F#4.6 E4.6 D4.6 C#4.6 E5.6 F#5.6 G5.6 | E4.6 D4.6 C#4.6 B3.6 A3.6 G5.6 A5.6 B5.6"},
 {id:"p1-corrente-double",c:"J.-S. Bach",t:"Partita n° 1 en Si mineur, Double de la Corrente",ref:"BWV 1002",mes:"mesures 1 à 12",met:[3, 4],temps:3,sig:2,
  src:"saisie Erik Sandberg, Mutopia Project (d'après l'autographe), domaine public",
  n:"r.12 r.12 r.6 r.3 B4.3 | B4.6 A4.3 G4.3 F#4.3 E4.3 D4.3 C#4.3 B3.3 D4.3 C#4.3 B3.3 | A#3.3 C#4.3 D4.3 E4.3 F#4.3 G#4.3 A#4.3 B4.3 C#5.3 D5.3 E5.3 C#5.3 | D5.3 B4.3 A4.3 G4.3 F#4.3 E4.3 D4.3 C#4.3 B3.3 D4.3 C#4.3 B3.3 | C#4.3 E4.3 F#4.3 G4.3 A4.3 B4.3 C#5.3 D5.3 E5.3 F#5.3 G5.3 E5.3 | F#5.3 D5.3 C#5.3 B4.3 A4.3 G4.3 F#4.3 E4.3 D4.3 F#4.3 E4.3 D4.3 | E4.3 G4.3 A4.3 B4.3 C5.3 D5.3 E5.3 F#5.3 G5.3 E5.3 F#5.3 G5.3 | A#4.3 C#5.3 D5.3 E5.3 F#5.3 G4.3 F#4.3 E4.3 D#4.3 C5.3 B4.3 A4.3 | G#4.3 B4.3 C#5.3 D5.3 E5.3 F#4.3 E4.3 D4.3 C#4.3 D5.3 C#5.3 B4.3 | A#4.3 G5.3 F#5.3 E5.3 D5.3 F#5.3 G#5.3 A#5.3 B5.3 D5.3 C#5.3 B4.3 | F#4.3 C#5.3 D5.3 E5.3 F#5.3 G#5.3 A#5.3 B5.3 C#6.3 D6.3 E6.3 C#6.3 | D6.3 B5.3 A5.3 G5.3 F#5.3 E5.3 D5.3 C#5.3 B4.3 A4.3 G#4.3 F#4.3 | E4.3 B4.3 C#5.3 D5.3 E5.3 F#5.3 G#5.3 A5.3 B5.3 C#6.3 D6.3 B5.3"},
 {id:"p1-allemande-double",c:"J.-S. Bach",t:"Partita n° 1 en Si mineur, Double de l'Allemande",ref:"BWV 1002",mes:"mesures 1 à 8",met:[2, 2],temps:4,sig:2,
  src:"saisie Erik Sandberg, Mutopia Project (d'après l'autographe), domaine public",
  n:"r.12 r.12 r.12 r.6 r.3 F#5.3 | B4.3 D5.3 F#5.3 B5.3 G5.3 E5.3 C#5.3 E5.3 A#4.3 G5.3 F#5.3 E5.3 D5.3 B4.3 F#4.3 A4.3 | G4.3 F#5.3 E5.3 D5.3 C#5.3 E5.3 G5.3 B4.3 A#4.3 C#5.3 F#4.3 E4.3 D4.3 B4.3 C#4.3 C#5.3 | D5.3 F#4.3 B3.3 C#4.3 D4.3 E4.3 F#4.3 G4.3 A4.3 D4.3 F#4.3 A4.3 D5.3 E5.3 F#5.3 A4.3 | B4.3 G4.3 B4.3 D5.3 G5.3 B4.3 G4.3 E4.3 C#4.3 E4.3 A4.3 G5.3 F#5.3 D4.3 G4.3 E5.3 | C#5.3 A4.3 C#5.3 E5.3 A5.3 C5.3 A4.3 F#4.3 D#4.3 F#4.3 B4.3 F#5.3 A5.3 C6.3 B5.3 A5.3 | G5.3 B5.3 G5.3 E5.3 B4.3 D5.3 C#5.3 B4.3 A#4.3 G5.3 F#5.3 E4.3 D4.3 F#4.3 B4.3 D5.3 | G#4.3 F#5.3 E5.3 D4.3 C#4.3 E4.3 G4.3 B3.3 A#3.3 F#4.3 C#5.3 E5.3 D5.3 F#4.3 B3.3 D5.3 | C#5.3 F#5.3 C#5.3 A#4.3 F#4.3 A#4.3 C#5.3 E4.3 D4.3 F#5.3 D5.3 B4.3 G#4.3 B4.3 E5.3 A#4.3"},
 {id:"s3-allegro",c:"J.-S. Bach",t:"Sonate n° 3 en Do majeur, Allegro assai",ref:"BWV 1005",mes:"mesures 1 à 16",met:[3, 4],temps:3,sig:0,
  src:"saisie Hajo Dezelski, Mutopia Project (éd. Bach-Gesellschaft, 1879), CC BY-SA 3.0",
  n:"C5.3 D5.3 E5.3 F5.3 G5.6 C5.6 D5.3 C5.3 B4.3 A4.3 | G4.3 A4.3 B4.3 C5.3 D5.3 E5.3 F5.3 A5.3 G5.3 F5.3 E5.3 D5.3 | C5.3 D5.3 E5.3 F5.3 G5.6 C5.6 D5.3 C5.3 B4.3 A4.3 | G4.3 A4.3 B4.3 D5.3 C5.3 B4.3 A4.3 G4.3 F4.3 E4.3 F4.3 D4.3 | E4.3 C5.3 B4.3 C5.3 D5.3 C5.3 B4.3 C5.3 G5.3 C5.3 B4.3 C5.3 | E4.3 C5.3 G5.3 C5.3 A5.3 C5.3 Bb5.3 C5.3 A5.3 C5.3 G5.3 C5.3 | F4.3 C5.3 B4.3 C5.3 D5.3 C5.3 B4.3 C5.3 A5.3 C5.3 B4.3 C5.3 | F4.3 C5.3 A5.3 C5.3 F4.3 C5.3 E4.3 C5.3 F4.3 C5.3 D4.3 C5.3 | E4.3 C5.3 B4.3 C5.3 D5.3 C5.3 B4.3 C5.3 G5.3 C5.3 B4.3 C5.3 | E4.3 C5.3 G5.3 C5.3 A5.3 C5.3 Bb5.3 C5.3 A5.3 C5.3 G5.3 C5.3 | F4.3 C5.3 B4.3 C5.3 D5.3 C5.3 B4.3 C5.3 A5.3 C5.3 B4.3 C5.3 | F4.3 C5.3 A5.3 C5.3 F4.3 C5.3 E4.3 C5.3 F4.3 C5.3 D4.3 C5.3 | E4.3 C5.3 B4.3 C5.3 G5.3 C5.3 B4.3 C5.3 A4.3 C5.3 B4.3 C5.3 | D4.3 C5.3 B4.3 C5.3 F5.3 C5.3 B4.3 C5.3 G4.3 C5.3 B4.3 C5.3 | C4.3 D4.3 E4.3 F4.3 G4.3 C5.3 D5.3 E5.3 F5.3 E5.3 D5.3 C5.3 | D5.3 C5.3 B4.3 A4.3 G4.6 D5.6 F4.3 E4.3 F4.3 D4.3"},
 {id:"p3-preludio",c:"J.-S. Bach",t:"Partita n° 3 en Mi majeur, Preludio",ref:"BWV 1006",mes:"mesures 1 à 12",met:[3, 4],temps:3,sig:4,
  src:"saisie Hajo Dezelski, Mutopia Project (éd. Bach-Gesellschaft, 1879), CC BY-SA 3.0",
  n:"r.6 E6.3 D#6.3 E6.6 B5.6 G#5.6 B5.6 | E5.3 F#5.3 E5.3 D#5.3 E5.6 B4.6 G#4.6 B4.6 | E4.3 B4.3 F#4.3 B4.3 G#4.3 B4.3 A4.3 B4.3 G#4.3 B4.3 F#4.3 B4.3 | E4.3 E5.3 D#5.3 C#5.3 B4.3 E5.3 D#5.3 C#5.3 B4.3 A4.3 G#4.3 F#4.3 | E4.3 B4.3 F#4.3 B4.3 G#4.3 B4.3 A4.3 B4.3 G#4.3 B4.3 F#4.3 B4.3 | E4.3 E5.3 D#5.3 C#5.3 B4.3 E5.3 D#5.3 C#5.3 B4.3 A4.3 G#4.3 F#4.3 | E4.3 F#4.3 G#4.3 A4.3 B4.3 C#5.3 D#5.3 E5.3 F#5.3 G#5.3 A5.3 F#5.3 | G#5.3 B5.3 E5.3 F#5.3 G#5.3 A5.3 B5.3 C#6.3 D#6.3 E6.3 C#6.3 D#6.3 | E6.3 B5.3 A5.3 B5.3 G#5.3 B5.3 A5.3 B5.3 G#5.3 B5.3 F#5.3 B5.3 | E5.3 E6.3 D#6.3 C#6.3 B5.3 E5.3 C#6.3 E5.3 B5.3 E5.3 A5.3 E5.3 | G#5.3 B5.3 F#5.3 B5.3 G#5.3 B5.3 A5.3 B5.3 G#5.3 B5.3 F#5.3 B5.3 | E5.3 E6.3 D#6.3 C#6.3 B5.3 E5.3 C#6.3 E5.3 B5.3 E5.3 A5.3 E5.3"}
];
